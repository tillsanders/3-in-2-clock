<template>
  <main>
    <div class="wrapper">
      <template v-if="currentRoute && currentRoute.startsWith('index')">
        <NuxtLink
          :to="localePath('/settings')"
          :title="t('navigation.settings')"
        >
          <ClientOnly>
            <FontAwesomeIcon id="settings-link" icon="cog" fixed-width />
          </ClientOnly>
        </NuxtLink>
        <NuxtLink
          :to="localePath('/calculator')"
          :title="t('navigation.calculator')"
        >
          <ClientOnly>
            <FontAwesomeIcon
              id="calculator-link"
              icon="calculator"
              fixed-width
            />
          </ClientOnly>
        </NuxtLink>
      </template>
      <template v-else>
        <NuxtLink :to="localePath('/')">
          <ClientOnly>
            <FontAwesomeIcon
              id="settings-link"
              icon="times"
              fixed-width
              :title="t('navigation.close')"
            />
          </ClientOnly>
        </NuxtLink>
      </template>
      <slot />

      <div id="smallprint">
        <NuxtLink v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')"
          >EN</NuxtLink
        >
        <NuxtLink v-if="$i18n.locale !== 'de'" :to="switchLocalePath('de')"
          >DE</NuxtLink
        >
        <a href="https://plausible.io/3-in-2.com">{{ t("links.stats") }}</a>
        <a href="https://till-sanders.de/privacy">{{ t("links.privacy") }}</a>
        <a href="https://till-sanders.de/about">{{ t("links.about") }}</a>
        <a
          href="https://fosstodon.org/@tillsanders"
          :title="t('links.fosstodon')"
        >
          <ClientOnly>
            <FontAwesomeIcon :icon="['fab', 'mastodon']" fixed-width />
          </ClientOnly>
        </a>
        <a
          href="https://github.com/tillsanders/3-in-2-clock"
          :title="t('links.github')"
        >
          <ClientOnly>
            <FontAwesomeIcon id="github-link" icon="code-branch" fixed-width />
          </ClientOnly>
        </a>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const { t } = useI18n({ useScope: "local" });
const currentRoute = computed(
  () => useRouter().currentRoute.value.name as string | undefined,
);
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
</script>

<i18n lang="yaml">
en:
  navigation:
    settings: "Settings"
    calculator: "Calculator"
    close: "Close"
  links:
    stats: "Stats"
    privacy: "Privacy"
    about: "Site Notice"
    fosstodon: "Visit the author on Mastodon"
    github: "Visit on GitHub"
de:
  navigation:
    settings: "Einstellungen"
    calculator: "Umrechnung"
    close: "Schließen"
  links:
    stats: "Stats"
    privacy: "Datenschutz"
    about: "Impressum"
    twitter: "Besuche den Entwickler auf Twitter"
    github: "Besuche das Projekt auf GitHub"
</i18n>

<style lang="scss">
body {
  margin: 0;
  background-color: #000;
  color: #eee;
  font-family: monospace;
  font-weight: 100;
  text-transform: uppercase;
  user-select: none;
}

input,
select {
  font-family: sans-serif;
  display: block;
  width: calc(100% - 2rem);
  outline: none;
  padding: 1rem;
  margin: 1rem 0;
  border: none;
  background: #333;
  color: #fff;
  font-weight: 100;
  font-size: 4vmin;
  border-radius: 0;
  appearance: none;
  min-height: 1.4em;
}

select {
  width: 100%;
}

html,
body,
#__nuxt,
#__layout,
main {
  height: 100%;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  .container {
    flex: auto;
  }
  .wrapper {
    padding: 1rem;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

#settings-link {
  position: fixed;
  top: 0;
  right: 0;
  padding: 1rem;
  color: #555;
}

#calculator-link {
  position: fixed;
  top: 0;
  right: 3rem;
  padding: 1rem;
  color: #555;
}

#smallprint {
  font-size: 0.65rem;
  display: block;
  position: fixed;
  bottom: env(safe-area-inset-bottom, 0);
  right: 0;
  color: #555;
  padding: 0.5rem;
  a {
    display: inline-block;
    padding: 0.5rem;
  }
}
</style>
