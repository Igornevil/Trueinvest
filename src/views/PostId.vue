<template>
    <Header />
    <Add />
    <Footer/>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Add from '@/components/OnePost.vue'
import end from '@/js/myJs.js'

export default {
    name: 'PostId',
    components: {
        Header,
        Footer,
        Add,
        end
    },
}

</script>

<style scoped>

</style>