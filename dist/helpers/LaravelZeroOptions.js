import EchoOptions from "./EchoOptions";
import AxiosOptions from "./AxiosOptions";
import { merge } from "lodash";
export default class {
    constructor() {
        this.echo = new EchoOptions();
        this.axios = new AxiosOptions();
        this.toastr = {};
        this.laroute = 'Router';
        this.busName = 'VueBus';
    }
    static mergeOptions(options) {
        return merge(new this(), options);
    }
}
//# sourceMappingURL=LaravelZeroOptions.js.map