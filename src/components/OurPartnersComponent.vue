<template>
    <div class="margintopbot">
        <div class="container text-light mainsections text-center">
            <div class="m-5">
                <span class="colorlightred">We our partners</span>
                <h1 class="text-uppercase">Become a partner of gamer</h1>
            </div>
            <div class="row justify-content-center m-5">
                <div class="col-2" v-for="partners in store.partnersArray1">
                    <img :src="partners.image" alt="">
                </div>
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-3 d-flex justify-content-center" v-for="partners2 in store.partnersArray2">
                    <div>
                        <img class="" :src="partners2.image" alt="">
                    </div>
                </div>
            </div>
            <div class="py-5">
                <button class="boxshadow colorlightred text-uppercase border-0 p-3 fw-bold">Become a partner <i class="fa-solid fa-circle-play"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    data() {
        

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

.margintopbot{
    margin: 100px 0px;
}
.bglightred{
    background-color: var(--color-lightred);
}

.boxshadow{
    box-shadow: 3px 5px var(--color-lightred);
}

</style>