<template>
  <div class="bgsection p-3">  
    <div class="container text-light mainsections my-5">
        <div class="text-center">
            <span class="text-uppercase colorlightred">Anywhere, Anytime</span>
            <h1 class="text-uppercase fw-bold py-3">All Matches Schedule</h1>
        </div>
        <div class="row align-items-center m-2">
            <div class="bglightred py-2 d-flex justify-content-between fs-4">
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
                    <p class="text-secondary">30 April 2022</p>
                </div>
                <div class="mx-2 p-4">
                    <img class="px-2" :src="store.smallLogos.lionLogo" alt="">
                    <img class="vsimg smallwidth" :src="store.smallLogos.vsLogo" alt="">
                    <img class="px-2" :src="store.smallLogos.skullLogo" alt="">
                </div>
                <div v-for="logos in store.socialLogos">
                    <img class="smallwidth" :src="logos" alt="">
                </div>
                <div class="paddingt">
                    <button class="bglightred text-light text-uppercase border-0 p-3 fw-bold">Join Us Today <i class="fa-solid fa-circle-play"></i></button>
                </div>
            </div>
        </div>
        
        <div class="row">
            <div class="col-6 g-5 align-items-center" v-for="logos in store.matchesLogos">
                <div class="bglightred d-flex justify-content-between p-3 fs-4">
                    <div>
                        <span>2 GROUP 32 PLAYERS</span>
                    </div>
                    <div>
                        <span>PRIZE POOL $3200</span>
                    </div>
                </div>
                <div class="gx-5 d-flex align-items-center p-3 justify-content-between bg-white">    
                    <div class="">
                        <img class="" :src="logos.logo1" alt="">
                    </div>
                    <div class="">
                        <div class="d-flex flex-column align-items-center">
                            <div class="text-black fs-6">
                                <h4 class="">Call of Duty Tournament</h4>
                            </div>
                            <div class="text-secondary align-items-center d-flex">
                                    <span>30 April 2022</span>
                                    <span class="px-3"><td>|</td></span>
                                    <span>Time: 08:30PM</span>
                            </div>
                            <div class="d-flex p-2">
                                <div v-for="socialLogos in store.socialLogos">
                                    <img class="p-1 smallwidth" :src="socialLogos" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img class="" :src="logos.logo2" alt="">
                    </div>
                </div>        
            </div>
            <div class="text-center py-5">
                <button class="boxshadow border-0 colorlightred text-uppercase p-3 fw-bold">Brows All Matches<i class="fa-solid fa-circle-play"></i></button>
            </div>
        </div>
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
.bgsection{
    background-image: url('/public/images/bg (1).jpg');
}

.bglightred{
    background-color: var(--color-lightred);
}
.mainsections{
    font-family: "Oswald", sans-serif;
}
.mainsections{
    font-family: "Oswald", sans-serif;
}
.boxshadow{
    box-shadow: 3px 5px var(--color-lightred);
    border-style: none;
}

.smallwidth{
    width: 50px;
    height: 50px;
}

</style>