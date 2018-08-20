import _Vue from 'vue';
import {AxiosOptions, InterceptorCallbacks} from "../../types/options";
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export default class implements AxiosOptions {
  instance?: AxiosInstance;
  config: AxiosRequestConfig = {
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
      'X-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
    }
  };
  interceptors?: {
    request?: Array<InterceptorCallbacks<AxiosRequestConfig>>;
    response?: Array<InterceptorCallbacks<AxiosResponse>>;
  };
  unAuthRedirect?: string = 'auth.login';

  constructor() {
    const token: HTMLMetaElement | null = document.head.querySelector('meta[name="csrf-token"]');
    if (token) {
      this.config.headers['X-CSRF-TOKEN'] = token.content;
    } else {
      console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
    }
  }

  init(Vue: typeof _Vue, larouteName: string,) {
    let axiosInstance: AxiosInstance;

    if (this.instance) {
      axiosInstance = this.instance
    } else {
      axiosInstance = axios.create(this.config);

      if (this.interceptors) {
        // Request interceptors
        if (Array.isArray(this.interceptors.request)) {
          this.interceptors.request
            .forEach((callbacks: InterceptorCallbacks<AxiosRequestConfig>) => {
              axiosInstance.interceptors.request.use(callbacks.onFulfilled, callbacks.onRejected);
            });
        }

        // Response interceptors
        if (Array.isArray(this.interceptors.response)) {
          this.interceptors.request
            .forEach((callbacks: InterceptorCallbacks<AxiosResponse>) => {
              axiosInstance.interceptors.response.use(callbacks.onFulfilled, callbacks.onRejected);
            });
        }
      }

      if (this.unAuthRedirect) {
        // Default unauthorized interceptor
        axiosInstance.interceptors.response.use(
          null,
          error => {
            if (401 === error.response.status) {
              window.location.href = window[larouteName].route(this.unAuthRedirect);
            }

            return Promise.reject(error);
          }
        );
      }
    }

    Vue.prototype.$http = axiosInstance;
  }
}
