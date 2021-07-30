<template>
  <div>
    <template v-if="mode === 'real-to-game'">
      <label>Echtzeit</label>
      <select v-model="dayIn">
        <option value="0">
          Tag 1
        </option>
        <option value="1">
          Tag 2
        </option>
      </select>
      <input v-model="timeIn" type="timeIn" placeholder="SS:MM">
    </template>
    <template v-else-if="mode === 'game-to-real'">
      <label>Spielzeit</label>
      <select v-model="dayIn">
        <option value="0">
          Tag 1
        </option>
        <option value="1">
          Tag 2
        </option>
        <option value="2">
          Tag 3
        </option>
      </select>
      <input v-model="timeIn" type="timeIn" placeholder="SS:MM">
    </template>

    <div class="calculator__toggle" @click="toggleMode">
      <div class="calculator__toggle_icon" :class="{ 'calculator__toggle_icon--flipped': mode === 'real-to-game' }">
        <FontAwesomeIcon icon="exchange-alt" fixed-width />
      </div>
    </div>

    <template v-if="mode === 'real-to-game'">
      <label>Spielzeit</label>
      <input v-model="timeOut" type="timeOut" disabled>
    </template>
    <template v-else-if="mode === 'game-to-real'">
      <label>Echtzeit</label>
      <input v-model="timeOut" type="timeOut" disabled>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data () {
    return {
      dayIn: 0,
      timeIn: '00:00',
      mode: 'real-to-game',
      days: ['Tag 1', 'Tag 2', 'Tag 3']
    }
  },
  computed: {
    timeOut () {
      const result = this.calculate(this.dayIn, this.timeIn, this.mode)
      if (typeof result.day !== 'undefined' && typeof result.hours !== 'undefined' && typeof result.minutes !== 'undefined') {
        return this.days[result.day] + ', ' + result.hours + ':' + result.minutes
      }
      return '-'
    }
  },
  methods: {
    calculate (dayIn, timeIn, mode) {
      let minutesElapsed = 0
      const hoursIn = parseInt(timeIn.split(':')[0])
      const minutesIn = parseInt(timeIn.split(':')[1])
      if (typeof hoursIn === 'number' && typeof minutesIn === 'number' && hoursIn >= 0 && hoursIn <= 24 && minutesIn >= 0 && minutesIn <= 60) {
        if (mode === 'real-to-game') {
          minutesElapsed = (dayIn * 24 * 60 + hoursIn * 60 + minutesIn) * 3 / 2
        } else if (mode === 'game-to-real') {
          minutesElapsed = (dayIn * 24 * 60 + hoursIn * 60 + minutesIn) / 3 * 2
        }
        return {
          day: Math.floor(minutesElapsed / 60 / 24),
          hours: (Math.floor(minutesElapsed / 60) % 24).toString().padStart(2, '0'),
          minutes: (Math.floor(minutesElapsed % 60)).toString().padStart(2, '0')
        }
      }
      return []
    },
    toggleMode () {
      const result = this.calculate(this.dayIn, this.timeIn, this.mode)
      if (typeof result.day !== 'undefined' && typeof result.hours !== 'undefined' && typeof result.minutes !== 'undefined') {
        this.dayIn = result.day
        this.timeIn = result.hours + ':' + result.minutes
      }
      if (this.mode === 'real-to-game') {
        this.mode = 'game-to-real'
      } else {
        this.mode = 'real-to-game'
      }
    }
  }
}
</script>

<style lang="scss">
  .calculator__toggle {
    padding: 2rem 2rem 3rem 2rem;
    font-size: 3vmin;
    cursor: pointer;

  }
  .calculator__toggle_icon {
    transition: all 0.25s ease-out;
    &.calculator__toggle_icon--flipped {
      transform: rotate(180deg);
    }
  }
</style>
