import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HttpServicePlugin, { HttpService } from '@/lib/http.service';
import './assets/styles/index.css';

Vue.config.productionTip = false;
Vue.use(HttpServicePlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
