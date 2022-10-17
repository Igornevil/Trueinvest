<template>
    <div class="news">
        <div class="news-preview">
            <div class="news-img">
                <img src="../img/tg1.png">
            </div>
            <div class="news-info">
                <h1>Наш телеграм канал</h1>
                <p><a href="https://t.me/hamsters_stock" target="_blank">@hamsters_stock</a> — ежедневные разборы ключевых мировых индексов (SP500, Nasdaq и DJ) </p>
                <h1>Наш телеграм чат</h1>
                <p><a href="https://t.me/hamsters_stock_CHAT" target="_blank">@hamsters_stock_chat</a> — общение людей с похожими интересами по фондовому рынку США.</p>
            </div>
        </div>
    </div>

</template>



<style scoped>

    .news {
        width: auto;
        max-width: 1400px;
        height: auto;
        display: flex;
        justify-content: center;
        
        min-height: 500px ;
        margin: 0 auto;
        padding: 25px 0px;
        border-bottom: 4px solid gray;
    }
    .news-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        color: black;
        width: 100%;
    }
    .news-img {
        min-width: 150px;
        max-width: 250px;
        /*border: 1px solid red;*/
        margin: 50px;
    }
    .news-img > img {
        width: 100%;
    }
    .news-info {
        /*border: 1px solid red;*/
        margin: 10px;
        min-width: 200px;
        max-width: 600px;

    }
    a {
        text-decoration: none;
        color: gray;
    }

</style>