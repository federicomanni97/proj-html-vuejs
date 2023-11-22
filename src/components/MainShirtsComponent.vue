<template>
    <div class="container text-light text-center mainsections ">
        <div class="p-5">
            <span class="colorlightred">Gamer T-shirt's</span>
            <h1 class="p-2 text-uppercase">Explore Our Products</h1>
        </div>
        <div class="row fw-bold">
            <div class="col-3 borderlightblue g-1" v-for="shirts in store.shopArray">
                <img class="w-100" :src="shirts.shirt" alt="">
                <div class="p-3">
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
    }
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

</style>