import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import toastr from 'toastr';
import swal from 'sweetalert';
import VueBus from './utils/vbus';

const VueLaravelZero = {
  install(Vue, options = {}) {
    this.installVueBus(Vue);
    this.installSwal(Vue);
    this.installEcho(Vue, options);
    this.installToastr(Vue, options);
    this.installLaroute(Vue, options);
  },

  installVueBus(Vue) {
    Vue.prototype.$vbus = window.VueBus = VueBus;
  },

  installEcho(Vue, { echo: echoOptions = { install: true } }) {
    if (! echoOptions.install) return;

    window.Pusher = Pusher;

    const options = Object.assign({
      broadcaster: 'pusher',
      key: process.env.PUSHER_APP_KEY,
      cluster: process.env.PUSHER_CLUSTER,
      host: process.env.PUSHER_HOST,
      encrypted: true,
      disableStats: true
    }, echoOptions);

    Vue.prototype.$echo = new Echo(options);
  },

  installToastr(Vue, { toastr: toastrOptions = {} }) {
    Object.assign(toastr.options, toastrOptions);
    Vue.prototype.$toastr = toastr;
  },

  installSwal(Vue) {
    Vue.prototype.$swal = swal;
  },

  installLaroute(Vue, { laroute = 'Router'} ) {
    if (laroute in window) {
      Vue.prototype.$laroute = window[laroute];
    }
  }
};

export default VueLaravelZero;
