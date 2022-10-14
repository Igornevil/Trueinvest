<template>
        <div class="Posts">
            <h1><a href="#">Новости</a></h1>
            <div class="block">        
                <div    class="post"
                        v-for="(post, index) in POSTS"
                        v-bind:key="index">
                            <img :src=getUrl(post.picture)>
                            <h4><a v-bind:href="'posts/' + post._id">{{post.title.substring(0,15)}}...</a></h4>
                            <p>{{post.content.substring(0,93)}}<a href="#">{{post.content.substring(93,100)}}</a></p>
                            <div class="date-post">
                        <p>{{post.author}}</p>
                        <p>{{post.date}}</p>
                    </div>
                </div>
            </div>
        </div>



</template>
<script>
    import { mapActions,mapGetters } from 'vuex';

    export default {

        data() {
            return {
                 posts: null
            }
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
        margin: 0 auto;
        /* padding: 25px 0px; */
        padding-top: 78px;
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
    }
    .post {
        display: flex;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        width: 280px;
        min-height: 360px;
        margin: 5px 10px;
        padding: 0 0px;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
    }
    img {
        width: 100%;
        padding: 0;
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
    @media (max-width:767px) {
    .Posts {
      padding-top: 70px;
    }
}
</style>