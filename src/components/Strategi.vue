<template>
    <a name="strategi"></a>
    <div class="str"
    v-for="strateg in strategies"
    v-bind:key="strateg.id">
<!--        Див ниже - v-on:click=reView(strateg)-->
        <div
            class="desc"
            v-on:click=reView(strateg)
        >
            <h2>{{strateg.h2Header}}</h2>
            <p>{{strateg.description}}</p>
        </div>
        <div
                class="test-str"
                v-bind:class="{

                hide: !strateg.viewStr
                }"
                :id=strateg.id
        >

        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                strategies: [
                    {id: "chart1_div", h2Header: "Стретегия номер 1", description: "Бесплатный сервис Google позволяет мгновенно переводить слова, фразы и веб-страницы с английского более чем на 100 языков и обратно.", viewStr: true,},
                    {id: "chart2_div", h2Header: "Стретегия номер 2", description: "При создании глоссария вручную переводчик наверняка пропустит пару-тройку терминов. When a translator creates a glossary manually, he will likely miss some of ...", viewStr: true,},
                    {id: "chart3_div", h2Header: "Стретегия номер 3", description: "Мгновенный перевод на любые языки с помощью Translatium — самого функционального приложения-переводчика для Windows. Translatium переводит слова, фразы, ...", viewStr: true,},
                ],


            }
        },
        methods: {
            reView(str){
                if (str.viewStr){
                    str.viewStr = false
                } else {
                    str.viewStr = true;
                }
            },
        },

        computed: {

        },

        mounted() {
            let temp = document.querySelectorAll('.test-str');
            for (let i = 0; i < temp.length; i++) {
                temp[i].style.cssText = `
            width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
            height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)*10)}px`
            }
        },

    }

</script>

<style scoped>
    .str {
        /*border: 1px solid green;*/
        margin: 10px;
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
    }
    .desc {
        border: 1px solid green;
        margin: auto;
        width: 100%;
        display: block;

    }
    .test-str{
        margin: auto;
        border: 1px solid gray;
        width: 90%;
    }
    .strategies {
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background-color: white;
        margin-top: -20px;
        margin: 15px;
        padding: 25px 15px;
        border-bottom: 4px solid gray;
    }
    .strategi > img {
        max-width: 400px;
        min-width: 300px;
        width: 100%;
    }
    .hide {
        display: none;
    }

    .active {
        display: block;
    }
</style>