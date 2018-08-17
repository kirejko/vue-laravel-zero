/**
 * Laravel routes on JS.
 *
 * @url https://github.com/aaronlord/laroute#javascript-documentation
 */
export interface Laroute {
  /**
   * Generate a URL for a given controller action.
   *
   * @param action     - The action to route to.
   * @param parameters - Optional. key:value object literal of route parameters.
   */
  action: (action: string, parameters?: object) => string;

  /**
   * Generate a URL for a given named route.
   *
   * @param name       - The name of the route to route to.
   * @param parameters - Optional. key:value object literal of route parameters.
   */
  route: (name: string, parameters?: object) => string;

  /**
   * Generate a fully qualified URL to the given path.
   *
   * @param name       - The name of the route to route to.
   * @param parameters - Optional. value array of route parameters.
   */
  url: (name: string, parameters?: Array<string>) => string;

  /**
   * Generate a html link to the given url.
   *
   * @param url        - A relative url.
   * @param title      - Optional. The anchor text to display.
   * @param attributes - Optional. key:value object literal of additional html attributes.
   */
  link_to: (url: string, title?: string, attributes?: object) => string;

  /**
   * Generate a html link to the given route.
   *
   * @param name       - The name of the route to route to.
   * @param title      - Optional. The anchor text to display.
   * @param parameters - Optional. key:value object literal of route parameters.
   * @param attributes - Optional. key:value object literal of additional html attributes.
   */
  link_to_route: (name: string, title?: string, parameters?: object, attributes?: object) => string;

  /**
   * Generate a html link to the given action.
   *
   * @param action     - The action to route to.
   * @param title      - Optional. The anchor text to display
   * @param parameters - Optional. key:value object literal of route parameters.
   * @param attributes - Optional. key:value object literal of additional html attributes.
   */
  link_to_action: (action: string, title?: string, parameters?: object, attributes?: object) => string;
}
