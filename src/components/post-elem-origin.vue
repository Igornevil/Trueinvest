<template>     
    <div class="post">
            <img :src=getUrl(post.picture)>
            <h4><a v-bind:href="'posts/' + post._id">{{post.title.substring(0,15)}}...</a></h4>
            <p>{{post.content.substring(0,93)}}<a href="#">{{post.content.substring(93,100)}}</a></p>
            <div class="date-post">
                <p>{{post.author}}</p>
                <p>{{post.date}}</p>                       
            </div>
    </div>

</template>
<script>

    export default {

        data() {
            return {
            }
        },
        props:{
            post: {
                type: [],
                default: null
            } 
        },
        computed: {
        },
        methods: {
            getUrl(img) {
                const response = 'http://176.104.33.48:3200/' + img;
                return response
            },
        },
        mounted() {
            
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