<template>
    <header>
        <div class="bg-image">

        </div>
        <div class="op-bg">

        </div>
        <div class="header-cont">
            <nav>
                <a href="#">
                    <img src="../assets/img/luffy.png" alt="logo-icon">
                </a>
                <h3>
                    Discover your <span>ONE</span> and only <span>FIT</span>
                </h3>
            </nav>
        </div>
    </header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300&display=swap');

@font-face {
    font-family: "Druk-Wide";
    src: url(../assets/fonts/Druk-Wide-Bold.ttf);
}

@font-face {
    font-family: "One-Piece";
    src: url(../assets/fonts/One-Piece-Font.ttf);
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

header{
    height: 10vh;
    position: relative;
    border-bottom: 2px solid grey;
}

.bg-image{
    background-image: url("https://i.pinimg.com/564x/c2/a3/03/c2a303b8f20fea0fbb57ab4d403e95f2.jpg");
    height: 100%;
    width: 100%;
    background-size:auto;
    position: absolute;
    z-index: 1;
}

.op-bg{
    background-color: white;
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    opacity: .3;
}

.header-cont{
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
}

.header-cont h3{
    width: 65%;
    font-size: 1.3rem;
    font-weight: 600;
    color: rgb(60, 45, 135);
    font-style: italic;
    text-transform: uppercase;
    display: flex;
    gap: 1rem;
    align-items: center;
    font-family: "Druk-Wide",sans-serif;
    -webkit-text-stroke: 1px white;
    -webkit-background-clip: text;
    background-clip: text;

}

.header-cont span{
    font-size: 3.7rem;
    font-family: "One-Piece",sans-serif;
    font-style: normal;
    background: linear-gradient(180deg,#bac8dd
    ,rgb(60, 45, 135));
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 0;
}

.nav-link a{
    color: #164B60;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 800;
}

.nav-link a:hover{
    color:#4FC0D0;
    transition: .4s;
}

.header-cont img{
    width: 16vh;
    height: 16vh;
}

.header-cont > nav > a{
    display: flex;
    text-decoration: none;
}

.header-cont > nav{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-left: 5vh;
}
</style>