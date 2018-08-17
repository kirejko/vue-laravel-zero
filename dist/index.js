import { merge } from 'lodash';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import toastr from 'toastr';
import swal from 'sweetalert';
export class EchoOptions {
    constructor() {
        this.broadcaster = 'pusher';
        this.key = process.env.PUSHER_APP_KEY;
        this.cluster = process.env.PUSHER_CLUSTER;
        this.host = process.env.PUSHER_HOST;
        this.encrypted = true;
        this.disableStats = true;
    }
}
export class LaravelZeroOptions {
    constructor() {
        this.echo = new EchoOptions();
        this.toastr = {};
        this.laroute = 'Router';
        this.busName = 'VueBus';
    }
    static mergeOptions(options) {
        return merge(new this(), options);
    }
}
const VueLaravelZero = (Vue, options) => {
    const pluginOptions = LaravelZeroOptions.mergeOptions(options);
    const busName = pluginOptions.busName;
    Vue.prototype.$vbus = window[busName] = busName in window
        ? window[busName]
        : new Vue({});
    window['Pusher'] = Pusher;
    Vue.prototype.$echo = new Echo(pluginOptions.echo);
    toastr.options = pluginOptions.toastr;
    Vue.prototype.$toastr = toastr;
    Vue.prototype.$swal = swal;
    const larouteName = pluginOptions.laroute;
    if (larouteName in window) {
        Vue.prototype.$laroute = window[larouteName];
    }
};
export default VueLaravelZero;
//# sourceMappingURL=index.js.map