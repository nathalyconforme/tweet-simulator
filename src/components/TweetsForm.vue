<template>
  <div class="tweet-form container" :class="{ open: showForm }">
    <!-- arriba hemos creado una clase dinámica llamada open que se añadirá
    a las clases del div si showForm es true -->
    <form @submit.prevent="sendTweet">
      <input
        type="text"
        class="form-control"
        placeholder="Tu nombre"
        v-model="userName"
      />
      <textarea
        class="form-control"
        rows="3"
        placeholder="¡¿Qué está pasando?!"
        v-model="tweet"
      ></textarea>
      <button type="submit" class="boton">Enviar Tweet</button>
    </form>
  </div>
</template>

<script>
/**
 * Importamos ref de vue para que el componente esté pendiente
 * de cambios
 */
import { ref } from "vue";

/**Importamos desde la carpeta api la función dentro de tweet.js
 *
 */
import { saveTweetApi } from "../api/tweet";

export default {
  props: {
    showForm: Boolean,
    reloadTweets: Function,
    openCloseForm: Function,
  },
  setup(props) {
    //Creamos variables del formulario usando ref
    let userName = ref("");
    let tweet = ref("");
    //función de enviar tweet
    const sendTweet = () => {
      if (!tweet.value || !userName.value) {
        return;
      }
      saveTweetApi(tweet.value, userName.value);
      userName.value = "";
      tweet.value = "";
      props.reloadTweets();
      props.openCloseForm();
    };
    return {
      sendTweet,
      userName,
      tweet,
    };
  },
};
</script>

<style lang="scss" scoped>
.tweet-form {
  margin-top: 20px;
  height: 0;
  overflow: hidden;


  &.open {
    height: auto;
  }

  form {
    margin-bottom: 50px;

    .form-control {
      margin-bottom: 10px;
      background: none;
      border: none;
      border-bottom: var(--borders);;
      color: #fff;
    }
    .form-control::placeholder {
      color: #fff;
    }
    .form-control:focus {
      box-shadow: 0px 5px 2px 0rem rgba(29, 156, 240, 0.252);
    }

    .boton {
      justify-content: flex-end;
      float: right;
    }
  }
}
</style>
