<template>
    <div class="personInfo">
        <div class="left" v-for="use in users">
            <img title="Photo" :src=use.photo>
            <h2>{{use.firstName}} {{use.secondName}}</h2>
            <h3>+{{use.phone}}</h3>
            <h3>@{{use.telegram}}</h3>
            <button>Написать отзыв</button>

        </div>
        <div class="right">

        </div>
    </div>
    <h1>This is PersonDat.vue page</h1>




</template>

<script>
    export default {
    data() {
        return {
            users: [
                {id: "1", firstName: "Сергей", secondName: "Щенников", phone: "79031234567", telegram: "truinvest", photo: require('@/img/self.jpg')}
            ],
        }
    }
}
</script>

<style scoped>
    .personInfo {
        border: 2px solid green;
        display: flex;
        width: 100%;
        height: auto;
        justify-content: space-around;
        align-items: center;
    }
    .left {
        border: 1px solid red;
        text-align: left;
    }
    .left > img {
        width: 150px;
    }
    .right {
        border: 1px solid red;
    }
    .right > img {
        width: 100px;
    }
</style>