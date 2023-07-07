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
</template>

<script>
export default {
  
}
</script>
