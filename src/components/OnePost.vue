<template>
    <section class="post__one">
        <line-back  />
        <div v-html="POST.content" class="container1">

        </div>
    </section>

</template>
<script>
import lineBack from '@/components/lineBack.vue'
import { mapActions,mapGetters } from 'vuex';


    export default {
        components: {
            lineBack
    },
        data() {
            return {
                post: [],
                id: null,
                title: null,
                author: null,
                content: null,
                date: null,
                img: null

            }
        },
        props:{
            _id: {
                type: String,
                default: ''
            } 
        },
        beforeCreate() {
                
        },
        created() {
            
        },
        mounted() {
            this.GET_POSTS_ID(this._id)
        },
        computed: {
            ...mapGetters([
                'POST'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_POSTS_ID'
            ]),

            getUrl(img) {
                const response = 'http://176.104.33.48:3200/' + img;
                return response
            },
        },
    }
</script>

<style lang="scss">
.container1 {
    max-width: 100%;
    // margin: 30px 0;
}
.post__one {
    // border: 1px solid red;
    width: auto;
    height: auto;
    max-width: 900px;
    min-height: 400px;
    margin: 60px auto;
    font-size: 18px;
    font-weight: 400;
    /* padding: 1rem; */
    // padding-top: 100px;
    text-align: left;
    line-height: 1.58;
    // border-left: 3px solid gray;
    // border-right: 3px solid gray;
    
    blockquote {
        border-left: 3px solid gray;
        padding-left: 7px;
    }
}
</style>