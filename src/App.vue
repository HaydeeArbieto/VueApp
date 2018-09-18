<template>
  <div id="app">
    
    <MyCV/>
  </div>
</template>

<script>
  import MyCV from './components/MyCV'

  export default {
    name: 'App',
    components: {
      MyCV
    }
  }
</script>

<style>
  @import './assets/styles/mystyle.css';
</style>
