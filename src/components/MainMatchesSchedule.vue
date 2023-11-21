<template>
    <div class="container text-light mainsections fw-bold my-5">
        <div class="text-center">
            <span class="fs-4 colorlightred">Anywhere, Anytime</span>
            <h1 class="text-uppercase fw-bold py-3">All Matches Schedule</h1>
        </div>
        <div class="row align-items-center">
            <div class="bglightred py-4 d-flex justify-content-between fs-4">
                <div>
                    <span>2 GROUP 32 PLAYERS</span>
                </div>
                <div>
                    <span>PRIZE POOL $3200</span>
                </div>
            </div>
            <div class="col-12 d-flex align-items-center justify-content-between bg-white">    
                <div class="text-black fs-6">
                    <h2 class="fs-3">Battlefield-4 Tournament</h2>
                    <p>30 April 2022</p>
                </div>
                <div class="mx-2 p-4">
                    <img :src="store.smallLogos.lionLogo" alt="">
                    <img class="vsimg" :src="store.smallLogos.vsLogo" alt="">
                    <img :src="store.smallLogos.skullLogo" alt="">
                </div>
                <div>
                    <img class="px-2" :src="store.socialLogos.vimeoLogo" alt="">
                    <img class="px-2" :src="store.socialLogos.youtubeLogo" alt="">
                    <img class="px-2" :src="store.socialLogos.twitchLogo" alt="">
                </div>
                <div class="paddingt">
                    <button class="bglightred text-light text-uppercase border-0 p-3 fw-bold">Join Us Today <i class="fa-solid fa-circle-play"></i></button>
                </div>
            </div>
        </div>
        <div class="text-center py-5">
            <button class="boxshadow border-0 colorlightred text-uppercase p-3 fw-bold">Brows All Games <i class="fa-solid fa-circle-play"></i></button>
        </div>
    </div>
</template>

<script>
import { store } from '../data/store'
export default {
    setup () {
        

        return {
            store
        }
    }
}
</script>

<style lang="scss" scoped>
.colorlightred{
    color: var(--color-lightred);
}

.bglightred{
    background-color: var(--color-lightred);
}

.mainsections{
    font-family: "Oswald", sans-serif;
}
.boxshadow{
    box-shadow: 3px 5px var(--color-lightred);
    border-style: none;
}

</style>