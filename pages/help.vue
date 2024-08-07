<template>
  <div class="help">
    <h1>{{ t("help") }}</h1>
    <p>{{ t("introduction") }}</p>
    <p>{{ t("usage") }}</p>
    <p>{{ t("settings") }}</p>
    <p>{{ t("realtime") }}</p>
    <p>{{ t("calculator") }}</p>
    <p>{{ t("tipp") }}</p>
    <p>{{ t("homescreen") }}</p>
    <p>{{ t("safety") }}</p>
    <NuxtLink :to="localePath('/clock')">
      {{ t("back") }}
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
const localePath = useLocalePath();
</script>

<i18n lang="yaml">
en:
  help: "Guide"
  introduction: "3-in-2 is a game for youth groups (or other crazy people) that is played in 48 hours. It was designed for holiday programmes or other events where young people come together and want to experience something together. The normal daily structure and the programme for 3 whole days can be planned as usual, but take place within 48 hours rather than 72 hours. This website helps to forget the real time and live in the playtime."
  usage: "A 3-in-2 game starts and ends at midnight. Only the start date has to be set to the first day of the game. At the stroke of midnight, the clock starts running at 1.333 times the speed of a normal clock. The programme can now be carried out as usual, always keeping an eye on the play time of the clock."
  settings: "The start date can be set and reset in the settings. The settings are only valid for the current browser. If several clocks are required, all participants must therefore set the start date themselves."
  realtime: "If you want to see the real time in addition to the playing time, you can show and hide the real-time clock by clicking on the eye symbol."
  calculator: "The calculator symbol can be used to convert the current playing time into real time. The calculation can be reversed by clicking on the arrow symbols between the input fields."
  tipp: "Tip: The game is most fun when the real time is forgotten and only the game time is used for orientation. The best way to do this is to take all the real clocks off the walls and voluntarily collect mobile phones or stick clocks on them."
  homescreen: "Tip: Add this website to your home screen to access it conveniently and use it like an app."
  safety: "Safety: The game is not suitable for children, as it is also easy for young people and adults to become overtired. All participants should feel safe and comfortable at all times. It is advisable to encourage participants to take breaks and look after themselves and others."
  back: "Back"
de:
  help: "Handbuch"
  introduction: "3-in-2 ist ein Spiel für Jugendgruppen (oder andere verrückte Menschen), das in 48 Stunden gespielt wird. Es wurde konzipiert für Ferienprogramme oder andere Veranstaltungen, bei denen Jugendliche zusammenkommen und gemeinsam etwas erleben wollen. Die normale Tagesstruktur und das Programm für 3 ganze Tage können dabei wie gewohnt geplant werden, finden jedoch nicht innerhalb von 72 Stunden, sondern 48 Stunden statt. Diese Website hilft dabei, die echte Zeit zu vergessen und in der Spielzeit zu leben."
  usage: "Ein 3-in-2 Spiel beginnt und endet um Mitternacht. Lediglich das Start-Datum muss auf den ersten Spieltag eingestellt werden. Punkt Mitternacht beginnt die Uhr zu laufen, mit 1,333-facher Geschwindigkeit einer normalen Uhr. Nun kann das Programm wie gewohnt durchgeführt werden, stets mit Blick auf die Spielzeit der Uhr."
  settings: "In den Einstellungen kann das Start-Datum gesetzt und zurückgesetzt werden. Die Einstellungen sind nur für den aktuellen Browser gültig. Werden mehrere Uhren benötigt, müssen also alle Teilnehmenden das Start-Datum entsprechend selbst setzen."
  realtime: "Möchte man zusätzlich zur Spielzeit auch die echte Zeit sehen, kann die Echtzeit-Uhr mit einem Klick auf das Augen-Symbol ein- und ausgeblendet werden."
  calculator: "Über das Taschenrechner-Symbol kann die aktuelle Spielzeit in echte Zeit umgerechnet werden. Mit einem Klick auf die Pfeil-Symbole zwischen den Eingabefeldern kann die Berechnung umgekehrt werden."
  tipp: "Tipp: Das Spiel macht am meisten Spaß, wenn die echte Zeit vergessen wird und nur die Spielzeit zur Orientierung dient. Dazu nimmt man am besten alle echten Uhren von den Wänden und sammelt Handys freiwillig ein oder klebt Uhren ab."
  homescreen: "Tipp: Füge diese Website deinem Startbildschirm hinzu, um sie bequem zu erreichen und wie eine App verwenden zu können."
  safety: "Sicherheit: Das Spiel ist nicht für Kinder geeignet, da es auch bei Jugendlichen und Erwachsenen leicht zur Übermüdung kommt. Alle Teilnehmenden sollten sich jederzeit sicher und wohl fühlen. Es ist ratsam, die Teilnehmenden zu ermutigen, Pausen zu machen und auf sich selbst und andere zu achten."
  back: "Zurück"
</i18n>

<style lang="scss">
.help {
  padding: 1rem;
  max-width: 50rem;
  margin: 0 auto;
  font-size: 1.5rem;
  line-height: 1.5;
  text-align: justify;

  p {
    text-transform: none;
  }

  a {
    display: inline-block;
    margin: 2rem auto;
    text-decoration: none;
    font-size: 1.5rem;
  }
}
</style>
