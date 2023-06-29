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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam doloremque rem reiciendis dolor corporis, blanditiis neque temporibus. Sequi, odio nisi dolorem doloremque architecto at vel earum ratione commodi autem.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam doloremque rem reiciendis dolor corporis, blanditiis neque temporibus. Sequi, odio nisi dolorem doloremque architecto at vel earum ratione commodi autem.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laboriosam doloremque rem reiciendis dolor corporis, blanditiis neque temporibus. Sequi, odio nisi dolorem doloremque architecto at vel earum ratione commodi autem.
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
        height: 65vh;
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
        justify-content: end;
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
    }

    .about-container{
        display: flex;
    }
    


</style>