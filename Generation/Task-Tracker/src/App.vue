<template>
  <div id='container'>
    <h1>Task Tracker</h1>
    <input v-model="newToDo">
    <button id='add' @click="onClick()">Add Task</button> 
    <div id="toDo">
      <ul>
        <li v-for="t in toDo">
          {{ t['text'] }}
          <button @click="remove(t)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      newToDo: '',
      toDo: [
        {text: 'Cook dinner'},
        {text: 'Clean up room'},
        {text: 'Learn Vue'}
      ]
    }
  },
  methods: {
    onClick() {
      if (this.newToDo == '') {
        alert('Add a task.');
      } else {
        this.toDo.push({text: this.newToDo});
        this.newToDo = '';
      }
    },
    remove(todo) {
      this.toDo = this.toDo.filter((task) => task != todo)
    }
    },
    
}
</script>

<style>
html {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background-color: aliceblue;
}

#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 500px;
  height: 500px;
  margin-top: 50px;
  overflow: auto;
  background: #fff;
  box-shadow: 5px 5px 30px 10px rgba(0, 0, 0, 0.1);
}

#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
}

li {
  text-align: left;
  padding-left: 0;
  font-size: 1.6em;
  list-style-type: circle;
}

h1 {
  font-size: 3em;
}

input {
  height: 30px;
  font-size: 1.2em;
}

#add {
  height: 50px;
  width: 140px;
  margin-left: 20px;
  font-size: 1.2em;
  border-radius: 30px;
  box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.1);
  background: #fff;
  border: 1px solid #fff;
}

button:hover, #add:hover {
  background: aliceblue;
  border-color: aliceblue;
}

button {
  height: 30px;
  transition: .4s;
}

</style>


