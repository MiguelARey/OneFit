<template>
    <div>
        <div class="main-content" id="gallery">
            <Gallery v-if="togPage" :characters="this.page1"/>
            <Gallery v-else :characters="this.page2"/>
            <button @click="togglePage(); toggleClass()" :class="this.btnClass"></button>
        </div>
    </div>  
</template>

<script>

    import axios from "axios"

    export default{
        data(){
            return{
                characters:[],
                page1:[],
                page2:[],
                togPage:true,
                btnClass: 'off-btn'
            }
        },
        methods:{
            togglePage(){
                this.togPage = !this.togPage;
            },
            toggleClass(){
                if(this.btnClass === 'off-btn'){
                    this.btnClass = 'active-btn';
                }else{
                    this.btnClass = 'off-btn';
                }
            }
        },
        async created(){
            try {
                const { data } = await axios.get(`http://localhost:8080/result/`);
                this.results = { ...data };
                this.characters = this.results.result;
                this.page1 = this.characters.slice(0,9);
                this.page2 = this.characters.slice(10,15);
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
        flex-direction: column;
        gap: 5vh;
        align-items: center;
        background:linear-gradient(180deg,#FFD0D0 ,#4FC0D0);
        padding: 5vh 0;
    }

    .off-btn{
        width: 6vw;
        height: 4vh;
        background-color:#597884;
        border: 1px solid transparent;
        border-radius: 15px;
        cursor: pointer;
    }

    .off-btn:hover{
        background-color: #425962;
        transition: .8s;
    }

    .active-btn{
        width: 6vw;
        height: 4vh;
        background-color:#164B60;
        border: 1px solid transparent;
        border-radius: 15px;
        cursor: pointer;
    }
</style>