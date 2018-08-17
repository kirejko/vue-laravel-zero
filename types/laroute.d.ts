export interface Laroute {
  action: (action: string, parameters?: object) => string;
  route: (name: string, parameters?: object) => string;
  url: (name: string, parameters?: Array<string>) => string;
  link_to: (url: string, title?: string, attributes?: object) => string;
  link_to_route: (name: string, title?: string, parameters?: object, attributes?: object) => string;
  link_to_action: (action: string, title?: string, parameters?: object, attributes?: object) => string;
}
