<template>
    <v-card
        class="mx-auto"
        max-width="400"
        color="grey darken-2"
    >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="url_kek"
        >
            <v-card-title>{{title}}</v-card-title>
        </v-img>

        <v-card-subtitle class="white--text">{{author}}</v-card-subtitle>

        <v-card-text class="white--text">
            <div>{{descr}}</div>
        </v-card-text>

        <v-card-actions>
            <v-btn
            color="orange"
            text
            >
            Share
            </v-btn>

            <v-btn @click="explore()"
            color="orange"
            text
            >
            Explore
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ['author', 'title', 'descr', 'url_kek', 'url'],
    methods:{
        explore(){
            window.open(this.url)
        }
    }
}
</script>