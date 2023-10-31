<template>
  <Menu :openCloseForm="openCloseForm" :showForm="showForm" />
  <TweetsForm
    :showForm="showForm"
    :reloadTweets="reloadTweets"
    :openCloseForm="openCloseForm"
  />
  <TweetsList :tweets="tweets" :reloadTweets="reloadTweets" />
</template>

<script>
import Menu from "./components/Menu.vue";
import TweetsForm from "./components/TweetsForm.vue";
import TweetsList from "./components/TweetsList.vue";
import { getTweetsApi } from "./api/tweet";

//Importamos ref para que el componente espere el cambio
import { ref } from "vue";

//Importamos el hook creado
import useFormTweet from "./hooks/useFormTweet.js";

export default {
  name: "App",
  components: {
    Menu,
    TweetsForm,
    TweetsList,
  },
  setup() {
    //Para que los tweets se muestren en la aplicación
    //función reverse para que se muestre primero el primer tweet
    let tweets = ref(getTweetsApi().reverse());

    //Función para que los tweets se muestren sin actualizar
    const reloadTweets = () => {
      tweets.value = getTweetsApi().reverse();
    };

    return {
      //usamos spread operator para importar las funciones
      ...useFormTweet(),
      tweets,
      reloadTweets,
    };
  },
};
</script>

<style lang="scss"></style>
