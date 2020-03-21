<template>
  <div class="w-full max-w-xs">
    <form class="bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label
          class="block text-green-300 text-sm font-bold mb-2"
          for="username"
          >Username</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          v-model="username"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-green-300 text-sm font-bold mb-2"
          for="password"
          >Password</label
        >
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
          v-model="password"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center">
        <button
          class="bg-green-400 hover:bg-green-300 text-gray-300 font-semibold hover:text-white py-2 w-full rounded mb-4"
          type="button"
          @click="$emit('login-click', { username, password })"
        >
          Sign In
        </button>
      </div>
      <div class="flex items-center">
        <a
          class="inline-block align-baseline font-bold text-sm text-green-300 hover:text-white w-full"
          href="#"
          >Forgot Password?</a
        >
      </div>
    </form>
    <p class="text-center text-blue-500 text-xs">
      &copy;2020 Shamrocks Web, LLC. All rights reserved.
    </p>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class Login extends Vue {
  data() {
    return {
      username: '',
      password: ''
    };
  }
}
</script>
