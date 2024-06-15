<script setup>
import TheNav from '../src/components/TheNav.vue'
</script>

<template>
  <header>
    <TheNav />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
a,
a:visited {
  color: #2c3e50;
}
</style>
