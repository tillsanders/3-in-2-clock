<template>
  <main>
    <div class="wrapper">
      <template v-if="current === 'index'">
        <nuxt-link to="/settings">
          <font-awesome-icon id="settings-link" icon="cog" fixed-width />
        </nuxt-link>
        <nuxt-link to="/calculator">
          <font-awesome-icon id="calculator-link" icon="calculator" fixed-width />
        </nuxt-link>
      </template>
      <template v-else>
        <nuxt-link to="/">
          <font-awesome-icon id="settings-link" icon="times" fixed-width />
        </nuxt-link>
      </template>
      <nuxt />
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
  mounted () {
    this.$router.afterEach((to) => {
      this.current = to.name
    })
    this.current = this.$router.currentRoute.name
  }
}
</script>

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
  }

  select {
    width: 100%;
  }

  main {
    height: 100vh;
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
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    color: #555;
  }

  #calculator-link {
    position: absolute;
    top: 0;
    right: 3rem;
    padding: 1rem;
    color: #555;
  }
</style>
