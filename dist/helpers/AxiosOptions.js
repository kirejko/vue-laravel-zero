import axios from "axios";
export default class {
    constructor() {
        this.config = {
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'X-Timezone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
        };
        this.unAuthRedirect = 'auth.login';
        const token = document.head.querySelector('meta[name="csrf-token"]');
        if (token) {
            this.config.headers['X-CSRF-TOKEN'] = token.content;
        }
        else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
        }
    }
    init(Vue, larouteName) {
        let axiosInstance;
        if (this.instance) {
            axiosInstance = this.instance;
        }
        else {
            axiosInstance = axios.create(this.config);
            if (this.interceptors) {
                if (Array.isArray(this.interceptors.request)) {
                    this.interceptors.request
                        .forEach((callbacks) => {
                        axiosInstance.interceptors.request.use(callbacks.onFulfilled, callbacks.onRejected);
                    });
                }
                if (Array.isArray(this.interceptors.response)) {
                    this.interceptors.request
                        .forEach((callbacks) => {
                        axiosInstance.interceptors.response.use(callbacks.onFulfilled, callbacks.onRejected);
                    });
                }
            }
            if (this.unAuthRedirect) {
                axiosInstance.interceptors.response.use(null, error => {
                    if (401 === error.response.status) {
                        window.location.href = window[larouteName].route(this.unAuthRedirect);
                    }
                    return Promise.reject(error);
                });
            }
        }
        Vue.prototype.$http = axiosInstance;
    }
}
//# sourceMappingURL=AxiosOptions.js.map