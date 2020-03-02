<template>
  <div id="app" class="container bg-green-300">
    <RouterView />
  </div>
</template>

<script>
import { Component, Prop, Vue } from "vue-property-decorator";
import RouterView from "@/views/RouterView";
import NavHeader from "@/components/NavHeader";

@Component({
  components: {
    NavHeader
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
