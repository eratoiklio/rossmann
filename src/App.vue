<template>
  <div id="nav">
    <router-link to="/">Article</router-link> |
    <router-link to="/containers">Containers</router-link>
  </div>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background: LightBlue;
  color: whitesmoke;
  a {
    font-weight: bold;
    color: whitesmoke;
    text-decoration: none;

    &.router-link-exact-active {
      color: steelblue;
      text-decoration: underline;
    }
  }
}
</style>
