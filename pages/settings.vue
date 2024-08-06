<template>
  <div class="settings">
    <form @submit.prevent="onSubmit">
      <label>{{ t("label") }}</label>
      <input v-model="date" type="date" />
      <button type="submit" :disabled="typeof date !== 'string' || date === ''">
        {{ t("submit") }}
      </button>
    </form>
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
const localePath = useLocalePath();
const { startDate: date } = useStartDate();

function onSubmit() {
  if (date.value) {
    useRouter().push({ path: localePath("/clock") });
  }
}

function unset() {
  date.value = "";
  useRouter().push({ path: localePath("/") });
}
</script>

<i18n lang="yaml">
en:
  label: "Start date"
  submit: "Okay"
  unset: "Unset start-date."
de:
  label: "Start-Datum"
  submit: "Okay"
  unset: "Start-Datum leeren."
</i18n>

<style lang="scss">
.settings {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  min-height: 90vh;
  min-height: 90dvh;
}

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
