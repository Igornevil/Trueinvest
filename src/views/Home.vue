<template>
        <div class="bg">
                <Header/>
                <News/>
        </div>
        <Study/>
        <four-elem></four-elem>
        <Info/>
        <Posts/>
        <Feedback/>
        <Footer/>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import News from '@/components/News.vue'
  import Info from '@/components/Info.vue'
  import Strategi from '@/components/Strategi.vue'
  import Feedback from '@/components/Feedback.vue'
  import Footer from '@/components/Footer.vue'
  import Study from '@/components/Study.vue'
  import Posts from '@/components/Posts.vue'
  import Posts2 from '@/components/Posts-2.vue'
  import FourElem from '@/components/fourElem.vue'
  import end from '@/js/myJs.js'

  export default {
    name: 'Home',
    components: {
      Header,
      News,
      Strategi,
      Footer,
      Feedback,
      Info,
      Posts,
      Posts2,
      Study,
      FourElem,
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