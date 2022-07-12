<template>
        <div class="bg">
                <Header/>
                <News/>
        </div>
        <!-- <Strategi/> -->
        <Study/>
        <News1/>
        <Feedback/>
        <Footer/>




</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import News from '@/components/News.vue'
  import News1 from '@/components/News1.vue'
  import Strategi from '@/components/Strategi.vue'
  import Feedback from '@/components/Feedback.vue'
  import Footer from '@/components/Footer.vue'
  import Study from '@/components/Study.vue'
  import end from '@/js/myJs.js'
//   import 'bootstrap/dist/css/bootstrap.min.css'
//   import 'bootstrap/dist/js/bootstrap.bundle.min.js'


// Then import Bootstrap
 


  export default {
    name: 'Home',
    components: {
      Header,
      News,
      Strategi,
      Footer,
      Feedback,
      News1,
      Study,
      end
    },
        props: {

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