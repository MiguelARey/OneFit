<template>
  <div class="progressbar">
    <div class="page">{{ page }} / {{ maxLength }}</div>
    <div class="gauge-container">
      <div class="gauge" :style="{ width: gaugeWidth }"></div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    page() {
      return this.$store.state.page;
    },
    maxLength() {
      return this.$store.state.questions.length;
    },
    gaugeWidth() {
      return `${(this.page / this.maxLength) * 100}%`;
    },
  },
};
</script>

<style scoped>
.progressbar {
  display: flex;
  flex-direction: column;
  row-gap: 3vh;
  width: 30%;
  margin: 20px 0;
}

.page {
  display: flex;
  flex-direction: column;
  font-size: 14px;
}

.gauge-container {
  height: 30px;
  background-color: lightgray;
  border-radius: 10px;
  overflow: hidden;
}

.gauge {
  background-color: cornflowerblue;
  height: 100%;
  transition: width 0.3s ease-out;
}
</style>
