<template>
    <div>
        <div class="cont">
            START MBTI
        </div>
        <div class="main-content">
            <Gallery :characters="this.characters"/>
        </div>
    </div>  
</template>

<script>
    import Gallery from './Gallery.vue';
    export default{
        data(){
            return{
                charApi: "http://localhost:80/onefit_server/rest/api/V1/char.php",
                characters: []
            }
        },
        components:{
            Gallery
        },
        methods:{
            async getCharacters(){
                try{
                    let response = await fetch(this.charApi);
                    this.characters = await response.json();
                }catch(error){
                    console.log(error)
                }
            }
        },
        created(){
            this.getCharacters();
        }
    }
</script>


<style>
    .main-content{
        display: flex;
        justify-content: center;
        align-items: center;
        background:linear-gradient(180deg,#FFD0D0 ,#4FC0D0);
    }

    .cont{
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid grey;
        background:linear-gradient(180deg,whitesmoke ,#FFD0D0); 
    }
</style>