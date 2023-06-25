<template>
  <a :class="[styleType]" @click.prevent="clickEvent">{{ text }}</a>
</template>
<script>
export default {
  props: {
    clickEvent: {
      type: Function,
    },
    text: {
      type: String,
      default: "",
    },
    styleType: {
      type: String,
      default: "pink",
    },
  },
};
</script>
<style lang="scss"></style>
