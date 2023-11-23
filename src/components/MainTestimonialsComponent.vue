<template>
    <div class="bg-testimonials">
        <div class="container text-light mainsections">
            <div class="text-center ">
                <span class="colorlightred">Our Recent News</span>
                <h1 class="text-uppercase">Our most popular testimonial posts</h1>
            </div>
            <swiper
            :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                        }"
                :slidesPerView="2"
                :spaceBetween="0"
                :loop="true"
                :modules="modules"
                class="mySwiper"
            >    
                <swiper-slide v-for="TestimonialPosts in store.PopularTestimonials">
                    <div class="py-5 justify-content-center">
                        <div class="rounded-4 p-4 m-3 bg-lightblue">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <img class="logowidth rounded-circle" :src="TestimonialPosts.userImage" alt="">
                                    <div class=" pt-3 ps-3">
                                        <h5 class="text-uppercase">{{ TestimonialPosts.name }}</h5>
                                        <p>{{ TestimonialPosts.profession }}</p>
                                    </div>    
                                </div>    
                                <div>
                                    <img class="logowidth" :src="TestimonialPosts.team" alt="">
                                </div>
                            </div>
                            <div class="py-4">
                                <p>{{ TestimonialPosts.review }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide v-for="TestimonialPosts in store.PopularTestimonials">
                    <div class="py-5 justify-content-center">
                        <div class="rounded-4 p-4 m-3 bg-lightblue">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="d-flex align-items-center">
                                    <img class="logowidth rounded-circle" :src="TestimonialPosts.userImage" alt="">
                                    <div class=" pt-3 ps-3">
                                        <h5 class="text-uppercase">{{ TestimonialPosts.name }}</h5>
                                        <p>{{ TestimonialPosts.profession }}</p>
                                    </div>    
                                </div>    
                                <div>
                                    <img class="flip-card logowidth" :src="TestimonialPosts.team" alt="">
                                </div>
                            </div>
                            <div class="py-4">
                                <p>{{ TestimonialPosts.review }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>    
            </swiper>                      
            </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { store } from '../data/store'
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup () {
        

        return {
            store,
            modules: [Autoplay],
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

.bg-lightblue{
    background-color: var(--color-lightblue);
}
.logowidth{
    width: 60px;
    height: 60px;
}

.bg-testimonials{
    background-image: url('/public/images/bg.png');
}

</style>