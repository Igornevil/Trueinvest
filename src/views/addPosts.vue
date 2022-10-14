<template>
    <Header/>
    <Add/>
    <Footer/>




</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Add from '@/components/PostsAdd.vue'
import end from '@/js/myJs.js'

export default {
name: 'Home',
components: {
  Header,
  Footer,
  Add,
  end
},
    props: {

    }
}



</script>

<style scoped>


</style>