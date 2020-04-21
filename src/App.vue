<template>
  <div id="app">
    <div class="app__container">
      <AppLeftContainer/>
      <AppRightContainer/>
    </div>
  </div>
</template>

<script>
import AppLeftContainer from '@/components/AppLeftContainer'
import AppRightContainer from '@/components/AppRightContainer'

export default {
  components: {AppLeftContainer, AppRightContainer}
}
</script>

<style lang="scss">
// @import url(./assets/scss/main.scss);

body, html {
  margin: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.app__container {
  width: 90vw;
  max-width: 1000px;
  height: 70vh;
  max-height: 800px;
  background-color: black;
  display: flex;
  box-shadow: 0 0 3px #0000002e;
}
</style>
