<template>
  <div class="settings">
    <input v-model="date" type="date" />
    <div class="settings__actions">
      <button v-if="date" :title="t('unset')" @click="unset">
        <ClientOnly>
          <FontAwesomeIcon icon="trash" />
        </ClientOnly>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
const date = ref("");
watch(date, (date) => {
  window.localStorage.setItem("date", date);
});

onMounted(() => {
  let input = window.localStorage.getItem("date");
  if (typeof input === "undefined" || input === null) {
    input = "";
    return;
  }
  date.value = input;
});

function unset() {
  date.value = "";
  window.localStorage.removeItem("date");
}
</script>

<i18n lang="yaml">
en:
  unset: "Unset start-date."
de:
  unset: "Start-Datum leeren."
</i18n>

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
    color: #f00;
    padding: 1rem;
    font-size: 4vmin;
  }
}
</style>
