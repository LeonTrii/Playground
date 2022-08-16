<template>
  <h1>Hangman</h1>
  <Guessing/>
  <div class="flex">
    <h2>The computer will select a random word</h2>
  </div>
  <div id="man">
    <div id="stand">
      <div id='hook'></div> <!--  |  -->
      <div id="corner"></div> <!--  /  -->
      <div id="hookLine"></div> <!--  -  -->
      <div id="standLine"></div> <!--  |  -->
      <div id="bottomStand"></div> <!--  _  -->
      <!--This is the man-->
      <div id="head"></div>
      <div id="body"></div>
      <div id="leftArm"></div>
      <div id="rightArm"></div>
      <div id="leftLeg"></div>
      <div id="rightLeg"></div>
    </div>
  </div>
</template>

<script>

import Guessing from './components/Guessing.vue';

export default {
  name: 'App',
  components: {
    Guessing
  }
}
</script>

<style lang="scss">
$blue: #29435c;

.flex {
  display: flex;
  justify-content: center;
}

html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: $blue;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fafafa;
  margin-top: 60px;
}

h1 {
  font-size: 4em;
  margin-top: -35px;
  user-select: none;
}

#man {
  width: 400px;
  height: 400px;
  margin-left: 200px;
}

#bottomStand {
  width: 150px;
  height: 5px;
  left: 290px;
  top: 572px;
}

#standLine {
  width: 400px;
  height: 5px;
  transform: rotate(90deg);
  top: 373px;
  left: 165px;
}

#hookLine {
  width: 180px;
  height: 5px;
  left: 364px;
  top: 175px;
}

#corner {
  transform: rotate(45deg);
  width: 5px;
  height: 120px;
  left: 405px;
  top: 160px;
}

#hook {
  width: 5px;
  height: 70px;
  left: 540px;
  top: 175px;
}

#hook, #hookLine, #corner, #standLine, #bottomStand, #body, #leftArm, #rightArm, #leftLeg, #rightLeg {
  background: #fff;
  position: absolute;
}

#head {
  position: absolute;
  width: 70px;
  height: 70px; 
  border: 5px solid #fff;
  border-radius: 90px;
  left: 503.5px;
  top: 242px;
}

#body {
  height: 120px;
  width: 5px;
  left: 540px;
  top: 320px;
}

#leftArm {
  height: 80px;
  width: 5px;
  transform: rotate(-50deg);
  left: 512px;
  top: 305px;
}

#rightArm {
  height: 80px;
  width: 5px;
  transform: rotate(50deg);
  left: 569px;
  top: 305px;
}

#leftLeg {
  height: 110px;
  width: 5px;
  transform: rotate(30deg);
  left: 512px;
  top: 430px;
}

#rightLeg {
  height: 110px;
  width: 5px;
  transform: rotate(-30deg);
  left: 568px;
  top: 430px;
}

h2 {
  position: absolute;
  margin-top: -40px;
  user-select: none;
}

#head, #body, #leftArm, #rightArm, #leftLeg, #rightLeg {
  display: none;
}
</style>
