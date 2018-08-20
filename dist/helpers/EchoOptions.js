import Pusher from "pusher-js";
import Echo from 'laravel-echo';
export default class {
    constructor() {
        this.broadcaster = 'pusher';
        this.key = process.env.PUSHER_APP_KEY;
        this.cluster = process.env.PUSHER_CLUSTER;
        this.host = process.env.PUSHER_HOST;
        this.encrypted = true;
        this.disableStats = true;
    }
    init(Vue) {
        window['Pusher'] = Pusher;
        Vue.prototype.$echo = new Echo(this);
    }
}
//# sourceMappingURL=EchoOptions.js.map