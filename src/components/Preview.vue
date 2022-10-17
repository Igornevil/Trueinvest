<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Отправить сообщение</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">Ник в телеграмм:</label>
                        <input v-model="name" placeholder="@nickname" type="text" class="form-control" id="recipient-name">
                    </div>
                    <div class="mb-3">
                        <label for="message-text" class="col-form-label">Сообщение:</label>
                        <textarea v-model="message" class="form-control" id="message-text"></textarea>
                    </div>
                        
                        <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Отправить заявку</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="preview">
        <div class="logotype">
            <!-- <div class="logotype__img">
                <img src="../img/47tv.gif">
            </div> -->
            <div class="trading">
                <img class="t" src="../img/trading/T.png">
                <img class="r" src="../img/trading/R.png">
                <img class="a" src="../img/trading/A.png">
                <img class="d" src="../img/trading/D.png">
                <img class="i" src="../img/trading/I.png">
                <img class="n" src="../img/trading/N.png">
                <img class="g" src="../img/trading/G.png">
            </div>
            <p class="logotype__p p1">True Investor</p>
            <p class="logotype__p p2">Инвестируй с умом!</p>
        </div>

        <div class="preview__block">
            <div class="preview__img">
                <img src="../img/self.jpg">
            </div>
            <div class="preview__info">
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
    data() {
        return {
            name: '',
            message: ''
        }
    },
    methods: {
        

    },
    mounted() {

    },
    computed: {

    },
    created() {
    }
}
</script>

<style lang="scss" scoped>

.trading{
    // border: 1px solid red;
    width: 495px;
    // height: 70px;
    height: auto;
    position: relative;

    img {
        height: auto;
        width: 70px;
    }
    .t {
        animation-name: trading__animation;
        -moz-animation-name: trading__animation;
        -webkit-animation-name: trading__animation;
        animation-fill-mode: forwards;
        -moz-animation-fill-mode: forwards;
        -webkit-animation-fill-mode: forwards;
        animation-duration: 2.3s;
        -moz-animation-duration: 2.3s;
        -webkit-animation-duration: 2.3s;
        }
    .r {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 3.6s;
        -moz-animation-duration: 3.6s;
        -webkit-animation-duration: 3.6s;
    }
    .a {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 2.2s;
        -moz-animation-duration: 2.2s;
        -webkit-animation-duration: 2.2s;
        }
    .d {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 2.5s;
        -moz-animation-duration: 2.5s;
        -webkit-animation-duration: 2.5s;
        }
    .i {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 3.8s;
        -moz-animation-duration: 3.8s;
        -webkit-animation-duration: 3.8s;
    }
    .n {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 3.3s;
        -moz-animation-duration: 3.3s;
        -webkit-animation-duration: 3.3s;
    }
    .g {
        animation-name: trading__animation;
        animation-fill-mode: forwards;
        animation-duration: 2.8s;
        -moz-animation-duration: 2.8s;
        -webkit-animation-duration: 2.8s;
        
    }
}
@keyframes trading__animation {
    0% {
        opacity: 0;
        transform:translateY(-300px)
    }
    5% {
        opacity: 0;
        transform:translateY(-300px)
    }
    15% {
        padding-bottom: 5px;
        transform:translateY(0)
    }
    30% {
        transform:translateY(-150px)
    }
    40% {
        padding-bottom: 6px;
        transform:translateY(0)
    }
    50% {
        transform:translateY(-50%)
    }
    
    70% {
        transform:translateY(0%);
        padding-bottom: 7px;
    }
    80% {
        transform:translateY(-20%);
    }
    90% {
        transform:translateY(0%);
        padding-bottom: 8px;
    }
    95% {
        transform:translateY(-10%);
    }
    97% {
        transform:translateY(0%);
        padding-bottom: 9px;
    }
    99% {
        transform:translateY(-5%);
    }
    100% {
        transform:translateY(0);
        padding-bottom: 9px;
        opacity: 1;
    }

}


.preview {
    /* border: 2px solid yellow; */
    width: auto;
    height: auto;
    display: block;
    justify-content: center;
    align-content: center;
    align-items: center;
    padding: 0;
}


.logotype {
    display: flex;
    /* border: 1px solid red; */
    max-width: 1400px;
    width: 96vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0 auto;
    
    p {
    position: relative;
    color: #FFFFFF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 37px;
    font-weight: 600;
    right: 0;

        &.p1 {
            animation-name: logo-bottom;
            animation-fill-mode: forwards;
            animation-duration: 1.5s;
        }
        &.p2 {
            animation-name: logo-top;
            animation-fill-mode: forwards;
            animation-duration: 1.5s;
        }
    }
}
.logotype__img {
    display: block;
    max-width: 200px;
    /* border: 1px solid green; */
    img {
        width: 100%;
    }
}


@keyframes logo-top {
    0% {
        left: 40%;
        opacity: 0;
    }
    100% {
        left: 0;
        opacity: 100%;
    }
}
@keyframes logo-bottom {
    0% {
        right: 40%;
        opacity: 0;
    }
    100% {
        right: 0;
        opacity: 100%;
    }
}


.preview__block {
    /*border: 1px solid red;*/
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    color: white;
    padding: 100px 0;
}
.preview__img {
    min-width: 150px;
    max-width: 250px;
    border-radius: 160px 160px 160px 160px;
    -webkit-border-radius: 160px 160px 160px 160px;
    -moz-border-radius: 160px 160px 160px 160px;
    /*border: 1px solid red;*/
    margin: 10px;
    
    img {
        width: 100%;
        border-radius: 160px 160px 160px 160px;
        -webkit-border-radius: 160px 160px 160px 160px;
        -moz-border-radius: 160px 160px 160px 160px;
    }
}

.preview__info {
    margin: 10px;
    min-width: 200px;
    max-width: 600px;
}
@media (max-width:767px) {
    .trading {
        width: 90vw;
        img {
            height: auto;
            width: 40px;
        }
    }
    .logotype {
        p {
            font-size: 28px;
        }
    }
}

</style>

