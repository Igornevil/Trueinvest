<template>
    <form class="addpost" @submit.prevent="onSubmit">
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Автор:</label>
        <input type="text" class="form-control" id="exampleInputEmail1" v-model="author">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Заголовок:</label>
        <input type="text" class="form-control" v-model="title">
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Текст поста:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="content"></textarea>
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div>
        <label for="formFileLg" class="form-label">Large file input example</label>
        <input class="form-control form-control-lg" id="formFileLg" type="file">
    </div>
    <button type="submit" class="btn btn-primary mt-2">Отправить</button>
    </form>


</template>

<script>
import { mapActions,mapGetters } from 'vuex';

export default {
  data() {
    return {
      author: '',
      title: '',
      content: '',
      sendForm: new FormData(),

    }
  },
  mounted() {
    tinymce.init({
    selector: 'textarea',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
      ]
    });
  },
  methods: {
    ...mapActions([
      'SET_POSTS'
    ]),
    getAll() {
      axios({
        method: 'get',
        url: 'http://176.104.33.48:3200/api/posts',
      })
      .then(function(response) {
        console.log('Ответ сервера успешно получен!');
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      })
    },
    onSubmit() {
      const selectedFile = document.getElementById('formFileLg').files[0];
      this.sendForm.append('author', this.author)
      this.sendForm.append('title', this.title)
      this.sendForm.append('content', tinymce.activeEditor.getContent())
      this.sendForm.append('picture', selectedFile)

      this.SET_POSTS(this.sendForm)


    // axios({
    //   method: 'post',
    //   url: 'http://176.104.33.48:3200/api/posts',
    //   data: this.sendForm,
    //   headers: {
    //     "Content-type": "multipart/form-data"
    //   }
    // })
    // .then(function(response) {
    //   console.log('Ответ сервера успешно получен!');
    //   location.reload() // window.location.reload()
    // })
    // .catch(function(error) {
    //   console.log(error);
    // })

  //   this.author = ''
  //   this.title = ''
  //   this.content = ''
  //   selectedFile.value = ''
    }
  }
}
</script>

<style scoped>

    .addpost {
      max-width: 90%;
      margin: 10px auto;
      margin-top: 100px;  
    }

    .feedback {
        /*border: 1px solid red;*/
        min-height: 500px;
        background-color: white;
        margin: 0 15px;
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
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