<template>
    <div class="bg-footer paddingb footerfont">
        <div class="container text-light">
            <div class="row p-2">
                <div class="col-4 py-4 borderfooter" v-for="infos in store.footerContactInfos">
                    <div class="d-flex align-items-center">
                        <div class="">
                            <img class="p-1" :src="infos.image" alt="">
                        </div>
                        <div class="">
                            <span class="p-1">{{ infos.info }}</span>
                        </div>
                        <div class="">
                            <span>{{ infos.infoDate }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row paddingtop">
                <div class="col-4" v-for="leftFooter in store.footerLeftSide">
                    <img :src="leftFooter.logo" alt="">
                    <p>{{ leftFooter.paragraph }}</p>
                    <img src="" alt="">
                </div>
                <div class="col-4">
                    <h4 class="py-2 text-uppercase fw-bold">Top Jackpot Games:</h4>
                    <div class="d-flex align-items-center" v-for="adv in store.footerMiddleSide">
                        <img class="" :src="adv.advLogo" alt="">
                        <div class="d-flex p-2 flex-column">
                            <p class="text-uppercase fw-bold">{{ adv.title }}</p>
                            <p>{{ adv.details }}</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 text-light">
                    <h4 class="text-uppercase fw-bold">Our Newsletter</h4>
                    <p>Gamer esports organization supported by community leaders</p>
                    <div>
                        <div class="py-3">
                            <input class="w-75 py-2" type="text" placeholder="Your Name">
                        </div>
                        <div>
                            <input class="w-75 py-2" type="text" placeholder="Your Email">
                        </div>
                    </div>
                    <div class="py-5">
                        <button class="boxshadow colorlightred text-uppercase border-0 p-3 fw-bold">Send Message<i class="fa-solid p-1 fa-circle-play"></i></button>
                    </div>
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

.footerfont{
    font-family: "Oswald", sans-serif;
}

.bg-footer{
    background-image: url('/public/images/bg (5).jpg');
    background-repeat: no-repeat;
    background-size: cover;
}

.paddingb{
    padding-bottom: 200px;

}

.paddingtop{
    padding-top: 60px;
}
.colorlightred{
    color: var(--color-lightred);
}
.boxshadow{
    box-shadow: 3px 5px var(--color-lightred);
}

input{
    background: grey;
    opacity: 0.2;
    border: none;
}

::placeholder {
  color: white;
  opacity: 1;
}

.borderfooter{
    border: 1px solid rgba(128, 128, 128, 0.479);

}

</style>