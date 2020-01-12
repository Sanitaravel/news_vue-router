<template>
    <v-app id="nav">
      <v-app-bar
        color="deep-purple accent-4"
        dark
      >
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Новости</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
    <v-content>
      <v-container
      class="text-center"
      >
        <router-link to='/'>Домашняя страница</router-link>
        <h1>Добро пожаловать в новостной дайджест. Выберите одну из стран:</h1>
        <router-link to='/germany'>Германия </router-link>|
        <router-link to='/france'>Франция </router-link>|
        <router-link to='/italy'>Италия </router-link>|
        <router-link to='/japan'>Япония </router-link>|
        <router-link to='/russia'>Россия </router-link>|
        <router-link to='/USA'>США</router-link>
      </v-container>
      <router-view/>
    </v-content>
    <v-footer
      color="deep-purple accent-4"
      app
    >
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>