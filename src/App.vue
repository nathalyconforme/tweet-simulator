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

<style lang="scss">
:root{
  --borders: 1px solid rgb(47, 51, 54);
  --transition-buttom: background-color 0.3s ease;
}
* {
  background-color: rgb(0, 0, 0);
  color: #fff;
}
.boton {
  background-color: rgb(29, 155, 240);
  color: #fff;
  border-radius: 25px;
  padding: 5px 15px;
  font-weight: 500;
  font-size: 15px;
  border: none;
  transition: var(--transition-buttom);
}
.boton:hover {
  background-color: rgb(21, 121, 187);
}

.btn-danger {
  background-color: rgb(117, 0, 0);
}
.btn-danger:hover {
  background-color: rgb(81, 0, 0);
}
</style>
