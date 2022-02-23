<template>
 <header>
   <Header/>
 </header>
  <main>
    <div id="grid">
      <div id='box0'></div>
      <div id='box1'></div>
      <div id='box2'></div>
      <div id='box3'></div>
      <div id='box4'></div>
      <div id='box5'></div>
      <div id='box6'></div>
      <div id='box7'></div>
      <div id='box8'></div>
      <div id='box9'></div>
      <div id='box10'></div>
      <div id='box11'></div>
      <div id='box12'></div>
      <div id='box13'></div>
      <div id='box14'></div>
      <div id='box15'></div>
      <div id='box16'></div>
      <div id='box17'></div>
      <div id='box18'></div>
      <div id='box19'></div>
      <div id='box20'></div>
      <div id='box21'></div>
      <div id='box22'></div>
      <div id='box23'></div>
      <div id='box24'></div>
      <div id='box25'></div>
      <div id='box26'></div>
      <div id='box27'></div>
      <div id='box28'></div>
      <div id='box29'></div>
  </div>
  </main>
  <Keyboard/>
</template>

<script>
// Words taken from https://www.nytimes.com/games/wordle/main.4d41d2be.js
import Header from './components/Header';
import Keyboard from './components/Keyboard.vue';
export default {
  name: 'App',
  components: {
    Header,
    Keyboard
  },
}

</script>

<style lang="scss">
/**
Colors for the tiles (and for the keyboard)
Green: 
Green: #6aaa64
Yellow: #c9b458
Grey: #3a3a3c
*/
html {
    margin: 0;
    padding: 0;
    background: rgb(17, 17, 17);
    overflow-x: hidden;
    height: calc(100% + 100px);
}

#grid {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-transform: uppercase;
    user-select: none;
    margin-top: -7px;
    width: 345px;
    height: 404px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
}

#grid div {
    margin: 2px;
    border: 2px solid rgb(60, 60, 60);
    color: #fff;
    font-size: 2.5em;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .4s;
    background-color: rgb(17, 17, 17);
}

main {
    width: 98.5vw;
    display: flex;
    justify-content: center;
}

@media (max-width: 500px) {
  #grid {
    width: 285px;
    height: 364px;
  }

  #grid div {
    font-size: 2em;
  }
}

@media (max-width: 375px) {
  #grid {
    width: 245px;
    height: 324px;
    margin-top: 10px;
  }

  #grid div {
    font-size: 1.5em;
  }
}
</style>
