<template>
    <div class="container py-5 text-light mainsections d-flex align-items-center">
        <div class="mainImage">
            <img src="/public/images/01.png" alt="">
        </div>
        <div class="px-5">
            <p class="text-uppercase text-danger">Who We are</p>
            <h3 class="fs-1 fw-bold text-uppercase">We are professional team esport</h3>
            <p class="">Distinctively provide access mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than an extensible archtextur services and cross.</p>
            <div class="">
                <div class="d-flex iconsSize align-items-center">
                    <div class="bgwhoweare rounded-circle p-2">
                        <img :src="store.whoweareIcons.firstIcon" alt="">
                    </div>
                    <div class="p-3">
                        <h3>103K Community Earning</h3>
                        <p>Distinctively Provide access mutfuncto users whereas communicate leveraged services</p>
                    </div>    
                </div>
                <div class="d-flex iconsSize align-items-center">
                    <div class="bgwhoweare rounded-circle p-2">
                        <img :src="store.whoweareIcons.secondIcon" alt="">
                    </div>
                    <div class="p-3">
                        <h3>34M+ Registered Players</h3>
                        <p>Distinctively Provide access mutfuncto users whereas communicate leveraged services</p>
                    </div>
                </div>
                <div class="d-flex iconsSize align-items-center">
                    <div class="bgwhoweare rounded-circle p-2">
                        <img :src="store.whoweareIcons.thirdIcon" alt="">
                    </div>
                    <div class="p-3">
                        <h3>240K Streams Complete</h3>
                        <p>Distinctively Provide access mutfuncto users whereas communicate leveraged services</p>
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

.iconsSize img{
    width: 60px;
    padding: 5px;
}

.bgwhoweare{
    background-color: var(--color-lightred);
}
.mainImage img{
    width: 550px;
}
</style>