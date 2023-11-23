<template>
        <HeaderComponent/>
        <JumbotronComponent/>
        <MainFirstComponent/>
        <MainComponent/>
        <MainMatchesSchedule/>
        <CardsTeams/>
        <MainStreamingSection/>
        <MainShirtsComponent/>
        <OurPartnersComponent/>
        <MainMostPopularPosts/>
        <MainTestimonialsComponent/>
        <FooterComponent/>
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
import OurPartnersComponent from './components/OurPartnersComponent.vue';
import MainMostPopularPosts from './components/MainMostPopularPosts.vue';
import MainTestimonialsComponent from './components/MainTestimonialsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
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
      OurPartnersComponent,
      MainMostPopularPosts,
      MainTestimonialsComponent,
      FooterComponent
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

</style>