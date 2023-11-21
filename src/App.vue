<template>
      <HeaderComponent/>
      <div class="bgJumbotron">
        <JumbotronComponent/>
      </div>
        <MainFirstComponent/>
        <MainComponent/>
        <MainMatchesSchedule/>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import MainFirstComponent from './components/MainFirstComponent.vue';
import MainComponent from './components/MainComponent.vue'
import MainMatchesSchedule from './components/MainMatchesSchedule.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      MainFirstComponent,
      MainComponent,
      MainMatchesSchedule
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