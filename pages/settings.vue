<template>
  <div class="settings">
    <input v-model="date" type="date">
    <div class="settings__actions">
      <button v-if="date" @click="unset"><FontAwesomeIcon icon="trash" /></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Settings',
  data () {
    return {
      date: ''
    }
  },
  watch: {
    date (date) {
      window.localStorage.setItem('date', date)
    }
  },
  mounted () {
    const date = window.localStorage.getItem('date')
    if (typeof date === 'undefined' || date === null) {
      this.date = ''
      return
    }
    this.date = date
  },
  methods: {
    unset() {
      this.date = ''
      window.localStorage.removeItem('date')
    }
  }
}
</script>

<style lang="scss">
.settings__actions {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 30vh;
  text-align: center;
  button {
    appearance: none;
    border: 0;
    background: transparent;
    color: #F00;
    padding: 1rem;
    font-size: 4vmin;
  }
}
</style>
