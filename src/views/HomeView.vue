<script setup>
import TheWelcome from "../components/TheWelcome.vue";
let count = ref(0);
let fn = () => {
  count.value++;
};
</script>

<template>
  <main>
    {{ count }}
    <button @click="fn">fn</button>
    <czx></czx>
  </main>
</template>
