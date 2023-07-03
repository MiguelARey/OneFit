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

    import axios from "axios"

    export default{
        data(){
            return{
                characters:[]
            }
        },
        async created(){
            try {
                const { data } = await axios.get(`http://localhost:8080/result/`);
                this.results = { ...data };
                this.characters = this.results.result;
                this.characters = this.characters.slice(0,15);
                console.log(this.characters);
            } catch (error) {
            console.error(error);
            }
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