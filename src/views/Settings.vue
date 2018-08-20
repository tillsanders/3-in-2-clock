<template>
  <main>
    <div class="wrapper">
      <input type="date" v-model="date">
    </div>
  </main>
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

<style lang="scss">
  input {
    outline: none;
    padding: 1rem;
    border: none;
    background: #444;
    color: #FFF;
    font-weight: 100;
    font-size: 4vmax;
  }
</style>
