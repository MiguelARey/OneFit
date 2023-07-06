<template>
    <div class="about">
        <video src="~/assets/video/bg-video.mp4" loop muted autoplay></video>
        <div class="vid-opc">

        </div>
        <div class="about-content">
            <div class="about-container">
                <article>
                    <div class="fig-opc">

                    </div>
                    <figure>
                        <h3>Venture Upon</h3>
                        <IconsRowing/>
                        <figcaption>
                            Unleash your inner pirate and explore the depths of your personality as you navigate the captivating world of One Piece.
                        </figcaption>
                    </figure>
                </article>
                
                <article>
                    <div class="fig-opc">
                        
                    </div>
                    <figure>
                        <h3>Unleash your inner pirate</h3>
                        <IconsAnchor/>
                        <figcaption>
                            Embark on a thrilling voyage of self-discovery through our One Piece MBTI test page, where anime and personality intertwine.
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <div class="fig-opc">
                        
                    </div>
                    <figure>
                        <h3>Find your piece</h3>
                        <IconsDna/>
                        <figcaption>
                            Ready to uncover your One Piece MBTI results? Dive in and see which character's traits align with your unique personality!
                        </figcaption>
                    </figure>
                </article>
            </div>
        </div>  
    </div>
</template>

<style>
    video{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        position: absolute;
        z-index: 1;
    }

    .about{
        height: 70vh;
        position: relative;
    }

    .vid-opc{
        background-color: lightblue;
        opacity: .2;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;
    }

    .about-content{
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
    }

    .about-container{
        position: relative;
        z-index: 4;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: end;
        justify-content: center;
    }

    .about-container > article:nth-child(1){
        width: 25%;
        background-color: gainsboro;
        opacity: .8;
        z-index: 5;
        bottom: -5vh;
        position: absolute;
        border-radius: 15px;

    }

    .about-container > article:nth-child(2){
        width: 25%;
        background-color: gainsboro;
        opacity: .8;
        z-index: 5;
        bottom: 2vh;
        position: absolute;
        left: 10vh;
        border-radius: 15px;

    }

    .about-container > article:nth-child(3){
        width: 25%;
        background-color: gainsboro;
        opacity: .8;
        z-index: 5;
        bottom: 2vh;
        right: 10vh;
        position: absolute;
        border-radius: 15px;
    }

    .about-container figure{
        padding: 4vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2vh;
        height: 25vh;
    }

    .about-container figcaption{
        text-align: center;
    }

</style>