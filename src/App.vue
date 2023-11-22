<template>
      <HeaderComponent/>
      <div class="bgJumbotron">
        <JumbotronComponent/>
      </div>
        <MainFirstComponent/>
        <MainComponent/>
        <MainMatchesSchedule/>
        <CardsTeams/>
        <MainStreamingSection/>
        <MainShirtsComponent/>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
import MainFirstComponent from './components/MainFirstComponent.vue';
import MainComponent from './components/MainComponent.vue'
import MainMatchesSchedule from './components/MainMatchesSchedule.vue';
import CardsTeams from './components/CardsTeams.vue';
import MainStreamingSection from './components/MainStreamingSection.vue';
import MainShirtsComponent from './components/MainShirtsComponent.vue';
export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
      MainFirstComponent,
      MainComponent,
      MainMatchesSchedule,
      CardsTeams,
      MainStreamingSection,
      MainShirtsComponent,
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
.bgJumbotron{
        background-image: url('/images/bg.jpg');
        background-repeat: no-repeat;
        background-position: bottom;
        width: 100%;
      }

</style>