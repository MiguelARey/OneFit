<template>
  <div class="mainView" v-if="page === 0">
    <HeaderPage />
    <About />
    <!-- intro page -->
    <main>
      <h1>One piece MBTI</h1>
      <h2>who has the same MBTI in One Piece?</h2>
      <Button text="Start test" :clickEvent="startEvent" />
    </main>
    <Main />
    <FooterPage />
  </div>
  <div class="mainView" v-else-if="page < 13">
    <!-- quiz page -->
    <main class="mainQuestion">
      <Question />
    </main>
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page;
    },
  },
  methods: {
    startEvent() {
      this.$store.commit("SET_PAGE", 1);
    },
  },
};
</script>
<style scoped>
.mainView {
  display: flex;
  flex-direction: column;
}
.mainQuestion {
  width: 100%;
  height: 100vh;
}
</style>
