import { Observable, from } from 'rxjs';
import { PluginFunction } from 'vue';
import _Vue from 'vue';

interface HttpService {
  get<T>(url: string, options: ResponseInit): Observable<T>;
  post<T>(url: string, body: { [key: string]: any }): Observable<T>;
  patch<T>(): Observable<T>;
  put<T>(): Observable<T>;
  delete<T>(): Observable<T>;
}

const HttpServiceImpl: HttpService = {
  get<T>(url: string = '', options: ResponseInit): Observable<T> {
    const defaultOpts = {
      method: 'GET'
    };
    const promise: Promise<T> = new Promise((resolve, reject) => {
      fetch(url, Object.assign(defaultOpts, options))
        .then(response => {
          if (response.ok) {
            response.json().then(json => resolve(json as T));
          } else {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
        })
        .catch(err => reject(err));
    });
    return from(promise);
  },

  post<T>(url: string = '', body: { [key: string]: any }): Observable<T> {
    const promise: Promise<T> = new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            response.json().then(json => resolve(json as T));
          } else {
            throw new Error(`${response.status} - ${response.statusText}`);
          }
        })
        .catch(err => reject(err));
    });
    return from(promise);
  },

  patch<T>(): Observable<T> {
    throw new Error('Not implemented yet!');
  },

  put<T>(): Observable<T> {
    throw new Error('Not implemented yet!');
  },

  delete<T>(): Observable<T> {
    throw new Error('Not implemented yet!');
  }
};

const HttpServicePlugin: PluginFunction<any> = (
  Vue: typeof _Vue,
  options: any
): void => {
  Vue.prototype.$http = HttpServiceImpl;
};

export { HttpServiceImpl, HttpService };
export default HttpServicePlugin;
