<template>
  <div>
    <Logo />
    <Login @login-click="login($event)" />
  </div>
</template>

<script>
import Login from "@/components/Login";
import Logo from "@/components/Logo";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    Login,
    Logo
  }
})
export default class Home extends Vue {
  login(eventBody) {
    fetch("http://localhost:5850/auth/login", {
      method: "POST",
      body: JSON.stringify(eventBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          res.json().then(resJson => {
            // eslint-disable-next-line
            console.log(resJson);
          });
        }
      })
      .catch(err => {
        // eslint-disable-next-line
        console.error(err);
      });
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
