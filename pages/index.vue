<template>
  <div class="mainView" v-if="page === 0">
    <HeaderPage />
    <About />
    <!-- intro page -->
    <main class="cont">
      <h1>One piece MBTI</h1>
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

.cont{
    height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid grey;
    background:linear-gradient(180deg,whitesmoke ,#FFD0D0); 
    flex-direction: column;
}

.cont > h1{
    padding-bottom: 4vh;
    text-transform: uppercase;
    color: #164B60;
}
</style>
