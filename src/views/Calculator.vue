<template>
  <div>
    <label>Echtzeit</label>
    <select v-model="dayIn">
      <option value="0">Tag 1</option>
      <option value="1">Tag 2</option>
    </select>
    <input type="timeIn" v-model="timeIn" placeholder="SS:MM">
    <label>Spielzeit</label>
    <input type="timeOut" v-model="timeOut" disabled>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      dayIn: 0,
      timeIn: '00:00',
    };
  },
  computed: {
    timeOut() {
      let dayOut = 0;
      let hoursOut = 0;
      let minutesOut = 0;
      let minutesElapsed = 0;
      const days = [ 'Tag 1', 'Tag 2', 'Tag 3' ];
      const hoursIn = parseInt(this.timeIn.split(':')[0]);
      const minutesIn = parseInt(this.timeIn.split(':')[1]);
      if (typeof hoursIn === 'number' && typeof minutesIn === 'number' && hoursIn >= 0 && hoursIn <= 24 && minutesIn >= 0 && minutesIn <= 60) {
        minutesElapsed = (this.dayIn * 24 * 60 + hoursIn * 60 + minutesIn) * 3 / 2;
        dayOut = Math.floor(minutesElapsed / 60 / 24);
        hoursOut = Math.floor(minutesElapsed / 60) % 24;
        minutesOut = Math.floor(minutesElapsed % 60);
        return days[dayOut] + ', ' + hoursOut.toString().padStart(2, '0') + ':' + minutesOut.toString().padStart(2, 0);
      }
      return '-';
    }
  }
};
</script>
