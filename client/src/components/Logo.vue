<template>
  <h2 class="text-4xl text-blue-400 font-extrabold pb-4">WorryBucket</h2>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
export default class Logo extends Vue {}
</script>

<style scoped>
h2 {
  animation: fadeIn 1.5s;
}

/* The typing effect */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
