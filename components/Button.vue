<template>
  <a href="http://localhost:3000/mbti" id="buttonStyle" :class="[styleType]" @click.prevent="clickEvent">{{
    text
  }}</a>
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
#buttonStyle {
  width: 40%;
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  line-height: 1.6;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  padding: 1.5em 2em;
  background: linear-gradient(45deg, #4fc0d0, #ffe9e9);
  border: 2px solid #4fc0d0;
  border-radius: 1.5em;
  transform-style: preserve-3d;
  user-select: none;
  transition: transform 0.2s ease-out, background 0.2s ease-out;
  text-align: center;
}

#buttonStyle::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(45deg, #4fc0d0, #ffe9e9);
  border-radius: inherit;
  /* box-shadow: 0 0 0 2px #999999, 0 0.75em 0 0 #aeaeae; */
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
}

#buttonStyle:hover {
  background: linear-gradient(45deg, #ffe9e9, #4fc0d0);
  transform: translateY(0.25em);
}

#buttonStyle.blue {
  display: block;
  margin-bottom: 29px;
  background: linear-gradient(45deg, #c6edf3, #a3eaf3);
  padding: 1.8em;
  border-color: #4fc0d0;
}

#buttonStyle.blue::before {
  /* box-shadow: 0 0 0 2px #8599b1, 0 0.75em 0 0 #e2efff; */
  background: linear-gradient(45deg, #4fc0d0, #a3eaf3);
}

#buttonStyle.blue:hover {
  background: linear-gradient(45deg, #a3eaf3, #4fc0d0);
  transform: translateY(0.25em);
}
</style>
