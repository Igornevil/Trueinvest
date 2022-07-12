<template>
    <div class="header">
        <div class="header-hidden">
            <button id="btn-hidden" type="button"></button>
            <ul class="ul-hidden">
                <a href="#"> <li>РАЗБОР ГРАФИКОВ НА ЗАКАЗ</li></a>
                <a href="#study"> <li>ОБУЧЕНИЕ</li></a>
                <a href="#strategi"> <li>СТРАТЕГИИ</li></a>
                <a href="#contact"> <li>КОНТАКТЫ</li></a>
                <a href="#"> <li>ОТКРЫТЬ СЧЕТ</li></a>
                <a href="/"><li> ЛИЧНЫЙ КАБИНЕТ</li></a>
            </ul>
        </div>
        <ul class="ul-osn">
            <li><a href="#">РАЗБОР ГРАФИКОВ НА ЗАКАЗ</a></li>
            <li><a href="#study">ОБУЧЕНИЕ</a></li>
            <li><a href="#strategi">СТРАТЕГИИ</a></li>
            <li><a href="#contact">КОНТАКТЫ</a></li>
            <li><a href="#" class="submenu-link">ОТКРЫТЬ СЧЕТ</a>
            <ul class="submenu">
                <a href="#"><li>Finam</li></a>
                <a href="#"><li>Just2Trade</li></a>
            </ul></li>
            <li><a href="/">ЛИЧНЫЙ КАБИНЕТ</a></li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    }
  }
</script>

<style scoped>
    #open-account {
        /*display: none;*/
    }
    .header {
        padding: 0;
        margin: 0;
        height: auto;
        min-height: 35px;
        width: auto;
       /* border: 1px solid #ff0000; */
        background-color: #333;
    }
    #btn-hidden{
        height: 35px;
        width: 35px;
        margin: 10px;
        /*border: 1px solid red;*/
        background-color: #cccccc;
        background-image: url("../img/menu.png") ;
    }
    .hidden {
        display: none;
    }
    .active {
        display: flex;
    }
    .active-block {
        display: block;
    }
    .header-hidden {
        /*display: none;*/
        height: auto;
    }
    .ul-hidden {
        display: none;
        list-style-type: none;
        justify-content: start;
        flex-wrap: wrap;
        padding: 0;
        margin: 5px auto;
    }
    a {
        color: white;
        text-decoration: none;
        width: 100%;
        margin: 0 17px;

    }
    ul{
        list-style-type: none;
        padding-left: 0;
    }
    .ul-osn {
        border: 1px solid green;
        display: none;
        /*display: flex;*/
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
    }
    li {
        /*margin: 0 17px;*/
        padding: 10px 0;
        /*width: 100%;*/
        border: 1px solid #ff0000;

    }
    li:hover {
        background-color: #2c3e50d6;
        box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -webkit-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -moz-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
    }
    .submenu-link:after {
        content: "\f107";
        font-family: "FontAwesome";
        color: inherit;
        margin-left: 10px;
    }
    .submenu-link{
        /*position: relative;*/
    }
    .submenu {

        background: #273037;
        position: absolute;
        /*left: 0;*/
        top: 10%;
        /*z-index: 5;*/
        width: auto;
        /*opacity: 1;*/
        /*transform: scaleY(0);*/
        /*transform-origin :0 0;*/
        /*transition: .5s ease-in-out;*/
    }
    .submenu li {
        width: 100%;
        display: inline-block;
        border: 1px solid blue;

    }
    /*.ul-osn > li:hover .submenu {*/
    /*    opacity: 1;*/
    /*    transform: scaleY(1);*/
    /*}*/
    /*.submenu {*/
    /*    background: #273037;*/
    /*    position: absolute;*/
    /*    left: 0;*/
    /*    top: 100%;*/
    /*    z-index: 5;*/
    /*    width: 180px;*/
    /*    opacity: 0;*/
    /*    transform: scaleY(0);*/
    /*    transform-origin :0 0;*/
    /*    transition: .5s ease-in-out;*/
    /*}*/
    /*.submenu a {*/
    /*    color: white;*/
    /*    text-align: left;*/
    /*    padding: 12px 15px;*/
    /*    font-size: 13px;*/
    /*    border-bottom: 1px solid rgba(255,255,255,.1);*/
    /*}*/
    /*.submenu li:last-child a {border-bottom: none;}*/

</style>
