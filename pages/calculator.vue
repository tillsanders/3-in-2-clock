<template>
  <div>
    <template v-if="mode === 'real-to-game'">
      <label>{{ t('real-time') }}</label>
      <select v-model="dayIn">
        <option value="0">
          {{ t('day-1') }}
        </option>
        <option value="1">
          {{ t('day-2') }}
        </option>
      </select>
      <input v-model="timeIn" type="timeIn" placeholder="SS:MM">
    </template>
    <template v-else-if="mode === 'game-to-real'">
      <label>{{ t('game-time') }}</label>
      <select v-model="dayIn">
        <option value="0">
          {{ t('day-1') }}
        </option>
        <option value="1">
          {{ t('day-2') }}
        </option>
        <option value="2">
          {{ t('day-3') }}
        </option>
      </select>
      <input v-model="timeIn" type="timeIn" placeholder="SS:MM">
    </template>

    <button class="calculator__toggle" :title="t('toggle')" @click="toggleMode">
      <div class="calculator__toggle_icon" :class="{ 'calculator__toggle_icon--flipped': mode === 'real-to-game' }">
        <ClientOnly>
          <FontAwesomeIcon icon="exchange-alt" fixed-width />
        </ClientOnly>
      </div>
    </button>

    <template v-if="mode === 'real-to-game'">
      <label>{{ t('game-time') }}</label>
      <input v-model="timeOut" type="timeOut" disabled>
    </template>
    <template v-else-if="mode === 'game-to-real'">
      <label>{{ t('real-time') }}</label>
      <input v-model="timeOut" type="timeOut" disabled>
    </template>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: 'local' })
const dayIn = ref(0)
const timeIn = ref('00:00')
const mode = ref('real-to-game')
const days = [t('day-1'), t('day-2'), t('day-3')]

const timeOut = computed(() => {
  const result = calculate(dayIn.value, timeIn.value, mode.value)
  if (result !== undefined) {
    return days[result.day] + ', ' + result.hours + ':' + result.minutes
  }
  return '-'
})

function calculate (dayIn: number, timeIn: string, mode: string): { day: number, hours: string, minutes: string } | undefined {
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
}

function toggleMode () {
  const result = calculate(dayIn.value, timeIn.value, mode.value)
  if (result !== undefined) {
    dayIn.value = result.day
    timeIn.value = result.hours + ':' + result.minutes
  }
  if (mode.value === 'real-to-game') {
    mode.value = 'game-to-real'
  } else {
    mode.value = 'real-to-game'
  }
}
</script>

<i18n lang="yaml">
en:
  game-time: "Game Time"
  real-time: "Real Time"
  day-1: "Day 1"
  day-2: "Day 2"
  day-3: "Day 3"
  toggle: "Switch conversion direction"
de:
  game-time: "Spielzeit"
  real-time: "Echtzeit"
  day-1: "Tag 1"
  day-2: "Tag 2"
  day-3: "tag 3"
  toggle: "Umrechnungsrichtung wechseln"
</i18n>

<style lang="scss">
  .calculator__toggle {
    padding: 2rem 2rem 3rem 2rem;
    font-size: 3vmin;
    cursor: pointer;
    appearance: none;
    border: 0;
    background: transparent;
    display: block;
    margin: 0 auto;
    color: currentColor;
  }
  .calculator__toggle_icon {
    transition: all 0.25s ease-out;
    &.calculator__toggle_icon--flipped {
      transform: rotate(180deg);
    }
  }
</style>
