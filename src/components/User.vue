<template>
    <h1>
        <hr/>
        This is page User ID
        <hr/>
    </h1>
    <div class="full">
        <nav class="left-menu">
            <ul>
                <li v-for="menu in privatMenu">
                    <router-link
                            v-bind:to="menu.site"
                            @click=act(menu.id)
                    >
                        {{menu.label}}
                    </router-link></li>
            </ul>
        </nav>
        <div class="content">
            <h1>This is menu</h1>
            <PersonDat v-if="privatMenu[0].act"/>
            <my-podpiski v-if="privatMenu[1].act"></my-podpiski>

        </div>
    </div>
</template>

<script>
  // @ is an alias to /src
  import PersonDat from '@/components/PersonDat.vue'
  import myPodpiski from '@/components/myPodpiski.vue'


  export default {
    name: 'User',
    components: {
      PersonDat,
        myPodpiski
    },
      data() {
        return {
            privatMenu: [
                {id: 1, label: "Личные данные", site: "#", act: true},
                {id: 2, label: "Мои подписки", site: "#", act: false},
                {id: 3, label: "Стратегии", site: "#", act: false},
                {id: 4, label: "Форум", site: "#", act: false},
                {id: 5, label: "Секрет", site: "/home", admin: true, act: false},
            ],
        }
      },
      methods: {
        act(index) {
            for (let data of this.privatMenu) {
                if (index === data.id) {
                    data.act = true;
                } else {
                    data.act = false;
                }
            }
        }
      }
  }



</script>


<style scoped>
    .full {
        display: flex;
        justify-content: center;
        height: 1200px;
        /*width: 100%;*/
        background-color: #cccccc;
    }
    a {
        outline: none;
        color: black;
        text-decoration: none;
    }
    a:hover {
        color: #333333;
    }
    li {
        border: 1px solid blue;
        padding: 12px 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;

    }
    .left-menu {
        min-width: 150px;
        height: auto;
        border: 1px solid red;
        display: block;
        text-align: left;
        font-size: 20px;

    }
    .content {
        min-width: 500px;
        max-width: 900px;
        width: 90%;
        border: 1px solid green;
    }
</style>