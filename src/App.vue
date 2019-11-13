<template>
  <div id="app">
    <Hero msg="Find other riders" title="Welcome to Your Moto life App"/>
  </div>
</template>

<script>
import Hero from './components/Hero.vue'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>
