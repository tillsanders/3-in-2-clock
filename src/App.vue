<template>
  <main>
    <div class="wrapper">
      <template v-if="$router.currentRoute.name === 'home'">
        <router-link :to="{ name: 'settings' }">
          <font-awesome-icon icon="cog" id="settings-link" fixed-width></font-awesome-icon>
        </router-link>
      </template>
      <template v-else>
        <router-link :to="{ name: 'home' }">
          <font-awesome-icon icon="times" id="settings-link" fixed-width></font-awesome-icon>
        </router-link>
      </template>
      <router-view/>
    </div>
  </main>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
  body {
    margin: 0;
    background-color: #222;
    color: #EEE;
    font-family: monospace;
    font-weight: 100;
    text-transform: uppercase;
    user-select: none;
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
</style>
