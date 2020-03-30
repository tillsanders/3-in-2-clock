<template>
  <div class="clock">
    <template v-if="start !== null && currentTime > start && currentTime <= end">
      <div class="clock__gametime">
        <div class="clock__day">
          Tag&nbsp;{{ days(gameTime) + 1 }},&nbsp;
        </div>
        <div class="clock__hours_minutes">
          {{ format(hours(gameTime)) }}:{{ format(minutes(gameTime)) }}
        </div>
        <div class="clock__seconds">
          :{{ format(seconds(gameTime)) }}
        </div>
      </div>
      <div class="clock__realtime_toggle">
        <font-awesome-icon v-if="realTimeVisible" icon="eye" fixed-width @click="realTimeVisible = false" />
        <font-awesome-icon v-if="!realTimeVisible" icon="eye-slash" fixed-width @click="realTimeVisible = true" />
      </div>
      <div class="clock__realtime_wrapper">
        <div v-if="realTimeVisible" class="clock__realtime">
          <div class="clock__day">
            Tag&nbsp;{{ days(realTime) + 1 }},&nbsp;
          </div>
          <div class="clock__hours_minutes">
            {{ format(hours(realTime)) }}:{{ format(minutes(realTime)) }}
          </div>
          <div class="clock__seconds">
            :{{ format(seconds(realTime)) }}
          </div>
        </div>
      </div>
    </template>
    <template v-else-if="start !== null && currentTime < start">
      <div class="clock__empty">
        BEREIT
      </div>
    </template>
    <template v-else-if="start !== null && currentTime > end">
      <div class="clock__empty">
        ENDE
      </div>
    </template>
    <template v-else>
      <div class="clock__empty">
        3 in 2
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      start: null, // start date as unix timestamp
      end: null, // end date as unix timestamp
      currentTime: null, // current unix timestamp
      realTimeVisible: false,
      realTime: null, // real time passed, in seconds
      gameTime: null, // pretended time passed, in seconds
      timezoneOffset: 60 * 60 * 1000
    }
  },
  mounted () {
    const date = window.localStorage.getItem('date')
    if (typeof date !== 'undefined' && date !== null) {
      this.start = new Date(date).getTime() + this.timezoneOffset
      this.end = this.start + 2 * 24 * 60 * 60 * 1000
    }
    setInterval(() => {
      this.currentTime = new Date().getTime() + this.timezoneOffset
      this.realTime = this.currentTime - this.start + this.timezoneOffset
      this.gameTime = this.realTime / 2 * 3
    }, 1)
  },
  methods: {
    days (timestamp) {
      return Math.floor(timestamp / 24 / 60 / 60 / 1000)
    },
    hours (timestamp) {
      return Math.floor((timestamp - this.days(timestamp) * 24 * 60 * 60 * 1000) / 60 / 60 / 1000)
    },
    minutes (timestamp) {
      return Math.floor((timestamp - this.days(timestamp) * 24 * 60 * 60 * 1000 - this.hours(timestamp) * 60 * 60 * 1000) / 60 / 1000)
    },
    seconds (timestamp) {
      return Math.floor((timestamp - this.days(timestamp) * 24 * 60 * 60 * 1000 - this.hours(timestamp) * 60 * 60 * 1000 - this.minutes(timestamp) * 60 * 1000) / 1000)
    },
    format (time) {
      if (time < 10) {
        return `0${time}`
      }
      return time
    }
  }
}
</script>

<style lang="scss">
  .clock__gametime, .clock__empty {
    font-size: 7vmin;
    text-align: center;
    position: relative;
    display: inline-block;
    margin: 0 auto;
  }
  .clock__realtime_toggle {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    color: #555;
    cursor: pointer;
  }
  .clock__realtime_wrapper {
    position: absolute;
    right: 0;
    bottom: 2rem;
    left: 0;
  }
  .clock__realtime {
    display: inline-block;
    position: relative;
    font-size: 4vmin;
    color: #555;
  }
  .clock__day,
  .clock__hours_minutes,
  .clock__seconds {
    display: inline-block;
  }
  .clock__hours_minutes {
    color: #FFF;
  }
  .clock__day, .clock__seconds {
    color: #555;
  }
  .clock__day {
    position: absolute;
    top: 0;
    right: 100%;
  }
  .clock__seconds {
    position: absolute;
    top: 0;
    left: 100%;
  }
</style>
