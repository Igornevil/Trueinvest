<template>
    <nav
            class="nav-header"
            :class="{
    'not-hidden': isActive,
    'hidden': !isActive,
    }">
        <ul class="topmenu">
            <li v-for="item in items">
                <a v-bind:href="item.site">{{ item.label }}</a>
                <ul v-if="item.hiden"  class="submenu">
                    <li v-for="i in item.hiden">
                        <a v-bind:href="i.site" target="_blank">{{ i.label }}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <nav
            class="nav-h"
            :class="{
    'not-hidden': !isActive,
    'hidden': isActive,
    }">
        <ul class="topmenu-h">
            <li v-for="item in items">
                <a v-bind:href="item.site">{{ item.label }}</a>
                <ul v-if="item.hiden"  class="submenu-h">
                    <li v-for="i in item.hiden">
                        <a v-bind:href="i.site" target="_blank">{{ i.label }}</a>
                    </li>
                </ul>
            </li>

        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'Header1',
    props: {
      msg: String
    },
      data() {
          return {
              items: [
                  {label: "Разбор графиков на заказ", site: "#"},
                  {label: "Обучение", site: "#"},
                  {
                      label: "Стратегии", site: "#", hiden: [
                          {label: "Strategi 1", site: "#"},
                          {label: "Strategi 2", site: "#"},
                          {label: "Strategi 3", site: "#"}
                      ]
                  },
                  {
                      label: "Открыть счет", site: "#", hiden: [
                          {label: "Just2Trade", site: "https://just2trade.online/ref/TRUEINVESTOR"},
                          {
                              label: "Finam",
                              site: "https://www.finam.ru/open/order/russia?AgencyBackOfficeID=110&agent=25538531-713f-4425-a253-6e5b0d2eb75f"
                          }
                      ]
                  },
                  {label: "Контакты", site: "#"},
                  {label: "Выйти", site: "/home"},
              ],

              leftMenu: [
                  {label: "Личные данные", site: "#"},
                  {label: "Мои подписки", site: "#"},
                  {label: "Стратегии", site: "#"},
                  {label: "Форум", site: "/home"},
                  {label: "Секрет", site: "/home", admin: true},
              ],

              isActive: false,

          };
      },
      methods: {
          act() {
              if (document.documentElement.clientWidth >= 938) {
                  this.isActive = true;
              } else {
                  this.isActive = false;
              }
          },
      },
      mounted() {
          this.act()
      },
  }
</script>

<style scoped>
    .hidden {
        display: none;
    }
    .not-hidden {
        display: block;
    }
    body {margin:0;}
    nav {
        display: block;
        width: auto;
        padding: 0 0 10px 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .topmenu > li {
        display: inline-block;
        /*width: 100%;!*new*!*/
        margin-right: 20px;
        position: relative;
    }
    .topmenu-h{
        display: block;
    }
    .topmenu > li:last-child {
        margin-right: 0;/*new*/
    }
    a {
        display: block;
        padding: 10px 15px;
        text-decoration: none;
        outline: none;
        font-family: 'Lora', serif;
        transition: .5s linear;
        color: white;
    }
    .fa {
        font-family: "FontAwesome";
        color: inherit;
        padding-left: 10px;
    }
    .submenu {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: 10;
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
    }
    .submenu-h {
        position: relative;
        top: 100%;
        left: 0;
        width: 100%;
        z-index: 10;
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
    }
    .nav-header ul, .nav-h ul {
        background: #333;
    }

    .nav-header .submenu {
        -webkit-transform: scaleY(0);
        -ms-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: #333c;
    }
    .nav-h .submenu-h {
        -webkit-transform: scaleY(0);
        -ms-transform: scaleY(0);
        transform: scaleY(0);
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        background: #333c;
    }
    .nav-header ul li:hover .submenu {
        -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
        transform: scaleY(1);
    }
    .nav-h ul li:hover .submenu-h {
        -webkit-transform: scaleY(1);
        -ms-transform: scaleY(1);
        transform: scaleY(1);
        display: block;/*test*/
    }
    li:hover {
        background-color: #2c3e50d6;
        box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -webkit-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -moz-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
    }
    .topmenu-h li ul {
        display: none;/*test*/
    }
</style>
