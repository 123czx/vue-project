<script >
import { showMixins } from "../mixins/show";
export default {
    mixins:[showMixins]
}
</script>

<template>
  <div class="greetings" v-if="show">
    czx1
  </div>
  <button @click="toggleShow">fn</button>
</template>

<style scoped>

</style>
