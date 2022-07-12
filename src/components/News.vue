<template>


    <div class="News">
        <div class="logo" id="myLogo">
            <img class="logoimg" src="../img/logo-new.png">
            <p class="logop">True Investor <br> Инвестируй с умом!</p>
        </div>
        <div class="news-preview">
            <div class="news-img">
                <img src="../img/self.jpg">
            </div>
            <div class="news-info">
                <h1>Привет! Меня зовут Щенников Сергей. Я - трейдер.</h1>
                <p>Моя цель на этом сайте - доход. Мой доход - Ваш доход.<br> Ваш доход - мой доход. Я инвестирую свои средства на американском фондовом рынке. Вы ко мне присоединяетесь, и мы создаём социальный трейдинг.
                    Ко мне обращаются, когда:<br>
                    1. Необходимо инвестировать собственные средства.<br>
                    2. Есть желание получить новые знания.<br>
                    3. Требуется разобрать инвестиционную идею для оценки будущих перспектив</p>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    

    methods: {
        

    },
    mounted() {
        document.querySelector('.logo').style.cssText = `
          width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
          height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)}px`

    }

}
setTimeout(() => {
    document.querySelector('.logoimg').style.cssText = `
                    opacity: 1;
                    visibility: visible;
                `
}, 1000);
setTimeout(() => {
    document.querySelector('.logop').style.cssText = `
            opacity: 1;
            visibility: visible;
        `
}, 1500);
window.addEventListener('resize', function(event){
  document.querySelector('.logo').style.cssText = `
          width: ${document.documentElement.clientWidth - (Math.floor(document.documentElement.clientWidth / 100)*10)}px;
          height: ${document.documentElement.clientHeight - (Math.floor(document.documentElement.clientHeight / 100)/10)}px;
          `
});

</script>


<style scoped>

    .News {
        width: auto;
        height: auto;
        display: block;
        justify-content: center;
        /*display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        background-color: #484849;
        opacity: 0.54; */
        padding: 0;
        margin: 10px;
        border-bottom: 4px solid gray;
    }
    .logo > img {
        width: 200px;
        padding-bottom: 5px;
    }
    .logo > p {
        color: #FFFFFF;
        font-size: 2rem;
        font-weight: 900;
        text-transform: uppercase;
        letter-spacing: -1px;
        text-shadow: 6px 4px 7px rgba(0,0,0,0.6);
        /*line-height: 89px;
        letter-spacing: 4.7px;
        text-shadow: 0px 0px 20px rgb(12 12 12 / 0%);*/
    }
    .logo {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        flex-wrap: wrap;
        margin-right: auto;
        margin-left: auto;
        /*border: 1px solid white;*/
        width: auto;
        height: 1000px;
        color: white;
        min-height: 400px;

    }
    .logoimg {
        opacity: 0;
        visibility: hidden;
        transition: .80s opacity, .80s visibility;
    }
    .logop {
        opacity: 0;
        visibility: hidden;
        transition: .80s opacity, .80s visibility;
    }
    .news-preview {
        /*border: 1px solid red;*/
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        color: white;
        padding: 100px 0;
    }
    .news-img {
        min-width: 150px;
        max-width: 250px;
        border-radius: 160px 160px 160px 160px;
        -webkit-border-radius: 160px 160px 160px 160px;
        -moz-border-radius: 160px 160px 160px 160px;
        /*border: 1px solid red;*/
        margin: 10px;
    }
    .news-img > img {
        width: 100%;
        border-radius: 160px 160px 160px 160px;
        -webkit-border-radius: 160px 160px 160px 160px;
        -moz-border-radius: 160px 160px 160px 160px;
    }
    .news-info {
        /*border: 1px solid red;*/
        margin: 10px;
        min-width: 200px;
        max-width: 600px;


    }
    .modal-window {
        position: relative;
        width: 50%;
        height: 300px;
        border: 1px solid red;
        margin: auto;

    }

</style>

