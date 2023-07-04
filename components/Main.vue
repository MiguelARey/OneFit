<template>
    <div>
        <div v-if="page === 0" class="cont">
            <h1>One piece MBTI</h1>
            <Button text="Start test" :clickEvent="startEvent" />
        </div>
        <!-- quiz page -->
        <div v-else-if="page < 5">
            <Question />
        </div>
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
        computed: {
            page() {
                return this.$store.state.page;
            },
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
            },
            startEvent() {
                this.$store.commit("SET_PAGE", 1);
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
        min-height: 500px;
        padding-top: 15vh;
    }

    .cont{
        height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 2px solid grey;
        background:linear-gradient(180deg,whitesmoke ,#FFD0D0); 
        flex-direction: column;
    }

    .cont > h1{
        padding-bottom: 4vh;
        text-transform: uppercase;
        color: #164B60;
    }

    .off-btn{
        width: 6vw;
        height: 4vh;
        background-color:#597884;
        border: 1px solid transparent;
        border-radius: 15px;
        cursor: pointer;
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