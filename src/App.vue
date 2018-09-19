<template>
  <div id="app">
     <header id="header-cv">
          <img id="logosogeti" src="./assets/images/logosogeti.jpg">
           <h2>Welcome to my VueApp</h2>
     </header>   
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link to="/mycv">My CV</router-link>
    <router-link to="/contact">Contact me</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  @import "./assets/styles/mystyle.css";
</style>
