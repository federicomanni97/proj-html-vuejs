<template>
      <HeaderComponent/>
      <div class="bgJumbotron">
        <JumbotronComponent/>
      </div>
        <MainComponent/>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import MainComponent from './components/MainComponent.vue'
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      MainComponent
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
.bgJumbotron{
        background-image: url('/images/bg.jpg');
        background-repeat: no-repeat;
        background-position: bottom;
        height: 50rem;
    }

</style>