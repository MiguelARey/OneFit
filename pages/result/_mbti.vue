<template>
  <main v-if="isLoading" class="loading-spinner">
    <h3>Analyzing...</h3>
    <p></p>
  </main>
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
        infj: {
          img1: "/i/infj.png",
          img2: "/i/infj1.png",
          title1: "Monkey D.Dragon",
          title2: "Vinsmoke Reiju",
          subMbti: "Advocate",
          summary: "Quiet and mystical, yet very inspiring and tireless idealists",
          description: "Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.",
          match1: "ENFP",
          match2: "ISFP",
          matchImg1: "/e/enfp.png",
          matchImg2: "/i/isfp.png",
          matchtitle1: "Marshall D. Teach ",
          matchtitle2: "Perona",
        },
        infp: {
          img1: "/i/infp.png",
          img2: "/i/infp1.jpeg",
          title1: "Shirahoshi",
          title2: "Donquixote Rosinante",
          subMbti: "Mediator",
          summary: "Poetic, kind and altruistic people, always eager to help a good cause",
          description: "Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened.",
          match1: "ENFJ",
          match2: "ISFP",
          matchImg1: "/e/enfj.png",
          matchImg2: "/i/isfp.png",
          matchtitle1: "Vinsmoke Sanji",
          matchtitle2: "Perona",
        },
        enfj: {
          img1: "/e/enfj.png",
          img2: "/e/enfj1.jpeg",
          title1: "Vinsmoke Sanji",
          title2: "Shanks",
          subMbti: "Protagonist",
          summary: "Charismatic and inspiring leaders, able to mesmerize their listeners",
          description: "Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.",
          match1: "INFP",
          match2: "ESFP",
          matchImg1: "/i/infp.png",
          matchImg2: "/e/esfp.png",
          matchtitle1: "Shirahoshi",
          matchtitle2: "Monkey D.Luffy",
        },
        enfp: {
          img1: "/e/enfp.png",
          img2: "/e/enfp1.jpeg",
          title1: "Marshall D. Teach",
          title2: "Uta",
          subMbti: "Campaigner",
          summary: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile",
          description: "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.",
          match1: "INFJ",
          match2: "ISFP",
          matchImg1: "/i/infj.png",
          matchImg2: "/i/isfp.png",
          matchtitle1: "Monkey D.Dragon",
          matchtitle2: "Perona",
        },
        istj: {
          img1: "/i/istj.jpeg",
          img2: "/i/istj1.png",
          title1: "Smoker",
          title2: "Jimbei",
          subMbti: "Campaigner",
          summary: "Enthusiastic, creative and sociable free spirits, who can always find a reason to smile",
          description: "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.",
          match1: "ESFP",
          match2: "INFP",
          matchImg1: "/e/esfp.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Monkey D.Luffy",
          matchtitle2: "Shirahoshi",
        },
        isfj: {
          img1: "/i/isfj.png",
          img2: "/i/isfj1.png",
          title1: "Tony Tony Chopper",
          title2: "Koby",
          subMbti: "Defender",
          summary: "Very dedicated and warm protectors, always ready to defend their loved ones",
          description: "Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.",
          match1: "ESFP",
          match2: "INFP",
          matchImg1: "/e/esfp.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Monkey D.Luffy",
          matchtitle2: "Shirahoshi",
        },
        estj: {
          img1: "/e/estj.png",
          img2: "/e/estj1.png",
          title1: "Nami",
          title2: "Buggy",
          subMbti: "Executive",
          summary: "Excellent administrators, unsurpassed at managing things – or people",
          description: "Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans.",
          match1: "ISFP",
          match2: "INFP",
          matchImg1: "/e/esfp.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Monkey D.Luffy",
          matchtitle2: "Shirahoshi",
        },
        esfj: {
          img1: "/e/esfj.jpeg",
          img2: "/e/esfj1.png",
          title1: "Brook",
          title2: "Koala",
          subMbti: "Consul",
          summary: "Extraordinarily caring, social and popular people, always eager to help",
          description: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
          match1: "isfp",
          match2: "infp",
          matchImg1: "/i/isfp.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Perona",
          matchtitle2: "Shirahoshi",
        },
        istp: {
          img1: "/i/istp.jpeg",
          img2: "/i/istp1.png",
          title1: "Roronoa Zoro",
          title2: "Dracule Mihawk",
          subMbti: "Virtuoso",
          summary: "Bold and practical experimenters, masters of all kinds of tools",
          description: "Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency.",
          match1: "esfj",
          match2: "infp",
          matchImg1: "/e/esfj.jpeg",
          matchImg2: "/i/infp.png",
          matchtitle1: "Brook",
          matchtitle2: "Shirahoshi",
        },
        isfp: {
          img1: "/i/isfp.png",
          img2: "/i/isfp1.png",
          title1: "Perona",
          title2: "Kikunojo",
          subMbti: "Adventurer",
          summary: "Flexible and charming artists, always ready to explore and experience something new",
          description: "Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others.",
          match1: "enfj",
          match2: "infp",
          matchImg1: "/e/esfj.jpeg",
          matchImg2: "/i/infp.png",
          matchtitle1: "Vinsmoke Sanji",
          matchtitle2: "Shirahoshi",
        },
        estp: {
          img1: "/e/estp.jpeg",
          img2: "/e/estp1.jpeg",
          title1: "Portgas D. Ace",
          title2: "Franky",
          subMbti: "Entrepreneur",
          summary: "Smart, energetic and very perceptive people, who truly enjoy living on the edge",
          description: "Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them - they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others. Enjoy material comforts and style. Learn best through doing.",
          match1: "isfj",
          match2: "infp",
          matchImg1: "/i/isfj.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Tony Tony Chopper",
          matchtitle2: "Shirahoshi",
        },
        esfp: {
          img1: "/e/esfp.png",
          img2: "/e/esfp1.png",
          title1: "Monkey D. Luffy",
          title2: "Charlotte Linlin",
          subMbti: "Entertainer",
          summary: "Spontaneous, energetic and enthusiastic people – life is never boring around them",
          description: "Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people.",
          match1: "isfj",
          match2: "infp",
          matchImg1: "/i/isfj.png",
          matchImg2: "/i/infp.png",
          matchtitle1: "Tony Tony Chopper",
          matchtitle2: "Shirahoshi",
        },
      },
    };
  },
  created() {
    this.mbti = this.$route.params.mbti;
    // this.mbti = "esfp";

    // exception
    if (this.result[this.$route.params.mbti] === undefined) {
      this.$router.push({ name: "index" });
    }
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
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
  column-gap: 4vw;
}
</style>
