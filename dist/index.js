import _Vue from 'vue';
import toastr from 'toastr';
import swal from 'sweetalert';
import LaravelZeroOptions from './helpers/LaravelZeroOptions';
const VueLaravelZero = (Vue, options) => {
    const pluginOptions = LaravelZeroOptions.mergeOptions(options);
    const busName = pluginOptions.busName;
    Vue.prototype.$vbus = window[busName] = busName in window
        ? window[busName]
        : new _Vue({});
    toastr.options = pluginOptions.toastr;
    Vue.prototype.$toastr = toastr;
    Vue.prototype.$swal = swal;
    const larouteName = pluginOptions.laroute;
    if (larouteName in window) {
        Vue.prototype.$laroute = window[larouteName];
    }
    pluginOptions.echo.init(Vue);
    pluginOptions.axios.init(Vue, larouteName);
};
export default VueLaravelZero;
//# sourceMappingURL=index.js.map