<template>
  <v-app id="nav">
    <v-content>
      <v-container
        class="text-center"
      >
      <v-row
        :align="alignment"
        :justify="justify"
        class="grey lighten-5"
        style="height: 300px;">
        <Card v-for="i in text" :key="i.url" :author="i.author" :title="i.title" :descr="i.description" :url_kek="i.urlToImage" :url="i.url">
        </Card>
      </v-row>
      </v-container>
    </v-content>

    <v-footer 
    color="deep-purple accent-4"
     app>
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
import Card from '../components/Card.vue'
import axios from 'axios'
  export default {
    props: {
      source: String,
    },
    components:{
      Card
    },
    data: () => ({
      drawer: null,
      text: [],
      selected_language: 'ae'
    }),
    methods:{
      getInfo(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=${this.selected_language}&apiKey=d7f41a32c26b4bbfb596d58b1a54c766`).then((response) => {
          this.text = response.data.articles;
          console.log('responce', response)
        })
      },
      update(){
        console.log("kekeke")
        this.getInfo()
      }
    },
    mounted(){
      this.getInfo()
    }
  }
</script>