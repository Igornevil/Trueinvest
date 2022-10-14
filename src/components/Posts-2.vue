<template>
    <div class="Posts">
        <div class="block">
            <h1>Новости</h1>
            <div class="onepost">
                <img src="../img/forex15.jpg"/>
                <div class="description">
                    <h4>Текст заголовка</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, maiores.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, maiores.</p>
                </div>
            </div>
        </div>
    </div>

</template>



<style scoped>

    .Posts {
        max-width: 1200px;
        height: auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin: auto;
        padding: 25px 0px;
        border-bottom: 4px solid gray;
        /* border: 1px solid red; */
        /* border-top: 4px solid gray; */
    }
    .onepost{
        /* border: 1px solid red; */
        width: 320px;
        height: 300px;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.67);
        -webkit-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.67);
        -moz-box-shadow: 0px 0px 2px 2px rgba(0,0,0,0.67);
        border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px 6px 6px 6px;
        -moz-border-radius: 6px 6px 6px 6px;
        position: relative;
    }
    .description{
        bottom: 0;
        position: absolute;
        background: RGBA(139,146,162,0.24);
    }
    .post {
        display: flex;
        margin: 5px 10px;
        text-align: start;
        padding: 0 5px;
        box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
        -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.67);
    }
    img {
        width: 100%;
        left: 0;
        
        position: absolute;
        border-radius: 6px 6px 6px 6px;
        -webkit-border-radius: 6px 6px 6px 6px;
        -moz-border-radius: 6px 6px 6px 6px;
    }
    .desk {
        margin-left: 10px;
    }
    .block{
        width: auto;
        height: auto;
        /* display: flex; */
        justify-content: center;
        flex-wrap: wrap;
    }
    a {
        text-decoration: none;
        color: gray;
    }
    p,h4 {
        color: whitesmoke;
    }

</style>