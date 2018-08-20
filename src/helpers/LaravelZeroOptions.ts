import {LaravelZeroOptions} from "../../types";
import EchoOptions from "./EchoOptions";
import AxiosOptions from "./AxiosOptions";
import {merge} from "lodash";

export default class implements LaravelZeroOptions {
  echo?: EchoOptions = new EchoOptions();
  axios?: AxiosOptions = new AxiosOptions();
  toastr?: ToastrOptions = {};
  laroute?: string = 'Router';
  busName?: string = 'VueBus';

  static mergeOptions<T>(options: T): T {
    return <T>merge(new this(), options);
  }
}
