import _Vue from 'vue';
import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export interface SelfInitOptions {
  init: (VueInstance: typeof _Vue, options?: any) => void
}

export interface LaravelZeroOptions {
  echo?: EchoOptions;
  toastr?: ToastrOptions;
  laroute?: string;
  busName?: string;
}

export interface EchoOptions extends SelfInitOptions {
  broadcaster: string;
  key: string;
  cluster: string;
  host: string;
  encrypted: boolean;
  disableStats: boolean;
}

export type InterceptorCallbacks<T> = {
  onFulfilled?: (value: T) => T | Promise<T>;
  onRejected?: (error: any) => any
}

export interface AxiosOptions extends SelfInitOptions {
  instance?: AxiosInstance;
  config?: AxiosRequestConfig;
  interceptors?: {
    request?: Array<InterceptorCallbacks<AxiosRequestConfig>>;
    response?: Array<InterceptorCallbacks<AxiosResponse>>;
  };
  unAuthRedirect?: string;
}
