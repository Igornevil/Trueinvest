<template>
    <section class="fourElem">
        <div 
            class="elem elem1"
            :class="{
                active: isActive,
            }">
            <div class="content">
                <h2 :class="{ 'h2-active': isActive }">Точки входа по российским фьючерсам</h2>
                <p :class="{ 'p-active': isActive }">Мы торгуем 8 российскими фьючерсами и 2 росссийскими бумагами. MX, RI, SI, SBRF, GAZR, SPYF, BRENT, VTBR, MGNT, YNDX.</p>
                <a href="#">Узнать подробней →</a>
            </div>
        </div>
        <div 
            class="elem elem2"
            :class="{
                active: isActive,
            }">
            <div class="content">
                <h2 :class="{ 'h2-active': isActive }">Точки входа по 6-ти криптомонетам</h2>
                <p :class="{ 'p-active': isActive }">Мы торгуем шестью самыми крупными по капитализации монетами и готовы Вам предложить самые выгодные сделки в соотношении Profit/Loss</p>
                <a href="#">Узнать подробней →</a>
            </div>
        </div>
        <div 
            class="elem elem3"
            :class="{
                active: isActive,
            }">
            <div class="content">
                <h2 class="color-white" :class="{ 'h2-active': isActive }">Ежедневная торговля насдаком</h2>
                <p class="color-white" :class="{ 'p-active': isActive }">Моя самая любимая торговля - использование long ETF на тройной насдак и обратное движение на него. Используем TQQQ & SQQQ</p>
                <a class="color-white" href="#">Моя статистика →</a>
            </div>
        </div>
        <div 
            class="elem elem4 "
            :class="{
                active: isActive,
            }">
            <div class="content ">
                <h2 class="color-white" :class="{ 'h2-active': isActive }">Торговый план</h2>
                <p class="color-white" :class="{ 'p-active': isActive }">Составим торговый план по выбранному активу на ТФ - месячный, недельный, дневной.</p>
                <a class="color-white" href="#">Сделать заказ →</a>
            </div>
        </div>
    </section>

</template>
<script>

export default {
    data() {
        return {
            isActive: false,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            if (this.window.width < 775) {
                this.isActive = false
            } else {
                this.isActive = true
            }
        }
    },
    watch: {

    },
    computed: {

    }
}
</script>

<style scoped>
@import url(../css/colus_regular.css);
.elem {
    border-radius: 20px;
    width: 320px;
    height: 190px;
    margin: 30px;

}
.fourElem {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1400px;
    margin: 0 auto;
}
.elem1 {
    background: url('../img/Frame_1560.png')no-repeat;
    background-size: cover;
}
.elem2 {
    background: url('../img/qqqw.webp')no-repeat;
    background-size: cover;
}
.elem3 {
    background: url('../img/qq2.webp')no-repeat;
    background-size: cover;
}
.elem4 {
    background: url('../img/Frame_1559.webp')no-repeat;
    background-size: cover;
}
.content {
    /* border: 1px solid green; */
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: space-evenly;
    width: 55%;
    height: 100%;
    margin: 5px 5px 0px 20px;
    text-align: start;
}
.active {
    width: 560px;
    height: 273px;
}
img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    position: static;
}
h2 {
    color: #242424;
    font-size: 15px;
    /* font-size: 1.5rem; */
    /* font-family: 'TildaSans',Arial,sans-serif; */
    font-weight: 700;
    margin: 0%;
}
.h2-active {
    font-size: 25px;
}
p {
    color: #242424;
    font-size: 10px;
    font-family: 'TildaSans',Arial,sans-serif;
    font-weight: 500;
    margin: 0;
}
.p-active {
    font-size: 13px;
}
a {
    text-decoration: none;
    color: gray;
    font-size: 15px;
    /* font-family: 'TildaSans',Arial,sans-serif; */
}
.color-white {
    color: white
}
</style>