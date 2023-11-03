<template>
  <nav class="navbar">
    <div class="container">
      <span class="navbar-titulo">Simulador de Tweets</span>
      <button
        @click="openCloseForm"
        type="button"
        class="boton"
        :class="{ 'btn-success': !showForm, 'btn-danger': showForm }"
      >
        {{ !showForm ? "Nuevo Tweet" : "Cerrar Tweet" }}
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    showForm: Boolean,
    openCloseForm: Function,
  },
};
</script>

<style lang="scss" scoped>
.navbar{
    border-bottom:var(--borders);
    font-size: 20px;
    padding: 1rem
}

</style>
