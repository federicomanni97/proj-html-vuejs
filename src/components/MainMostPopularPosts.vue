<template>
    <div class="bg-populararticles p-3">
        <div class="container text-light mainsections marginbottom">
            <div class="text-center text-uppercase p-5 mt-5">
                <span class="colorlightred text-uppercase">Our recent news</span>
                <h1 class="fw-bold p-3">Our most popular blog posts</h1>
            </div>
            <div class="row g-5 pb-5">
                <div class=" col-6" v-for="article in store.PopularBlogPosts">
                        <img class="w-100 object-fit-cover h-50 borderblue" :src="article.image" alt="">
                        <div class="bg-lightblue p-3">
                            <h3>{{ article.title }}</h3>
                            <div class="d-flex ">
                                <p>{{ article.creator }}</p>
                                <span class="px-3">|</span>
                                <p>{{ article.date }}</p>
                            </div>
                            <div>
                                <p>{{ article.paragraph }}</p>
                            </div>
                            <div>
                                <button class="bglightred my-2 text-light text-uppercase border-0 p-2 fw-bold">Read More <i class="fa-solid fa-circle-play"></i></button>
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
.bg-lightblue{
    background-color: var(--color-lightblue);
}

.borderblue{
    border: 10px solid var(--color-lightblue);
}
.bglightred{
    background-color: var(--color-lightred);
}

.bg-populararticles{
    background-image: url('/public/images/bg (2).jpg');
}

</style>