<template>
  <div>
    <NavHeader />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";
import NavHeader from "@/components/NavHeader";

@Component({
  components: {
    NavHeader
  }
})
export default class RouterView extends Vue {}
</script>
