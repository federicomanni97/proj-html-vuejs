<template>
    <div class="mainsections">
        <div class="text-uppercase text-light text-center">
            <span class="colorlightred">Our team players</span>
            <h1>Meet our squad players</h1>
        </div>
        <div class="row w-100" >
            <div class="text-light d-flex">
                <div class="col-2 cardsbg m-2 d-flex flex-column flex-wrap justify-content-center align-items-center" v-for="logos in store.slidesCards">  
                    <img :src="logos.logo" alt="">
                    <p class="text-uppercase fw-bold p-3 fs-4">{{ logos.name }}</p>
                    <div class="d-flex p-2">
                        <div v-for="socialLogos in store.socialLogos">
                            <img class="p-1 smallwidth" :src="socialLogos" alt="">
                        </div>
                    </div>
                </div>  
            </div>
        </div>
        <div class="container">
            <div class="card2bg my-5 d-flex text-light text-uppercase">
                <div class="heightCard row">
                    <div class="col-6 px-5 d-flex flex-column justify-content-center">
                        <span>Let's play together</span>
                        <h2>Join <span class="colorlightred">gamer</span> esports to become next pro gamer today!</h2>
                        <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than an extensible archtectur services and cross</p>
                        <div class="">
                            <button class="boxshadow colorlightred text-uppercase p-3 fw-bold">Join Community <i class="fa-solid fa-circle-play"></i></button>
                        </div>
                    </div>   
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
.mainsections{
    font-family: "Oswald", sans-serif;
}

img{
    width: 130px;
}

.colorlightred{
    color: var(--color-lightred);
}
.smallwidth{
    width: 50px;
    height: 50px;
}

.heightCard{
    height: 480px;
}
.cardsbg{
    background-image: url('/public/images/5.jpg');
    height: 500px;
    background-position: center;
    border: 10px solid var(--color-lightblue);
}
.card2bg{
    background-image: url('/public/images/bg-2.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>