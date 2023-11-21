<template>
        <div class="navstyle text-light pt-3">
            <div class="container d-flex justify-content-between">
                    <div>
                        <ul class="d-flex align-items-center list-unstyled">
                            <li><i class="fa-solid fa-user"></i> +800-123-4567 6587</li>
                            <li><i class="fa-solid fa-location-dot"></i> Beverley, New York 224 USA</li>
                        </ul>
                    </div>
                    <div>
                        <ul class="d-flex align-items-center list-unstyled">
                            <li><i class="fa-brands fa-facebook-messenger"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-vimeo"></i></li>
                            <li><i class="fa-brands fa-skype"></i></li>
                            <li><i class="fa-solid fa-rss"></i></li>
                        </ul>
                    </div>    
            </div>
        </div>
        <nav class="navstyle">
            <div class="container d-flex align-items-center justify-content-between text-uppercase" id="navbarNav">
                <div>
                    <img src="/public/images/logo.png" alt="Logo">
                </div>
                <div>
                    <ul class="d-flex list-unstyled text-light align-items-center">
                        <li class="" v-for="navs in store.navArray">
                            <a class="nav-link" href="#">{{ navs }}</a>
                        </li>
                        <li class="text-danger bg-light borderbutton1 p-3">
                            <a class="nav-link disabled" href="#"><i class="fa-solid fa-user"></i> Login</a>
                        </li>
                        <li class="bgbutton borderbutton2 p-3">
                            <a class="nav-link disabled" href="#"><i class="fa-solid fa-users"></i> Sign Up</a>
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>
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
@use '../assets/styles/partials/variables' as *;

.navstyle{
    background-color: var(--color-darkblue);
}

.bgbutton{
    background-color: var(--color-lightred);
}

li{
    padding: 0px 20px;
}
.borderbutton1{
    border-bottom: 2px solid var(--color-lightred);
}
.borderbutton2{
    border-right: 2px solid white;
    border-bottom: 2px solid white;
}

</style>