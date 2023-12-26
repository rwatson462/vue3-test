<script setup>
import NavBar from "./components/Nav/NavBar.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

</script>

<template>
  <Header />
  <NavBar />
  <main class="flex-grow">
    <router-view />
  </main>
  <Footer />
</template>
