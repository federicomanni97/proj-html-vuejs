<template>
  <body>
    <div class="text-light">
      <HeaderComponent/>
    </div>
    <h1>ciao</h1>
  </body>
</template>


<script>
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    components: {
      HeaderComponent,
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

</style>