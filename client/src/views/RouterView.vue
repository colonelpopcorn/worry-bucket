<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import NavHeader from "@/components/NavHeader.vue";

@Component({
  components: {
    NavHeader
  }
})
export default class RouterView extends Vue {}
</script>
