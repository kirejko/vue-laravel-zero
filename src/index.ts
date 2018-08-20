import _Vue, {PluginFunction} from 'vue';
import toastr from 'toastr';
import swal from 'sweetalert';
import LaravelZeroOptions from './helpers/LaravelZeroOptions';

const VueLaravelZero: PluginFunction<LaravelZeroOptions> =
  (Vue: typeof _Vue, options?: LaravelZeroOptions): void => {
    const pluginOptions = LaravelZeroOptions.mergeOptions(options);

    // VueBus
    const busName = pluginOptions.busName;
    Vue.prototype.$vbus = window[busName] = busName in window
      ? window[busName]
      : new _Vue({});

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

    // Laravel Echo
    pluginOptions.echo.init(Vue);

    // Axios
    pluginOptions.axios.init(Vue, larouteName);
  };

export default VueLaravelZero;
