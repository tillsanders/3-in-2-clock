<template>
  <div class="intro">
    <div id="first" class="intro__page">
      <span>
        <strong>{{ t("intro-1") }}</strong>
        <small>{{ t("scroll") }}</small>
      </span>
    </div>
    <div id="second" class="intro__page">
      <strong>{{ t("intro-2") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-3") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-4") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-5") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-6") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-7") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-8") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-9") }}</strong>
    </div>
    <div class="intro__page">
      <strong>{{ t("intro-10") }}</strong>
    </div>
    <div id="welcome" class="intro__page">
      <h1>
        <small>{{ t("welcome") }}</small>
        <strong>{{ t("3-in-2") }}</strong>
      </h1>
      <form @submit.prevent="onSubmit">
        <label>{{ t("label") }}</label>
        <input v-model="date" type="date" />
        <button
          type="submit"
          :disabled="typeof date !== 'string' || date === ''"
        >
          {{ t("submit") }}
        </button>
        <div class="intro__quick-actions">
          <button type="button" @click="useToday">{{ t("today") }}</button>
          <button type="button" @click="useYesterday">
            {{ t("yesterday") }}
          </button>
          <button type="button" @click="useTomorrow">
            {{ t("tomorrow") }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
const localePath = useLocalePath();

const { startDate: date } = useStartDate();

if (typeof date.value === "string" && date.value !== "") {
  useRouter().push({ path: localePath("/clock") });
}

function useToday() {
  date.value = new Date().toISOString().split("T")[0];
}

function useYesterday() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  date.value = yesterday.toISOString().split("T")[0];
}

function useTomorrow() {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  date.value = tomorrow.toISOString().split("T")[0];
}

function onSubmit() {
  if (date.value) {
    useRouter().push({ path: localePath("/clock") });
  }
}
</script>

<i18n lang="yaml">
en:
  intro-1: "Hello stranger."
  scroll: "Don't be shy, scroll."
  intro-2: "How much time do you have? Such a simple question ..."
  intro-3: "See, we all have a fixed amount of time in this world."
  intro-4: "No one knows how much they have."
  intro-5: "And the universe doesn't owe you any more if you waste it."
  intro-6: "So you can spend your days watching the sun and the moon dance."
  intro-7: "Or ... every once in a while ..."
  intro-8: "... you can sneak an extra day into your life."
  intro-9: "And in two days live three."
  intro-10: "Use them wisely."
  welcome: "Welcome to"
  3-in-2: "3 in 2"
  label: "Please set your start date, now."
  submit: "Set start date"
  today: "Today"
  yesterday: "Yesterday"
  tomorrow: "Tomorrow"
de:
  intro-1: "Hallo."
  scroll: "Sei nicht schüchtern, scrolle."
  intro-2: "Wie viel Zeit hast du? So eine einfache Frage ..."
  intro-3: "Wir alle haben eine endliche Menge Zeit in dieser Welt."
  intro-4: "Niemand weiß, wie viel uns bleibt."
  intro-5: "Und das Universum schuldet dir keine Sekunde mehr, wenn du sie verschwendest."
  intro-6: "Du kannst deine Tage damit verbringen, dem Lauf von Sonne und Mond zu folgen."
  intro-7: "Oder ... ab und zu ..."
  intro-8: "... kannst du dir einen zusätzlichen Tag erspielen."
  intro-9: "Und in zwei Tagen drei erleben."
  intro-10: "Nutze sie weise."
  welcome: "Willkommen bei"
  3-in-2: "3 in 2"
  label: "Bitte setze dein Start-Datum, jetzt."
  submit: "Start-Datum setzen"
  today: "Heute"
  yesterday: "Gestern"
  tomorrow: "Morgen"
</i18n>

<style lang="scss">
.intro {
  text-align: center;
  background-color: #000;
  color: #fff;
  scroll-snap-type: mandatory;
  scroll-snap-type: y mandatory;
  overflow: auto;
  position: absolute;
  inset: 0;
  scroll-behavior: smooth;

  &__page {
    height: 100vh;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      padding: 2rem 10vw;
      font-size: 1.5rem;
      animation-name: flicker;
      animation-duration: 10s;
      animation-iteration-count: infinite;
      animation-timing-function: ease-in-out;
    }
  }

  &__quick-actions {
    display: flex;
    gap: 0.5rem;
    margin-top: 1rem;

    button {
      background: #000;
      border: 2px solid #aaa;
      color: #aaa;
      font-size: 2vmin;
      padding: 0.5rem;
      margin: 0;
    }
  }
}

#first {
  justify-content: flex-end;

  span {
    display: flex;
    flex-direction: column;
    margin-bottom: calc(25vh + env(safe-area-inset-bottom, 0));
  }

  small {
    color: #666;
  }
}

#welcome {
  small {
    display: block;
    font-size: 1rem;
    margin-bottom: 2vh;
  }

  strong {
    font-size: 15vmin;
  }

  form {
    max-width: 35rem;
    padding: 5rem;
    margin: 0 auto;
  }
}

@keyframes flicker {
  0%,
  19%,
  22%,
  62%,
  64%,
  70%,
  100% {
    opacity: 0.99;
    text-shadow:
      0 -0.05em 0.15em rgb(255 255 255 / 75%),
      0 0 0.1em rgb(255 255 255 / 10%),
      0 0 0.5em rgb(255 255 255 / 10%),
      0 0 0.1em #619fbe,
      0 0 2px #000;
  }

  20%,
  21%,
  63%,
  65%,
  69.9% {
    opacity: 0.4;
    text-shadow: none;
  }
}
</style>
