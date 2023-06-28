<template>
  <div class="question">
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
      if (this.page === this.$store.state.questions.length) {
        const result = this.$store.state.result;
        this.$router.push({
          name: "result-mbti",
          params: {
            mbti: `${result.e > result.i ? "e" : "i"}${
              result.s > result.n ? "s" : "n"
            }${result.f > result.t ? "f" : "t"}${
              result.p > result.j ? "p" : "j"
            }`,
          },
        });
      }
    },
  },
};
</script>
<style>
.question {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url("static/ship.jpeg");
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
  justify-content: center;
  width: 100%;
  height: 100%;
  row-gap: 3vh;
  font-size: 20px;
  background-color: rgba(233, 238, 240, 0.6);
}
</style>
