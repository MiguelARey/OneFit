<template>
    <div class="gallery">
        <figure v-for="char in characters" :key="char.title1" @click="openModal()">
            <img :src="char.img1" :alt="char.titl1">
            <figcaption>
                <h2>{{ char.title1 }}</h2>
                <h4>{{ char.subMbti }}</h4>
            </figcaption>
            <h3>{{ char.type }}</h3>
        </figure>
        <div class="modal">
            
        </div>
    </div>
</template>

<script>
    export default{
        props:{
            characters:[]
        }
    }
</script>

<style>
    .gallery > figure{
        width: 27%;
        background-color: gainsboro;
        display: flex;
        align-items: center;
        padding-right: 2vh;
        border-radius: 10px;
    }

    .gallery >figure:hover{
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        cursor: pointer;
        transform: scale(1.05);
    }

    .gallery img{
        width: 18vh;
        height: 18vh;
        background-color: lightcoral;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 5vh;
    }

    .gallery h3{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        text-transform: uppercase;
    }

    .gallery figcaption{
        padding-right: 2vh;
        padding-left: 2vh;
        width: 50%;
    }
</style>
