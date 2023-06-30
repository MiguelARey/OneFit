<template>
  <div>
    <HeaderPage />
    <!-- intro page -->
    <main class="parents-question" v-if="page === 0">
      <h1>One piece MBTI</h1>
      <h2>who has a same MBTI in One piece?</h2>
      <Button text="Start test" :clickEvent="startEvent" />
    </main>
    <!-- quiz page -->
    <main class="parents-question" v-else-if="page < 13">
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
<style>
.parents-question {
  width: 100%;
  height: 89.75vh;
  overflow: hidden;
}
</style>
