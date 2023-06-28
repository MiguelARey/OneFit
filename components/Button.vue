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
<style>
<<<<<<< HEAD

=======
a {
  color: blue;
  cursor: pointer;
}
>>>>>>> c9db3a3c105b72f10148566966771abf83242e62
</style>
