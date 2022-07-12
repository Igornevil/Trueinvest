<template>
    <nav
    class="nav-header"
    :class="{
    'not-hidden': isActive,
    'hidden': !isActive,
    }">
        <ul class="topmenu">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Разбор графиков на заказ</button>
            <li v-for="item in items">
                <button v-bind:href="item.site" >{{ item.label }}</button>
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
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Разбор графиков на заказ</button>
            <li v-for="item in items">
                <button v-bind:href="item.site" >{{ item.label }}</button>
                <ul v-if="item.hiden"  class="submenu-h">
                    <li v-for="i in item.hiden">
                        <a v-bind:href="i.site" target="_blank">{{ i.label }}</a>
                    </li>
                </ul>
                <!-- <a v-bind:href="item.site" >{{ item.label }}</a>
                <ul v-if="item.hiden"  class="submenu-h">
                    <li v-for="i in item.hiden">
                        <a v-bind:href="i.site" target="_blank">{{ i.label }}</a>
                    </li>
                </ul> -->
            </li>

        </ul>
    </nav>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Ник в телеграмм:</label>
            <input v-model="name" placeholder="@nickname" type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Текст:</label>
            <textarea v-model="message" class="form-control" id="message-text"></textarea>
          </div>
            <!-- Strat -->
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Отправить заявку</button>
            </div>
            <!-- End -->
        </form>
      </div>
      <!-- <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="submit" class="btn btn-primary">Отправить заявку</button>
      </div> -->
    </div>
  </div>
</div>
<!-- End modal-->

</template>

<script>
  export default {

      data() {
          return {
            name: '',
            message: '',
            items: [
              //{label: "Разбор графиков на заказ", site: "#", id: "exampleModal1", type: 'button', toggle: 'modal'},
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
                // {label: "Личный кабинет", site: "/private"},
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
        onSubmit() {
            console.log('Submit','Name - ', this.name, 'Message - ', this.message)
            this.name = ''
            this.message = ''
        }
        },

        mounted() {
            this.act()
        },
  }

  window.addEventListener('resize', function (event) {
      if (document.documentElement.clientWidth >= 938) {
          document.querySelector('.nav-header').classList.remove('hidden')
          document.querySelector('.nav-header').classList.add('not-hidden')
          document.querySelector('.nav-h').classList.remove('not-hidden')
          document.querySelector('.nav-h').classList.add('hidden')
      } else {
          document.querySelector('.nav-header').classList.remove('not-hidden')
          document.querySelector('.nav-header').classList.add('hidden')
          document.querySelector('.nav-h').classList.remove('hidden')
          document.querySelector('.nav-h').classList.add('not-hidden')
      }
  })
</script>

<style scoped>
    body {margin:0;}
    nav {
        display: block;
        /*flex-wrap: wrap;!*new*!*/
        width: auto;
        padding: 0 0 10px 0;
        /*margin: 0 auto 30px;*/
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
    button {
        background-color: #333c;
        color: white;
        border: none;
        padding: 10px 15px;
        text-decoration: none;
        outline: none;
        font-family: 'Lora', serif;
        transition: .5s linear;
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
    button:hover {
        background-color: #2c3e50d6;
        box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -webkit-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
        -moz-box-shadow: 0px 0px 21px 10px rgba(0,0,0,0.6);
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
    .hidden {
        display: none;
    }
    .not-hidden {
        display: block;
    }
</style>
