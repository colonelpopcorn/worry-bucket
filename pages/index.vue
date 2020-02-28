<template>
  <div>
    <Logo />
    <Login @login-click="login($event)" />
  </div>
</template>

<script>
import Login from '~/components/Login';
import Logo from '~/components/Logo';
export default {
  components: {
    Login,
    Logo
  },
  methods: {
    login(event) {
      const request = new Request('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(event)
      });
      fetch(request).then(x => console.log(x));
    }
  }
};
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
