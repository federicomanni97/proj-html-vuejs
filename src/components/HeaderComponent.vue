<template>
    <div>
        <nav class="navbar-expand-lg  navstyle">
            <div class="collapse navbar-collapse container d-flex justify-content-between text-uppercase" id="navbarNav">
                <img src="/public/images/logo.png" alt="Logo">
                <div>
                    <ul class="navbar-nav text-light">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features +</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Achievement</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Blog +</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Contact</a>
                        </li>
                        <li class="nav-item text-danger bg-light borderbutton1">
                            <a class="nav-link disabled" href="#"><i class="fa-solid fa-user"></i> Login</a>
                        </li>
                        <li class="nav-item bgbutton borderbutton2">
                            <a class="nav-link disabled" href="#"><i class="fa-solid fa-users"></i> Sign Up</a>
                        </li> 
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        

        return {}
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