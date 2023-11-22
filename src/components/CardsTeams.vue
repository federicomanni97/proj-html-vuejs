<template>
    <div class="mainsections py-5">
        <div class="py-5">
            <div class="text-uppercase p-5 text-light text-center">
                <span class="colorlightred ">Our team players</span>
                <h1 class="fw-bold">Meet our squad players</h1>
            </div>
            <div class="row w-100 mb-5">
                <div class="text-light d-flex">
                    <div class="col-2 position-relative width20 cardsbg " v-for="logos in store.slidesCards">  
                        <div class="overlay" :class="logos.color"></div>
                        <div class="highindex d-flex flex-column flex-wrap justify-content-center h-100 align-items-center">
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
    data() {
        
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

.overlay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
}

.highindex{
    position: relative;
    z-index: 1;
    width: 100%;

}

.width20{
    width: calc(20% - 10px);
    margin: 0 10px;
}
.green{
    background-color: rgb(4, 90, 18);
    
}
.blue{
    background-color: rgb(5, 9, 255);
}
.yellow{
    background-color: rgb(255, 255, 70);
}
.purple{
    background-color: rgb(143, 7, 170);
}
.orange{
    background-color: orangered;
}
</style>