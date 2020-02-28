<template>
  <div class="w-full max-w-xs">
    <form class="bg-blue-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-green-300 text-sm font-bold mb-2" for="username">Username</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />
      </div>
      <div class="mb-6">
        <label class="block text-green-300 text-sm font-bold mb-2" for="password">Password</label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Password"
        />
        <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
      </div>
      <div class="flex items-center">
        <div class="flex-col">
          <button
            class="bg-transparent hover:bg-green-300 text-green-300 font-semibold hover:text-white py-2 w-full border border-green-300 hover:border-transparent rounded mb-4"
            type="button"
          >Sign In</button>
        </div>
        <div class="flex-col">
          <a
            class="inline-block align-baseline font-bold text-sm text-green-300 hover:text-white"
            href="#"
          >Forgot Password?</a>
        </div>
      </div>
    </form>
    <p class="text-center text-blue-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
  </div>
</template>
