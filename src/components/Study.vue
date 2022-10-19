<template>
    <a name="study"></a>
    <div class="study">
        <div class="youtube">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MNTQYhnUqR4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div class="desc">
                <h3>У нас доступно бесплатное обучение</h3>
                <p>Обучение по работе с платформой от наших партнеров, на площадке YouTube</p>
                <h3>У нас доступно платное обучение</h3>
                <p>Двухмесячный курс по двум методам торговли и инвестирования на фондовом рынке. Обучение проходит по методам VSA и Волнам Эллиота. Во время изучения курса есть возможность смотреть пройденный материал в записи. Доступ к записи предоставляется пожизненно.</p>
                <p>Оформить можно по ссылке - <a href="#">Записаться</a></p>
            </div>
        </div>
    </div>

</template>

<style scoped>

    .study {
        /*border: 1px solid red;*/
        min-height: 500px;
        max-width: 1400px;
        margin: 0 auto;
        width: auto;  
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        border-bottom: 4px solid gray;
    }
    .desc {
        height: auto;
        max-width: 400px;
        align-items: center;
        justify-content: center;
        padding: 50px 30px;
    }
    iframe {
        border-radius: 10px 10px 10px 10px;
        -webkit-border-radius: 10px 10px 10px 10px;
        -moz-border-radius: 10px 10px 10px 10px;


    }
    .youtube {
        /*border: 1px solid red;*/
        min-height: 400px;
        width: 95%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    label {
        font-size: 20px;
    }
    button {
        height: 40px;
        width: 140px;
        font-size: 20px;
    }
    input {
        font-size: 20px;
        width: 100%;
        height: 30px;
    }
    a {
        text-decoration: none;
        color: #333;
    }
</style>