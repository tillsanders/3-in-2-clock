<template>
  <main>
    <div class="wrapper">
      <template v-if="$route.name.startsWith('index')">
        <nuxt-link :to="localePath('/settings')" :title="$t('navigation.settings')">
          <FontAwesomeIcon id="settings-link" icon="cog" fixed-width />
        </nuxt-link>
        <nuxt-link :to="localePath('/calculator')" :title="$t('navigation.calculator')">
          <FontAwesomeIcon id="calculator-link" icon="calculator" fixed-width />
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link :to="localePath('/')">
          <FontAwesomeIcon id="settings-link" icon="times" fixed-width :title="$t('navigation.close')" />
        </nuxt-link>
      </template>
      <nuxt />

      <div id="smallprint">
        <nuxt-link v-if="$i18n.locale !== 'en'" :to="switchLocalePath('en')">EN</nuxt-link>
        <nuxt-link v-if="$i18n.locale !== 'de'" :to="switchLocalePath('de')">DE</nuxt-link>
        <a href="https://plausible.io/3-in-2.com">{{ $t('links.stats') }}</a>
        <a href="https://till-sanders.de/privacy">{{ $t('links.privacy') }}</a>
        <a href="https://till-sanders.de/about">{{ $t('links.about') }}</a>
        <a href="https://twitter.com/tillsanders" :title="$t('links.twitter')">
          <FontAwesomeIcon :icon="['fab', 'twitter']" fixed-width />
        </a>
        <a href="https://github.com/tillsanders/3-in-2-clock" :title="$t('links.github')">
          <FontAwesomeIcon id="github-link" icon="code-branch" fixed-width />
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      current: ''
    }
  },
  head () {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  mounted () {
    this.$router.afterEach((to) => {
      this.current = to.name
    })
    this.current = this.$router.currentRoute.name
  }
}
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
    twitter: "Visit the author on Twitter"
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
    background-color: #111;
    color: #EEE;
    font-family: monospace;
    font-weight: 100;
    text-transform: uppercase;
    user-select: none;
  }

  input, select {
    font-family: sans-serif;
    display: block;
    width: calc(100% - 2rem);
    outline: none;
    padding: 1rem;
    margin: 1rem 0;
    border: none;
    background: #333;
    color: #FFF;
    font-weight: 100;
    font-size: 4vmin;
    border-radius: 0;
    appearance: none;
    min-height: 1.4em
  }

  select {
    width: 100%;
  }

  html, body, #__nuxt, #__layout, main {
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
