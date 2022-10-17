<template>
    <div class="Posts">
            <h1><a href="#">Новости</a></h1>
            <div class="block">        
                <postElem v-for="(post, index) in POSTS.slice(POSTS.length - 4, POSTS.length).reverse()"
                    v-bind:key="index"
                    v-bind:post="post"
                />
            </div>
        </div>
</template>
<script>

import { mapActions,mapGetters } from 'vuex';
import postElem from '@/components/post-elem.vue';

    export default {

        data() {
            return {
                 posts: null
            }
        },
        components: {
            postElem
        },
        computed: {
            ...mapGetters([
                'POSTS'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_POSTS_ALL'
            ]),

            getUrl(img) {
                const response = 'http://176.104.33.48:3200/' + img;
                return response
            },
        },
        mounted() {
            this.GET_POSTS_ALL()
            
        }
    }
</script>



<style scoped>

    .Posts {
        width: auto;
        max-width: 1400px;
        height: auto;
        display: block;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin: auto;
        padding: 25px 0px;
        border-bottom: 4px solid gray;
        /* border: 4px solid green; */
    }
    .Posts > h1 {
        margin-bottom: 3rem;
        color: black;
    }
    .date-post {
        /* position: absolute; */
        display: flex;
        justify-content: space-between;
        bottom: 1rem;
        right: 1rem;
        color: gray;
        text-align: center;
        border-top: 1px solid gray;
        margin: 0 5px;
    }
    .post {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        width: 280px;
        height: 360px;
        margin: 5px 10px;
        padding: 0;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
    }
    img {
        width: 100%;
    }
    .block{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    a {
        text-decoration: none;
        color: gray;
    }

</style>