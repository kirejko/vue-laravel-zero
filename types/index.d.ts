import _Vue, {PluginFunction} from 'vue';
import _Echo from 'laravel-echo';
import {SweetAlert} from 'sweetalert/typings/core';
import {Laroute} from './laroute';
import {AxiosInstance} from "axios";

declare module "vue/types/vue" {
  export interface Vue {
    /** Vue instance that used as event bus. */
    $vbus: _Vue;

    /**
     * Laravel Echo
     *
     * @url https://laravel.com/docs/5.6/broadcasting#installing-laravel-echo
     */
    $echo: _Echo;

    /**
     * SweetAlert
     *
     * @url https://github.com/t4t5/sweetalert
     */
    $swal: SweetAlert;

    /**
     * Toastr
     *
     * @url https://github.com/CodeSeven/toastr
     */
    $toastr: Toastr;

    /**
     * Laravel routes on JS.
     *
     * @url https://github.com/aaronlord/laroute
     */
    $laroute: Laroute;

    /**
     * Axios http client.
     *
     * @url https://github.com/axios/axios
     */
    $axios: AxiosInstance;
  }
}

export {
  LaravelZeroOptions,
  EchoOptions
} from './options';

export {SweetAlert};
export {Laroute} from './laroute';

export default PluginFunction;
