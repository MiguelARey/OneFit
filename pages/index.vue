<template>
  <div>
    <HeaderPage/>
    <About/>
    <!-- intro page -->
    <main v-if="page === 0">
      <h1>One piece MBTI</h1>
      <h2>who has a same MBTI in One piece?</h2>
      <Button text="Start test" :clickEvent="startEvent" />
    </main>
    <!-- quiz page -->
    <main v-else-if="page < 5">
      <Question />
    </main>
    <Main/>
    <FooterPage/> 
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

