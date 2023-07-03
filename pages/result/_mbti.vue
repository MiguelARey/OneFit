<template>
  <main v-if="isLoading" class="loading-spinner">
    <h3>Analyzing...</h3>
    <p></p>
  </main>
  <main v-else class="resultMain">
    <section class="resultSection">
      <article class="resultMbti">
        <article>
          <h1>{{ result.type }}</h1>
          <h3>{{ result.subMbti }}</h3>
        </article>
        <p>{{ result.summary }}</p>
      </article>
      <figure class="resultFigure">
        <article class="resultImgBox">
          <img class="hoverAction1" :src="result.img1" :alt="result.title1" />
          <h2 class="hoverAction1">{{ result.title1 }}</h2>
          <img class="hoverAction2" :src="result.img2" :alt="result.title2" />
          <h2 class="hoverAction2">{{ result.title2 }}</h2>
        </article>
        <p>{{ result.description }}</p>
      </figure>
      <section class="matchSection">
        <figure class="match">
          <h2>Perfect Match</h2>
          <img :src="result.matchImg1" :alt="result.match1" />
          <h3>{{ result.match1 }}</h3>
          <p>{{ result.matchtitle1 }}</p>
        </figure>
        <figure class="match">
          <h2>Worst Match</h2>
          <img :src="result.matchImg2" :alt="result.match2" />
          <h3>{{ result.match2 }}</h3>
          <p>{{ result.matchtitle2 }}</p>
        </figure>
      </section>
    </section>
    <section class="resultBtnSection">
      <article>
        <Button text="Try again" :clickEvent="resetPage" />
        <Button
          text="Save the result"
          :clickEvent="() => downLoadImg('.resultSection')"
        />
      </article>
      <Button text="All MBTI" styleType="blue" />
    </section>
  </main>
</template>

<script>
import axios from "axios";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      isLoading: true,
      result: {
        type: "",
        img1: "",
        img2: "",
        title1: "",
        title2: "",
        subMbti: "",
        summary: "",
        description: "",
        match1: "",
        match2: "",
        matchImg1: "",
        matchImg2: "",
        matchtitle1: "",
        matchtitle2: "",
      },
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/result/${this.$route.params.mbti}`
      );
      this.results = { ...data };
      // console.log(this.results);
      this.result = this.results.result[0];
      // console.log(this.result.type);
    } catch (error) {
      console.error(error);
      this.$router.push({ name: "index" });
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  methods: {
    resetPage() {
      this.$store.dispatch("clickResetButton");
      this.$router.push({ name: "index" });
    },
    // downLoadImg(div) {
    //   div = div[0];
    //   html2canvas(div).then(function (canvas) {
    //     var myImage = canvas.toDataURL();
    //     downloadURI(myImage, "result.png");
    //   });
    // },
    downLoadImg(divSelector) {
      const div = document.querySelector(divSelector);
      if (!div) {
        console.error("Invalid element");
        return;
      }
      html2canvas(div).then((canvas) => {
        var myImage = canvas.toDataURL();
        this.downloadURI(myImage, "result.png");
      });
    },

    downloadURI(uri, name) {
      var link = document.createElement("a");
      link.download = name;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
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
  background-image: url("../../static/loading.png");
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: 10vw;
  margin-top: 10vh;
}

.loading-spinner > p::after {
  content: "";
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 4px solid #333;
  border-top-color: transparent;
  animation: loading-spinner-animation 1s linear infinite;
  position: absolute;
  bottom: -75px;
  right: 40%;
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

.loading-spinner > h3 {
  padding-top: 45%;
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
  flex-direction: column;
  align-items: center;
  row-gap: 4vh;
  width: 50%;
}
.resultBtnSection > article {
  display: flex;
  flex-direction: row;
  column-gap: 4vw;
  width: 100%;
}
</style>
