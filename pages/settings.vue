<template>
  <div>
    <input v-model="date" type="date">
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      date: new Date().toString()
    }
  },
  watch: {
    date (date) {
      window.localStorage.setItem('date', date)
    }
  },
  mounted () {
    const date = window.localStorage.getItem('date')
    if (typeof date !== 'undefined' && date !== null) {
      this.date = date
    }
  }
}
</script>
