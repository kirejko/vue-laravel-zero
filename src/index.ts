import _Vue, {PluginFunction} from 'vue';
import {merge} from 'lodash';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import toastr from 'toastr';
import swal from 'sweetalert';
import {
  EchoOptions as EchoOptionsInterface,
  LaravelZeroOptions as LaravelZeroOptionsInterface
} from "../types/options";

export class EchoOptions implements EchoOptionsInterface {
  broadcaster: string = 'pusher';
  key: string = process.env.PUSHER_APP_KEY;
  cluster: string = process.env.PUSHER_CLUSTER;
  host: string = process.env.PUSHER_HOST;
  encrypted: boolean = true;
  disableStats: boolean = true;
}

export class LaravelZeroOptions implements LaravelZeroOptionsInterface {
  echo?: EchoOptions = new EchoOptions();
  toastr?: ToastrOptions = {};
  laroute?: string = 'Router';
  busName?: string = 'VueBus';

  static mergeOptions<T>(options: T): T {
    return <T>merge(new this(), options);
  }
}

const VueLaravelZero: PluginFunction<LaravelZeroOptions> = (Vue: typeof _Vue, options?: LaravelZeroOptions): void => {
  const pluginOptions = LaravelZeroOptions.mergeOptions(options);

  // VueBus
  const busName = pluginOptions.busName;
  Vue.prototype.$vbus = window[busName] = busName in window
    ? window[busName]
    : new Vue({});

  // Laravel Echo
  window['Pusher'] = Pusher;
  Vue.prototype.$echo = new Echo(pluginOptions.echo);

  // Toastr notifications
  toastr.options = pluginOptions.toastr;
  Vue.prototype.$toastr = toastr;

  // Sweet alert
  Vue.prototype.$swal = swal;

  // Laroute
  const larouteName = pluginOptions.laroute;
  if (larouteName in window) {
    Vue.prototype.$laroute = window[larouteName];
  }
};

export default VueLaravelZero;
