<template>
    <Header />
    <OnePost 
        v-bind:_id="id"
    />
    <Footer/>

</template>

<script>
// @ is an alias to /src
// v-bind:_id="this.$route.params.id"
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import OnePost from '@/components/OnePost.vue'

export default {
    name: 'PostId',
    components: {
        Header,
        Footer,
        OnePost
    },
    props:{
        id: {
            type: String,
            default: ''
        } 
    },
}

</script>

<style >
img {
    max-width: 100%;
}

</style>