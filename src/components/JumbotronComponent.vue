<template>
    <div class=" container text-light mainjumbo">
        <div class="row">
            <div class=" col-12">
                <div class="col-6">
                    <h1 class="text-uppercase">Online Game</h1>
                    <h3 class="text-uppercase">Genuine Money Transaction</h3>
                    <p>Assertively Communicate An Expanded Array Of Mindshare Rathrer Than Diverse Technologies For Magnetic Applications Eamlessly Virtual Conveniently Monetize Synergistic Human Capital</p>
                    <button class="boxshadow text-uppercase p-3 fw-bold fs-5">Join Us Today <i class="fa-solid fa-circle-play"></i></button>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600;700&display=swap');

.mainjumbo{
    font-family: "Oswald", sans-serif;
    padding: 200px 0px;
}

h1{
    font-size: 6rem;
    text-shadow: 2px 2px var(--color-lightred);
}

h3{
    font-size: 2rem;
}

button{
    color: var(--color-lightred);
}
.boxshadow{
    box-shadow: 3px 5px white;
    border-style: none;
}

</style>