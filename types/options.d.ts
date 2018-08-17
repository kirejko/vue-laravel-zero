export interface LaravelZeroOptions {
  echo?: EchoOptions;
  toastr?: ToastrOptions;
  laroute?: string;
  busName?: string;
}

export interface EchoOptions {
  broadcaster: string;
  key: string;
  cluster: string;
  host: string;
  encrypted: boolean;
  disableStats: boolean;
}
