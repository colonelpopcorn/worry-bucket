import Vue, { VueConstructor } from 'vue';
import { HttpService } from '@/lib/http.service';

declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: HttpService;
  }

  interface VueConstructor<V extends Vue> {
    $http: HttpService;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $http?: HttpService;
  }
}
