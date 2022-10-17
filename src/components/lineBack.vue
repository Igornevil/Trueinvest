<template>
    <div class="line_to_back">
        <div class="line_to_back__left">
            <a
            v-if="this.url != this.path" 
            :href="this.path">Назад</a>
        </div>
        <div class="line_to_back__right">
            <a :href="this.url">На главную</a>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                url: '',
                path: '',
                href: ''

            }
        },

        beforeCreate() {
                
        },
        created() {
            
        },
        mounted() {
            this.url = window.location.origin
            this.path = location.href.substring(0, location.href.lastIndexOf("/"))
        },
        methods: {
        }
    }
</script>

<style lang="scss">
.line_to_back {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 30px 0;
    padding-top: 60px;

    a {
        color: gray;
    }
}

</style>