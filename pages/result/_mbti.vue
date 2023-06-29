<template>
  <main class="resultMain">
    <section class="resultSection">
      <article class="resultMbti">
        <article>
          <h1>{{ this.$route.params.mbti }}</h1>
          <h3>{{ result[mbti].subMbti }}</h3>
        </article>
        <p>{{ result[mbti].summary }}</p>
      </article>
      <figure class="resultFigure">
        <article class="resultImgBox">
          <img class="hoverAction1" :src="result[mbti].img1" :alt="result[mbti].title1" />
          <h2 class="hoverAction1">{{ result[mbti].title1 }}</h2>
          <img class="hoverAction2" :src="result[mbti].img2" :alt="result[mbti].title2" />
          <h2 class="hoverAction2">{{ result[mbti].title2 }}</h2>
        </article>
        <p>{{ result[mbti].description }}</p>
      </figure>
      <section class="matchSection">
        <figure class="match">
          <h2>Perfect Match</h2>
          <img :src="result[mbti].matchImg1" :alt="result[mbti].match1" >
          <h3>{{ result[mbti].match1 }}</h3>
          <p>{{ result[mbti].matchtitle1 }}</p>
        </figure>
        <figure class="match">
          <h2>Worst Match</h2>
          <img :src="result[mbti].matchImg2" :alt="result[mbti].match2" >
          <h3>{{ result[mbti].match2 }}</h3>
          <p>{{ result[mbti].matchtitle2 }}</p>
        </figure>
      </section>
    </section>
    <section class="resultBtnSection">
      <Button text="Try again" :clickEvent="resetPage" />
      <Button text="Share the link" :clickEvent="copyLink" />
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      mbti: null,
      result: {
        intj: {
          img1: "/i/intj.png",
          img2: "/i/intj1.png",
          title1: "Trafalgar D. Water Law",
          title2: "Basil Hawkins",
          subMbti: "Architect",
          summary: "Imaginative and strategic thinkers, with a plan for everything",
          description: "Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance - for themselves and others.",
          match1: "enfp",
          match2: "estj",
          matchImg1: "/e/enfp.png",
          matchImg2: "/e/estj.png",
          matchtitle1: "Uta",
          matchtitle2: "Nami",
        },
        intp: {
          img1: "/i/intp.jpeg",
          img2: "/i/intp1.png",
          title1: "Nico Robin",
          title2: "Kuzan",
          subMbti: "Logician",
          summary: "Innovative inventors with an unquenchable thirst for knowledge",
          description: "Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.",
          match1: "ENTJ",
          match2: "ISTJ",
          matchImg1: "/e/entj.jpeg",
          matchImg2: "/i/istj.jpeg",
          matchtitle1: "Boa Hancock",
          matchtitle2: "Smoker",
        },
        entj: {
          img1: "/e/entj.jpeg",
          img2: "/e/entj1.jpeg",
          title1: "Boa Hancock",
          title2: "Enel",
          subMbti: "Commandar",
          summary: "Bold, imaginative and strong-willed leaders, always finding a way – or making one",
          description: "Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas.",
          match1: "infp",
          match2: "istj",
          matchImg1: "/i/infp.png",
          matchImg2: "/i/istj.jpeg",
          matchtitle1: "Shirahoshi",
          matchtitle2: "Smoker",
        },
        entp: {
          img1: "/e/entp.png",
          img2: "/e/entp1.jpeg",
          title1: "Usopp",
          title2: "Sabo",
          subMbti: "Debater",
          summary: "Smart and curious thinkers who cannot resist an intellectual challenge",
          description: "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.",
          match1: "infj",
          match2: "istj",
          matchImg1: "/i/infj.png",
          matchImg2: "/i/istj.jpeg",
          matchtitle1: "Monkey D.Dragon",
          matchtitle2: "Smoker",
        },
        
        // esfj: {
        //   img1: "/e/esfj.jpeg",
        //   img2: "/e/esfj1.png",
        //   title1: "Brook",
        //   title2: "Koala",
        //   subMbti: "Consul",
        //   summary: "Extraordinarily caring, social and popular people, always eager to help",
        //   description: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
        //   match1: "isfp",
        //   match2: "istp",
        //   matchImg1: "/i/isfp.png",
        //   matchImg2: "/i/istp.jpeg",
        //   matchtitle1: "Perona",
        //   matchtitle2: "Roronoa Zoro",
        // },
      },
    };
  },
  created() {
    // this.mbti = this.$route.params.mbti;
    this.mbti = "entp";

    // exception
    if (this.result[this.$route.params.mbti] === undefined) {
      this.$router.push({ name: "index" });
    }
  },
  methods: {
    resetPage() {
      this.$store.dispatch("clickResetButton");
      this.$router.push({ name: "index" });
    },
    copyLink(){

    },
  },
};
</script>
<style>
.resultMain {
  padding: 2%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  /* background-image: url("../../static/resultBg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  /* opacity: 0.5; */
}
.resultSection {
  background-image: url("../../static/poster.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 11% 89% 13% 87% / 96% 6% 94% 4% ;
  padding: 4% 5%;
  width: 45vw;
  height: 113vh;
  display: flex;
  flex-direction: column;
}
.resultMbti {
  display: flex;
  column-gap: 2vw;
  align-items: center;
}
.resultMbti > article {
  display: flex;
  flex-direction: column;
  background-color: #5f4114;
  border-radius: 50%;
  padding: 2%;
}
.resultMbti h1 {
  margin: 0;
  text-transform: uppercase;
  font-size: 70px;
  font-weight: 900;
  /* background-color: #1b6b93; */
  width: 30%;
  color: white;
  -webkit-text-stroke-width: 3px;
	-webkit-text-stroke-color: black;
}
.resultMbti h3 {
  font-size: 24px;
  /* color: rgb(78, 77, 77); */
  color: white;
}
.resultMbti > p {
  font-size: 23px;
  font-weight: 700;
}
.resultFigure {
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  column-gap: 4vh;
  padding: 3%;
}
.resultFigure {
  /* position: relative;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 30vh; */
}
.resultImgBox { 
  position: relative;
  top: 20px;
  left: -20px;
  width: 100%;
  height: 30vh;
}

.hoverAction1,
.hoverAction2 {
  position: absolute;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
}
.resultImgBox h2 {
  width: 43%;
  top: 275px;
  /* left: 90px; */
}
.resultFigure p {
  position: absolute;
  width: 27%;
  right: 365px;
  line-height: 30px; 
  font-weight: 600;
  /* padding: 2%; */
  top: 274px;
  /* position: absolute; */ 
  /* right: 18px; */
  /* width: 50%; */
}
.resultImgBox img {
  width: 40%;
  border: 7px solid #5f4114;
  box-shadow: 10px 10px 10px black;
  /* transition: .6s; */
}
.resultImgBox h2 {
  font-size: 30px;
}

.resultImgBox:hover {
  cursor: pointer;
  /* transform: .4s; */
}
.hoverAction2 {
  display: none;
}
.resultImgBox:hover .hoverAction1{
  display: none;
}
.resultImgBox:hover .hoverAction2{
  display: block;
}
.hoverImg {
  /* display: none; */
}
.resultImgBox:hover .hoverAction1{
  /* display: none; */
}
.resultImgBox:hover .hoverAction2{
  /* display: block; */
}
/* .resultImgBox:hover .resultImgBox2{
  display: block;
} */
.matchSection {
  display: flex;
  padding-top: 20%;
  justify-content: space-around;
}
.match:first-child {
  background-color: rgb(237, 193, 193);
  padding: 3%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  align-items: center;
  box-shadow: 10px 10px 10px black;
}
.match:last-child {
  background-color: #317ea4;
  padding: 2%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5vh;
  align-items: center;
  box-shadow: 10px 10px 10px black;
}
.match > h2 {
  font-size: 20px;
  font-weight: 800;
}
.match > h3 {
  text-transform: uppercase;
  font-size: 19px;
}
.match > p {
  font-size: 19px;
}
.resultBtnSection {
  padding: 3% 0;
  display: flex;
  column-gap: 4vw;
}

</style>