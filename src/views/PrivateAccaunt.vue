<template>

    <Header/>
    <User/>
    <Footer/>




</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header-private.vue'
  import Footer from '@/components/Footer.vue'
  import User from '@/components/User.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Footer,
      User
    }
  }



</script>

<style scoped>
    .bg {
        background-image: url("../img/w-street.png");
        background-attachment: fixed;

        -moz-background-size: cover; /* Firefox 3.6+ */
        -webkit-background-size: cover; /* Safari 3.1+ и Chrome 4.0+ */
        -o-background-size: cover; /* Opera 9.6+ */
        background-size: cover; /* Современные браузеры */

    }

</style>