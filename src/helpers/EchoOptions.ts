import _Vue from 'vue';
import {EchoOptions} from "../../types";
import Pusher from "pusher-js";
import Echo from 'laravel-echo';

export default class implements EchoOptions {
  broadcaster: string = 'pusher';
  key: string = process.env.PUSHER_APP_KEY;
  cluster: string = process.env.PUSHER_CLUSTER;
  host: string = process.env.PUSHER_HOST;
  encrypted: boolean = true;
  disableStats: boolean = true;

  init(Vue: typeof _Vue) {
    window['Pusher'] = Pusher;
    Vue.prototype.$echo = new Echo(this);
  }
}
