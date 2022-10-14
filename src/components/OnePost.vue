<template>
    <section class="body">
        <div class="top">
            <h1>{{title}}</h1>
        </div>
        <div class="body_img">
            <img :src="img"> 
        </div>
        <div class="content">
            <p>{{content}}</p>
        </div>
        <div class="bottom">
            <h4>{{date}}</h4>
            <h4>{{author}}</h4>
        </div>
    </section>

</template>
<script>
    export default {
        data() {
            return {
                post: null,
                id: null,
                title: null,
                author: null,
                content: null,
                date: null,
                img: null

            }
        },
        beforeCreate() {
                
        },
        created() {
            
        },
        mounted() {
            axios
                .get('http://176.104.33.48:3200/api/posts/' + this.$route.params.id)
                .then(response => {(
                    this.title = response.data.title,
                    this.post = response.data._id,
                    this.author = response.data.author,
                    this.content = response.data.content,
                    this.date = response.data.date,
                    this.img = 'http://176.104.33.48:3200/'+ response.data.picture
                    )
                });
        },
        methods: {
            
        },
    }
</script>

<style scoped>
.body {
    /* border: 1px solid red; */
    width: auto;
    max-width: 900px;
    height: auto;
    min-height: 400px;
    margin: 20px auto;
    font-size: 18px;
    font-weight: 400;
    padding: 1rem;
    text-align: left;
    line-height: 1.58;
}
.bottom {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;

}
.content {
    border-left: 4px solid gray;
    padding-left: 4px;
}
.top {
    
    font-weight: 600;
}
img {
    width: 80%;
    padding: 2.5rem 0;
}
p, h1, h2, h3, h4, h5, a {
    font-family: CustomSerif, Georgia, Cambria, 'Times New Roman', serif;
    
    
}
</style>