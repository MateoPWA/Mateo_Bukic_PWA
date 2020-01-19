<template>
  <div id="app">
      <router-view/>
  </div>
</template>

<script>


export default {
  name: 'app',
}
</script>
<style>
* {
  box-sizing: border-box;
}

nav ul {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

nav li {
  display: block;
}

nav a {
  padding: 20px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>