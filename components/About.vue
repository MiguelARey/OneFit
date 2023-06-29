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
                        <h3>Wink Content</h3>
                        <IconsWink/>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores laborum voluptas facere quo debitis dolore, excepturi possimus alias temporibus.
                        </figcaption>
                    </figure>
                </article>
                
                <article>
                    <div class="fig-opc">
                        
                    </div>
                    <figure>
                        <h3>Wink Content</h3>
                        <IconsWink/>
                        <figcaption>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad maiores laborum voluptas facere quo debitis dolore, excepturi possimus alias temporibus.
                        </figcaption>
                    </figure>
                </article>
                <article>
                    <div class="fig-opc">
                        
                    </div>
                    <figure>
                        <h3>Wink Content</h3>
                        <IconsWink/>
                        <figcaption>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio nobis similique fugiat numquam veritatis modi aliquam natus assumenda, corporis inventore.
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
    }

    .about-container figcaption{
        text-align: center;
    }

</style>