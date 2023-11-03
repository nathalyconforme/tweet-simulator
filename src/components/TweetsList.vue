<template>
  <div class="container">
    <h1 class="text-center mb-4">Lista de Tweets</h1>
    <p v-if="tweets.length === 0">No hay tweets</p>
    <div class="tweet" v-for="tweet in tweets" :key="tweet.id">
      <p class="tweet__title">{{ tweet.username }}</p>
      <p class="tweet__text">{{ tweet.tweet }}</p>
      <span>{{ formatearFecha(tweet.createdAt) }}</span>
      <Close @click="deleteTweet(tweet.id)" />
    </div>
  </div>
</template>

<script>
//importación de moment para formatear la fecha
import moment from "moment";
//importación para que salga en español
import "moment/locale/es";

//importación del icono para eliminar tweet
import { Close } from "./Icons/index";

//import de la función deleteTweets
import { deleteTweetApi } from "../api/tweet";

export default {
  props: {
    tweets: Array,
    reloadTweets: Function,
  },
  components: {
    Close,
  },
  setup(props) {
    //Función para formatear fecha
    const formatearFecha = (date) => {
      return moment(date).fromNow();
    };

    //Función para borrar Tweets
    const deleteTweet = (idTweet) => {
      deleteTweetApi(idTweet);
      props.reloadTweets();
    };

    return {
      formatearFecha,
      deleteTweet,
    };
  },
};
</script>

<style lang="scss">
.container {
  .text-center {
    // color: #1D9BF0;
    font-weight: 700;
  }
}
.tweet {
  position: relative;
  border: var(--borders);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    margin: 0;
  }

  &__title {
    position: absolute;
    top: -14px;
    left: 10px;
    background-color: #000000;
    padding: 0 10px;
    font-weight: bold;
  }

  span {
    position: absolute;
    right: 10px;
    bottom: -9px;
    font-size: 12px;
    color: grey;
    padding: 0 20px;
    border: var(--borders);
    background-color: #000000;
  }

  svg {
    width: 35px;
    height: 35px;
    transition: fill 0.3s ease;;
    
    &:hover {
      cursor: pointer;
      fill: rgb(29, 155, 240);
    }
  }
}
</style>
