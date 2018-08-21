<template>
  <div>
    <input type="date" v-model="date">
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      date: new Date().toString(),
    };
  },
  mounted() {
    const date = window.localStorage.getItem('date');
    if (typeof date !== 'undefined' && date !== null) {
      this.date = date;
    }
  },
  watch: {
    date(date) {
      window.localStorage.setItem('date', date);
    },
  },
};
</script>
