<template>     
    <div class="post__element">
        <a v-bind:href="'posts/' + post._id">
            <div class="post__img-box">
                <img :src=getUrl(post.picture)>
            </div>
            <div class="post__content-box">
                <p>{{post.date}}</p>
                <h4><a v-bind:href="'posts/' + post._id">{{post.title.substring(0,72)}}...</a></h4>
                <p>{{post.author}}</p>
            </div>
        </a>

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
                type: Object,
                default: null
            } 
        },
        computed: {
        },
        methods: {
            getUrl(img) {
                const response = 'http://' + window.location.hostname + ':3200/' + img;
                return response
            },
        },
        mounted() {
            
        }
    }
</script>

<style lang="scss" scoped>
    .post__element {
        display: flex;
        flex-direction: column;
        width: 350px;
        height: auto;
        overflow: hidden;
        border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 4px 4px 4px 4px;
        -moz-border-radius: 4px 4px 4px 4px;

        margin-bottom: 30px;
        
        
        border: 1px solid #D1D5D6;

        &:hover {
            animation-name: animate-box;
            -moz-animation-name: animate-box;
            -webkit-animation-name: animate-box;
            animation-fill-mode: forwards;
            -moz-animation-fill-mode: forwards;
            -webkit-animation-fill-mode: forwards;
            animation-duration: 0.3s;
            -moz-animation-duration: 0.3s;
            -webkit-animation-duration: 0.3s;

            img {
                animation-name: animate-img;
                -moz-animation-name: animate-img;
                -webkit-animation-name: animate-img;
                animation-fill-mode: forwards;
                -moz-animation-fill-mode: forwards;
                -webkit-animation-fill-mode: forwards;
                animation-duration: 0.3s;
                -moz-animation-duration: 0.3s;
                -webkit-animation-duration: 0.3s;
                
            }
        }
        img {
            filter: invert(7%);
            -webkit-filter: invert(7%);
            -moz-filter: invert(7%);
            height: 220px;
            width: 100%;
            object-fit: cover;

        }
        .post__content-box {
            height: 180px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            z-index: 2;
            position: relative;
            background-color: #F9FBFB;
            padding: 22px 22px 10px 22px;
            

            &:hover {
                background-color: white;
            }

            h4 {
                margin: 0;

                a {
                    color: #15181a;
                    font-size: 14px;
                    line-height: 24px;
                    font-weight: 600;
                    
                }
            }
            p {
                text-decoration: none;
                color: gray;
                font-size: 14px;
                line-height: 24px;
                margin: 0;
            }
        }
        .post__img-box {
            
            margin-bottom: -10px;
           
        }
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

    .block{
        width: auto;
        height: auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    a {
        text-decoration: none;
    }
    @media (min-width:767px) {
        .post__element {
            margin-right: 30px;
        }
    }
    @keyframes animate-box {
        0% {

        }
        100% {
            box-shadow:0 23px 20px -15px rgba(12,43,67,0.2);
            overflow: hidden;
        }
    }
    @keyframes animate-img {
        0% {

        }
        100% {
            filter: invert(0%);
            -webkit-filter: invert(0%);
            -moz-filter: invert(0%);
            transform: translate(0px,-10px);
            -webkit-transform: translate(0px,-10px);
            -moz-transform: translate(0px,-10px);
        }
    }
</style>