<template>
  
    <header class="header">
      <div class="container">
        <div class="header__body">
          <div class="header__burger" v-on:click=sub()>
            <span></span>
          </div>
          <nav class="header__menu">
            <ul class="header__list">
              <li v-for="(item, index) in items"
                    v-bind:key="index">
                <a class="header__link" v-bind:href="item.site"> {{ item.label }} </a>
                <ul v-if="item.hiden"  class="sub-header__list">
                        <li v-for="(i, index) in item.hiden"
                            v-bind:key="index">
                            <a v-bind:href="i.site" class="sub-header__link" target="_blank">{{ i.label }}</a>
                        </li>
                    </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  
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
                label: "Новости", site: location.origin + '/posts', hiden: [
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
        
        sub() {
            document.querySelector('.header__burger').classList.toggle('active')
            document.querySelector('.header__menu').classList.toggle('active')
            document.querySelector('body').classList.toggle('lock')
        },
        onSubmit() {
            console.log('Submit','Name - ', this.name, 'Message - ', this.message)
            this.name = ''
            this.message = ''
            }
        },

        mounted() {
        },
        created() {
        },
  }



</script>

<style scoped>
*,*:before,*:after{
  padding: 0;
  margin: 0;
  bottom: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.container{
  max-width: 1180px;
  margin: 0px auto;
  padding: 0px 10px;
}
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 50;
}
.header:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 53px;
  z-index: 0;
  background-color: #4B4A4A;
  z-index: 2;
}
.header__body {
  position: relative;
  display: flex;
  justify-content: flex-end;
  height: 53px;
  align-items:center ;
}

.header__logo {}
.header__burger {
  display: none;
}
.header__menu {}
.header__list {
  display: flex;
  position: relative;
  z-index: 2;
}
.header__list li {
  list-style: none;
  margin: 0px 0px 0px 20px;
}
.header__list li:hover .sub-header__list{
  display: block;
}
.header__link {
  color: #fff;
  text-transform: uppercase;
  font-size: 18px;
  text-decoration: none;
}
.sub-header__list {
  display: none;
  position: absolute;
  left: 0;
  top: 20px;
  /* background-color: #4B4A4A; */
  background-color: #ccc;
}
.sub-header__link {
  color: #fff;
}
@media (max-width:767px) {

  .header__body {
    height: 50px;
  }
  .header:before {
  height: 50px;
}
  .header__burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 3;
  }
  .header__burger span{
    position: absolute;
    background-color: #fff;
    left: 0;
    width: 100%;
    height: 2px;
    top: 9px;
    transition: all 0.3s ease 0s;
  }
  .header__burger::before,
  .header__burger::after{
    content: '';
    background-color: #fff;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: all 0.3s ease 0s;
  }
  .header__burger::before{
    top: 0;
  }
  .header__burger::after{
    bottom: 0;
  }
  .header__burger.active::before {
    transform: rotate(45deg);
    top: 9px;
  }
  .header__burger.active::after {
    transform: rotate(-45deg);
    bottom: 9px;
  }
  .header__burger.active span {
    transform: scale(0);
  }
  .header__menu {
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    transition: all 0.3s ease 0s;
    background-color: #161718;
    opacity: 90%;
    padding: 70px 0 0 0 ;
  }
  .header__menu.active {
    top: 0;
    
  }
  .header__list {
    display: block;
  }
  .header__list li {
    margin: 0 0 20px 0;
  }

}

</style>
<style>
@media (max-width:767px) {
  body.lock {
    overflow: hidden;
  }
}
</style>