<template>
  <main>
    <img :src="result[mbti].img" :alt="result[mbti].title" />
    <h1>{{ result[mbti].title }}</h1>
    <p v-html="result[mbti].description"></p>
    <Button text="Try again!" :clickEvent="resetPage" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      mbti: null,
      result: {
        esfj: {
          img: "/esfj.jpeg",
          title: "chopa",
          description: `hi`,
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
  },
  methods: {
    resetPage() {
      this.$store.dispatch("clickResetButton");
      this.$router.push({ name: "index" });
    },
  },
};
</script>
<style></style>
