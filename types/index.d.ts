import _Vue from 'vue';
import _Echo from 'laravel-echo';
import {SweetAlert} from 'sweetalert/typings/core';
import {Laroute} from './laroute';

declare module "vue/types/vue" {
  export interface Vue {
    $vbus: _Vue;
    $echo: _Echo;
    $swal: SweetAlert;
    $toastr: Toastr;
    $laroute: Laroute;
  }
}

export {
  LaravelZeroOptions,
  EchoOptions
} from './options';

export {SweetAlert};
export {Laroute} from './laroute';
