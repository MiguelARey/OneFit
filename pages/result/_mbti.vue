<template>
  <main v-if="isLoading" class="loading-spinner"></main>
  <main v-else class="resultMain">
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
          <img
            class="hoverAction1"
            :src="result[mbti].img1"
            :alt="result[mbti].title1"
          />
          <h2 class="hoverAction1">{{ result[mbti].title1 }}</h2>
          <img
            class="hoverAction2"
            :src="result[mbti].img2"
            :alt="result[mbti].title2"
          />
          <h2 class="hoverAction2">{{ result[mbti].title2 }}</h2>
        </article>
        <p>{{ result[mbti].description }}</p>
      </figure>
      <section class="matchSection">
        <figure class="match">
          <h2>Perfect Match</h2>
          <img :src="result[mbti].matchImg1" :alt="result[mbti].match1" />
          <h3>{{ result[mbti].match1 }}</h3>
          <p>{{ result[mbti].matchtitle1 }}</p>
        </figure>
        <figure class="match">
          <h2>Worst Match</h2>
          <img :src="result[mbti].matchImg2" :alt="result[mbti].match2" />
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
      isLoading: true,
      mbti: null,
      result: {
        // intj: {
        //   img: "/intj.png",
        //   title: "",
        //   description: ``,
        // },
        esfj: {
          img1: "/e/esfj.jpeg",
          img2: "/e/esfj1.png",
          title1: "Brook",
          title2: "Koala",
          subMbti: "Consul",
          summary:
            "Extraordinarily caring, social and popular people, always eager to help",
          description:
            "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
          match1: "isfp",
          match2: "istp",
          matchImg1: "/i/isfp.png",
          matchImg2: "/i/istp.jpeg",
          matchtitle1: "Perona",
          matchtitle2: "Roronoa Zoro",
        },
      },
    };
  },
  created() {
    // this.mbti = this.$route.params.mbti;
    this.mbti = "esfj";

    // exception
    if (this.result[this.$route.params.mbti] === undefined) {
      this.$router.push({ name: "index" });
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    resetPage() {
      this.$store.dispatch("clickResetButton");
      this.$router.push({ name: "index" });
    },
    copyLink() {},
  },
};
</script>
<style>
.loading-spinner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 50vh;
  font-size: 24px;
  color: #333;
  position: relative;
  background-image: url("../../static/luffyFace.jpeg");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 10vw;
  margin-top: 10vh;
}

.loading-spinner::after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #333;
  border-top-color: transparent;
  animation: loading-spinner-animation 1s linear infinite;
  position: absolute;
  bottom: -50px;
  right: 47%;
  transform: translateX(50%);
}

@keyframes loading-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.resultMain {
  padding: 2%;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
  background-image: url("../../static/resultpage2.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  /* opacity: 0.5; */
}
.resultSection {
  background-image: url("../../static/poster.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 11% 89% 13% 87% / 96% 6% 94% 4%;
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
.resultImgBox:hover .hoverAction1 {
  display: none;
}
.resultImgBox:hover .hoverAction2 {
  display: block;
}
.hoverImg {
  /* display: none; */
}
.resultImgBox:hover .hoverAction1 {
  /* display: none; */
}
.resultImgBox:hover .hoverAction2 {
  /* display: block; */
}
/* .resultImgBox:hover .resultImgBox2{
  display: block;
} */
.matchSection {
  display: flex;
  padding-top: 17%;
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
