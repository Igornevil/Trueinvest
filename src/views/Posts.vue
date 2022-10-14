<template>
    <Header/>
    <post/>
    <Footer/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import post from '@/components/post.vue'
import end from '@/js/myJs.js'

export default {
name: 'Home',
components: {
  Header,
  Footer,
  post,
  end
},
    props: {

    }
}

</script>

<style scoped>


</style>