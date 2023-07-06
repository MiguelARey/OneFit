<template>
    <div class="home-page">
        <h2 v-if="emailSent" class="mail-confirmation">Well done! Your email has been sent</h2>
            <div class="newsletter">
                <section>
                    <h1>JOIN THE CREW</h1>
                    <p>Set sail with us and explore the Grand Line of adventure in the world of One Piece!</p>
                </section>
                <form ref="form" @submit.prevent="sendEmail">
                    <input type="text" name="name" placeholder="Your Name" v-model="name">
                    <input type="email" placeholder="Your email address" name="email" v-model="email">
                    <input type="submit" value="Sign Up">
                </form>
            </div>
            <div class="container">

            </div>
            <footer>
                <div>
                    <section>
                        <div class="links">
                            <section class="href">
                                <ul>
                                    <li>About</li>
                                    <li><a href="#">Our Story</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                                <ul>
                                    <li>Shop</li>
                                    <li><a href="#">Help</a></li>
                                    <li><a href="#">Downloads</a></li>
                                </ul>
                                <ul>
                                    <li>Terms and Conditions</li>
                                    <li><a href="#">All Terms and Policies</a></li>
                                </ul>
                            </section>
                        </div>
                        <div class="social">
                            <section class="media">
                                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                <a href="#"><i class="fa-brands fa-tiktok"></i></a>
                                <a href="#"><i class="fa-brands fa-youtube"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a href="#"><i class="fa-brands fa-reddit-alien"></i></a>
                                <a href="#"><i class="fa-brands fa-discord"></i></a>
                                <a href="#"><i class="fa-brands fa-facebook-messenger"></i></a>
                                <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
                            </section>
                        </div>
                    </section>
                    <article>
                        <p>
                            Copyright @ 2023, All Right Reserved
                        </p>
                        <div class="lang">
                            <i class="fa-solid fa-caret-down"></i>
                            <p>English (EU)</p>
                            <ul class="list-lang">
                                <li>English (EU)</li>
                                <li>Spanish (MX)</li>
                                <li>Korean (KR)</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </footer>
        </div>
</template>

<script>
    import emailjs from 'emailjs-com'

    export default{
        data(){
            return{
                name:'',
                email:'',
                emailSent: false
            }
        },
        methods:{
            sendEmail(e){
                try{
                    emailjs.sendForm('service_71cov0y','template_hnnc6w6',e.target,'HOPIlZBeW7ASwXYTh',{
                    name:this.name,
                    email:this.email
                    })
                    this.emailSent = true;
                }catch(error){
                    console.log(error)
                }
                
                this.name = '',
                this.email = ''
                
            }
            
        }
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap');

@font-face {
    font-family: "Druk-Wide";
    src: url(../assets/fonts/Druk-Wide-Bold.ttf);
}

/* DEFAULT COLORS

$dark-blue;: #164B60;
$blue:#1B6B93;
$main-blue:#4FC0D0;
$pink:#FFD0D0;
$red:#DC0000;
$yellow:#FFF80A; */

*{
    padding: 0;
    margin: 0;
    font-family: "Lato",sans-serif;
}

html{
    scroll-behavior: smooth;
}

/* // footer  */

.home-page{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #4FC0D0;
    padding-top: 10vh;
}
footer{
    padding-top: 5vh;
    display: flex;
    justify-content: center;
    background:linear-gradient(180deg,#4FC0D0,#FFD0D0);
    width: 100%;
}

footer > div{
    width: 85%;
}

footer section{
    display: flex;
    justify-content: space-between;
    padding-bottom: 2vh;
}

footer article{
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #1B6B93;
    color: lightgrey;
}

footer article > p {
    padding: 2vh 4vh;
    color: #164B60;
} 

.links{
    display: flex;
    flex-direction: column;
    width: 50%;
    gap: 5vh;
}

.links img{
    width: 12vh;
    height: 12vh;
}

.href li{
    list-style: none;
    color: #164B60;
    padding: 0.40rem;
}

.href a{
    text-decoration: none;
    color: #1B6B93;
}

.href a:hover{
    color:#164B60;
    transition: .4s;
}

.href ul > li:first-child{
    font-weight: 700;
}

.href{
    display: flex;
    justify-content: space-between;  
}

.media i:hover{
    background-color: #1B6B93;
    transition: .5s;
}

.media i{
    width: 8vh;
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #FFD0D0;
    background-color: #164B60;
}

.media{
    display: flex;
    flex-wrap: wrap;
    gap: 2vh;
}

.media >a{
    text-decoration: none;
}

.social{
    width: 28%;
}

.lang{
    display: flex;
    gap: 2vh;
    padding: 2vh 4vh;
    font-weight: 600;
    position: relative;
    color: #164B60;
}

.lang:hover{
    background-color: #164B60;
    cursor: pointer;
    color: #FFD0D0;
}

/* // Language selection - set js function */
.list-lang{
    display: none;
    position: absolute;
    flex-direction: column;
    background-color: #164B60;
    bottom: 100%;
    width: 100%;
    left: 0;
}

.list-lang > li{
    padding: 1vh;
    font-weight: 600;
    list-style: none;
}

.list-lang > li:hover{
    cursor: pointer;
    background-color: #4FC0D0;
}


.newsletter >form{
    padding: 2vh 5vh 2vh 0;
    display: flex;
    gap: 2vh;
}

.newsletter >section{
    padding: 2vh 0 2vh 5vh;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 1vh;
}

.newsletter h1{
    font-size: 2rem;
    background: linear-gradient(90deg,#FFD0D0
    ,rgb(183, 75, 101));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Druk-Wide",sans-serif;
}

.newsletter p{
    color: #FFD0D0;
    font-size: 1.1rem;
}

.newsletter input[type=submit]{
    color: #1B1919;
    background-color: gainsboro;
    padding: 2vh 3vh;
    font-weight: 600;
    border: 1px solid gainsboro;
    border-radius: 8px;
    font-size: 1rem;
}

.newsletter input[type=submit]:hover{
    background-color: #FFD0D0;
    cursor: pointer;
    transition: .4s;
}

.newsletter input[type=email]{
    width: 40vh;
    padding: 1vh 2vh;
    background-color: rgb(53, 53, 70);
    border: 2px solid grey;
    border-radius: 8px;
    color: whitesmoke;
}

.newsletter input[type=text]{
    width: 25vh;
    padding: 1vh 2vh;
    background-color: rgb(53, 53, 70);
    border: 2px solid grey;
    border-radius: 8px;
    color: whitesmoke;
}

.newsletter ::placeholder{
    color: grey;
    font-weight: 600;
}

.newsletter{
    display: flex;
    width: 85%;
    align-items: center;
    background-color:#164B60;
    border: 2px solid #1B6B93;
    border-radius: 10px;
    justify-content: space-between;
    padding: 1vh 0;
    margin-top: 2vh;
}

.mail-confirmation{
    background-color: rgb(13, 227, 13);
    width: 100%;
    text-align: center;
    padding: 1vh 0;
    color: rgb(72, 64, 64);
}
</style>