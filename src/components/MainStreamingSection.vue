<template>
  <div class="bg-livestreaming">  
    <div class="container text-light mainsections marginbottom">
        <div class="text-center text-uppercase p-5 mt-5">
            <span class="colorlightred">Our latest videos</span>
            <h1 class="fw-bold p-3">Check our live streaming</h1>
        </div>
        <div class="row g-5 pb-5">
            <div class=" col-6" v-for="images in store.liveStreaming1">
                <div class="streamimg">
                    <img class="borderblue" :src="images.image" alt="">
                    <div class="streamtext p-4">
                        <button class="bglightred my-2 text-light text-uppercase border-0 p-2 fw-bold">Join Us Today <i class="fa-solid fa-circle-play"></i></button>
                        <h4 class="text-uppercase">{{ images.title }}</h4>
                    </div>
                </div>
            </div>
            <div class="col-4" v-for="images2 in store.liveStreaming2">
                <div class="streamimg">
                    <img class="borderblue" :src="images2.image" alt="">
                    <div class="streamtext p-4">
                        <button class="bglightred my-2 text-light text-uppercase border-0 p-2 fw-bold">Join Us Today <i class="fa-solid fa-circle-play"></i></button>
                        <h4 class="text-uppercase">{{ images2.title }}</h4>
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

.bglightred{
    background-color: var(--color-lightred);
}

.borderblue{
    border: 10px solid var(--color-lightblue);
}

.streamimg{
    position: relative;
}

.marginbottom{
    margin-bottom: 100px;
}

.streamtext{
    position: absolute;
    bottom: 0;
}

.bg-livestreaming{
    background-image: url('/public/images/bg (3).jpg');
    min-height: 500px;
    widows: 100%;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>