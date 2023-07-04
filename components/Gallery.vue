<template>
    <div>
        <div class="gallery">
            <figure v-for="char in characters" :key="char.title1" :id="char._id">
                <a :href="'http://localhost:3000/result/'+char.type">
                    <img :src="char.img1" :alt="char.title1">
                    <figcaption>
                        <h2>{{ char.title1 }}</h2>
                    </figcaption>
                    <h3>{{ char.type }}</h3>
                </a>
            </figure>
        </div>
        <div class="modal" v-if="openModal">
            <div class="modal-content">
                This is a simple modal with no issues whatsover
                <button class="close-modal" @click="openModal = false">Close Modal</button>
            </div>
        </div>
    </div>
        
</template>

<script>
    export default{
        props:{
            characters:[]
        },
        data(){
            return{
                openModal:false
            }
        }
    }
</script>

<style>
    .gallery > figure{
        width: 27%;
        background-color: gainsboro;
        padding-right: 2vh;
        border-radius: 10px;
        height: 20vh;
    }

    .gallery a{
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #164B60;
    }

    .gallery >figure:hover{
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.5);
        transition: 0.3s;
        cursor: pointer;
        transform: scale(1.05);
    }

    .gallery img{
        width: 20vh;
        height: 100%;
        background-color: lightcoral;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 3vh;
        height: 400px;
    }

    .gallery h3{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        text-transform: uppercase;
        border-left: 1px solid grey;
    }

    .gallery figcaption{
        padding-right: 2vh;
        padding-left: 2vh;
        width: 50%;
    }

    .modal{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 99;
        backdrop-filter: blur(7px);
    }

    .modal-content{
        width: 700px;
        height: 400px;
        border-radius: 10px;
        background-color: rgb(71, 71, 113);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
