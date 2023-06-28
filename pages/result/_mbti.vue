<template>
  <main class="resultMain">
    <section class="resultSection">
      <article class="resultMbti">
        <h1>{{ this.$route.params.mbti }}</h1>
        <h3>{{ result[mbti].subMbti }}</h3>
      </article>
      <figure class="resultFigure">
        <img :src="result[mbti].img" :alt="result[mbti].title" />
        <figcaption>
          <h2>{{ result[mbti].title }}</h2>
          <h4>{{ result[mbti].summary }}</h4>
          <p>{{result[mbti].description}}</p>
        </figcaption>
      </figure>
    </section>
    <Button text="Try again!" :clickEvent="resetPage" />
    <Button text="Share the link" :clickEvent="copyLink" />
  </main>
</template>
<script>
export default {
  data() {
    return {
      mbti: null,
      result: {
        intj: {
          img: "/intj.png",
          title: "",
          description: ``,
        },
        esfj: {
          img: "/e/esfj.jpeg",
          title: "Brook",
          subMbti: "Consul",
          summary: "Extraordinarily caring, social and popular people, always eager to help",
          description: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
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
    copyLink(){

    },
  },
};
</script>
<style>

</style>