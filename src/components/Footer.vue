<template>
    <a name="contact"></a>
    <div class="footer">
        <div class="logo" id="myLogo">
            <img class="logoimg" src="../img/logo-new.png">
            <p class="logop">True Investor <br> Инвестируй с умом!</p>
        </div>
        <div class="about">
            <div class="info">
                <p>Почта:</p>
                <p><a href="mailto:shchennikovsergey@gmail.com"> ShchennikovSergey@gmail.com</a></p>
                <p>Телеграмм:</p>
                <p><a href="https://t.me/Hamsters_Stockk" target="_blank">@Hamsters_Stockk</a></p>
            </div>
            <div class="media">
                <a href="https://facebook.com" target="_blank" class="rollover fb"></a>
                <a href="https://t.me/Hamsters_Stockk" target="_blank" class="rollover tg"></a>
                <a href="https://instagram.com" target="_blank" class="rollover inst"></a>
            </div>
        </div>

    </div>
</template>



<style scoped>

    .footer {
        min-height: 500px;
        background-color: gray;
        /*width: auto;
        height: auto;*/
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        background-image: url("../img/footer.jpg");
        background-attachment: fixed;
        -moz-background-size: cover; /* Firefox 3.6+ */
        -webkit-background-size: cover; /* Safari 3.1+ и Chrome 4.0+ */
        -o-background-size: cover; /* Opera 9.6+ */
        background-size: cover; /* Современные браузеры */
    }
    p {
        color: white;
        font-family: sans-serif;
        font-size: 18px;
    }
    .logo {
        max-width: 150px;
        position: center;
        font-size: 12px;
    }
    .about {
        position: center;
        min-width: 350px;
        width: 500px;
        margin-bottom: 20px;
    }
    .logo > img {
        width: 70%;
        margin: 20px 0 0 0;
    }
    a > img {
        margin: 6px;
        width: 30px;
    }
    a > img:hover {
        margin: 1px;
        width: 35px;
    }
    .inst{
        background: url(../img/inst1.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    .inst:hover{
        background: url(../img/inst2.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    .fb{
        background: url(../img/fb1.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    .fb:hover{
        background: url(../img/fb2.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    .tg{
        background: url(../img/tg2.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    .tg:hover{
        background: url(../img/tg1.png) no-repeat; /* Путь к файлу с исходным рисунком  */
    }
    a.rollover {
        -moz-background-size: 100%; /* Firefox 3.6+ */
        -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
        -o-background-size: 100%; /* Opera 9.6+ */
        background-size: 100%; /* Современные браузеры */
        display: inline-flex; /*  Рисунок как блочный элемент */
        width: 30px; /* Ширина рисунка */
        height: 30px; /*  Высота рисунка */
        margin: 4px;
    }
    a.rollover:hover {
        -moz-background-size: 100%; /* Firefox 3.6+ */
        -webkit-background-size: 100%; /* Safari 3.1+ и Chrome 4.0+ */
        -o-background-size: 100%; /* Opera 9.6+ */
        background-size: 100%; /* Современные браузеры */
    }
    a {
        text-decoration: none;
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }



</style>