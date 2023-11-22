<template>
    <div class="container text-light text-center mainsections my-4">
        <div class="p-3">
            <span class="colorlightred">Gamer T-shirt's</span>
            <h1 class="p-2 text-uppercase">Explore Our Products</h1>
        </div>
        <div class="row fw-bold">
            <div class="col-3 cardwidth m-1 bg-lightblue " v-for="shirts in store.shopArray">
                <img class="" :src="shirts.shirt" alt="">
                <div class="p-2">
                    <h4 class="text-uppercase">{{ shirts.nameProduct }}</h4>
                    <p class="fs-5"> {{ shirts.price }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    data(){
        
        return {
            store
        }
    },
}
</script>

<style lang="scss" scoped>
.mainsections{
    font-family: "Oswald", sans-serif;
}
.colorlightred{
    color: var(--color-lightred);
}
.borderlightblue{
    border: 10px solid var(--color-lightblue);
}

.cardwidth{
    width: 320px;
}

.bg-lightblue{
    background-color: var(--color-lightblue);
}

</style>