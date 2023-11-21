<template>
      <HeaderComponent/>
      <div class="bgJumbotron">
        <JumbotronComponent/>
      </div>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
.bgJumbotron{
        background-image: url('/images/bg.jpg');
        background-repeat: no-repeat;
        background-position: center;
        height: 50rem;
    }

</style>