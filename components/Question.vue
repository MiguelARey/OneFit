<template>
  <div v-if="page < 5" class="question-morning">
    <div class="quest">
      <Progress />
      <h1>{{ question }}</h1>
      <Button
        v-for="(item, index) in answers"
        styleType="blue"
        :key="index"
        :text="item.text"
        :clickEvent="
          () => {
            clickButton(item);
          }
        "
      />
    </div>
  </div>
  <div v-else-if="page < 9" class="question-middle">
    <div class="quest">
      <Progress />
      <h1>{{ question }}</h1>
      <Button
        v-for="(item, index) in answers"
        styleType="blue"
        :key="index"
        :text="item.text"
        :clickEvent="
          () => {
            clickButton(item);
          }
        "
      />
    </div>
  </div>
  <div v-else-if="page < 13" class="question-night">
    <div class="quest">
      <Progress />
      <h1>{{ question }}</h1>
      <Button
        v-for="(item, index) in answers"
        styleType="blue"
        :key="index"
        :text="item.text"
        :clickEvent="
          () => {
            clickButton(item);
          }
        "
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    questions() {
      return this.$store.state.questions;
    },
    page() {
      return this.$store.state.page;
    },
    question() {
      return this.$store.state.questions[this.$store.state.page - 1].q;
    },
    answers() {
      return this.$store.state.questions[this.$store.state.page - 1].a;
    },
  },
  methods: {
    clickButton(item) {
      this.$store.dispatch("clickButton", item.value);
      //when the page is last
      if (this.page === this.$store.state.questions.length + 1) {
        const result = this.$store.state.result;
        this.$router.push({
          name: "result-mbti",
          params: {
            mbti: `${Number(result.e) > Number(result.i) ? "e" : "i"}${
              Number(result.s) > Number(result.n) ? "s" : "n"
            }${Number(result.f) > Number(result.t) ? "f" : "t"}${
              Number(result.p) > Number(result.j) ? "p" : "j"
            }`,
            percents: {
              e:
                (Number(result.e) / (Number(result.e) + Number(result.i))) *
                100,
              i:
                (Number(result.i) / (Number(result.e) + Number(result.i))) *
                100,
              s:
                (Number(result.s) / (Number(result.s) + Number(result.n))) *
                100,
              n:
                (Number(result.n) / (Number(result.s) + Number(result.n))) *
                100,
              f:
                (Number(result.f) / (Number(result.f) + Number(result.t))) *
                100,
              t:
                (Number(result.t) / (Number(result.f) + Number(result.t))) *
                100,
              p:
                (Number(result.p) / (Number(result.p) + Number(result.j))) *
                100,
              j:
                (Number(result.j) / (Number(result.p) + Number(result.j))) *
                100,
            },
          },
        });
      }
    },
  },
};
</script>
<style>
.question-morning {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("static/questionImg/ship.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 3vh;
  color: rgb(23, 75, 96);
  font-size: 40px;
  font-weight: 800;
}
.question-middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("static/questionImg/middle.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 3vh;
  color: rgb(23, 75, 96);
  font-size: 40px;
  font-weight: 800;
}
.question-night {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("static/questionImg/dark.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  row-gap: 3vh;
  color: rgb(23, 75, 96);
  font-size: 40px;
  font-weight: 800;
}
.quest {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  row-gap: 5vh;
  font-size: 20px;
  background-color: rgba(233, 238, 240, 0.6);
}
</style>
