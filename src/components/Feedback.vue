<template>
    <div class="feedback">
        <div class="form">
            <div class="form-1">
                <form @submit.prevent="onSubmit">
                    <label>Имя:</label><br>
                    <input type="text" v-model="name"><br><br>
                    <label>Почта:</label><br>
                    <input type="text" v-model="email"><br><br>
                    <label>Ник или ссылка на телеграм:</label><br>
                    <input type="text" v-model="media"><br><br>
                    <button type="submit">Отправить</button>
                </form>
            </div>
            <div class="desc">
                    <h3>Оставьте свои контакты и мы свяжемся с Вами в ближайшее время для консультации!</h3>
                    <p>Команда проффесионалов поможет Вам выбрать подходящий вариант инвестирования, а так же составить портфель исходя из Ваших пожеланий.</p>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
      data() {
        return {
          name: '',
          email: '',
          media: ''

        }
      },
      methods: {
        onSubmit() {
          axios({
            method: 'post',
            url: 'http://176.104.33.48:3200/api/users',
            data: {
              name: this.name,
              email: this.email,
              media: this.media
            },
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
          .then(function(response) {
            console.log('Ответ сервера успешно получен!');
          })
          .catch(function(error) {
            console.log(error);
          })

          this.name = ''
          this.email = ''
          this.media = ''
        }
      }
    }
</script>

<style scoped>

    .feedback {
        /* border: 1px solid red; */
        width: auto;
        max-width: 1400px;
        height: auto;
        min-height: 500px;
        background-color: white;
        margin: 1rem auto;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .desc {
        /*border: 1px solid red;*/
        height: auto;
        max-width: 400px;
        align-items: center;
        justify-content: center;
        padding: 50px 30px;
    }
    .form-1 {
        border-radius: 24px 24px 24px 24px;
        -webkit-border-radius: 24px 24px 24px 24px;
        -moz-border-radius: 24px 24px 24px 24px;
        /*border: 3px solid gray;*/
        min-width: 250px;
        padding: 50px 30px;
        background-color: #cccccc;

    }
    .form {
        /*border: 1px solid red;*/
        min-height: 400px;
        background-color: white;
        width: auto;
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
</style>