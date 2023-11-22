<template>
    <div class="container text-light mainsections text-center">
        <span class="fs-4 colorlightred">Today's</span>
        <h1 class="text-uppercase fw-bold py-3">Our Game Collection</h1>
        <div class="row  justify-content-center my-5 align-items-center">
            <div class="col-4">
                <div class="mx-2 d-flex align-items-center justify-content-between bglightblue p-5">
                    <img :src="store.smallLogos.ninjaLogo" alt="">
                    <img class="vsimg" :src="store.smallLogos.vsLogo" alt="">
                    <img :src="store.smallLogos.vikingLogo" alt="">
                </div>
            </div>
            <div class="col-4">
                <div class="mx-2 d-flex align-items-center justify-content-between bglightblue p-5">
                    <img :src="store.smallLogos.monkeyhatLogo" alt="">
                    <img class="vsimg" :src="store.smallLogos.vsLogo" alt="">
                    <img :src="store.smallLogos.frogsLogo" alt="">
                </div>
            </div>
            <div class="col-4">
                <div class="mx-2 d-flex align-items-center justify-content-between bglightblue p-5">
                    <img :src="store.smallLogos.wolvesLogo" alt="">
                    <img class="vsimg" :src="store.smallLogos.vsLogo" alt="">
                    <img :src="store.smallLogos.dragonLogo" alt="">
                </div>
            </div>
        </div>
        <div class="paddingt">
            <button class="boxshadow colorlightred text-uppercase p-3 fw-bold">Brows All Games <i class="fa-solid fa-circle-play"></i></button>
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
    padding: 100px 0px;
}

.colorlightred{
    color: var(--color-lightred);
}

.bglightblue{
    background-color: var(--color-lightblue);
}

img{
    width: 105px;
    height: 105px;
}

.vsimg{
    width: 30px;
    height: 30px;
}

.paddingt{
    padding: 60px 0px;
}

.boxshadow{
    box-shadow: 3px 5px var(--color-lightred);
    border-style: none;
}
</style>