import Route from './Route';

/**
 * An a Router like express using router.get or something like that.
 */
export default class Router {
  /**
     *
     * @param {String?} baseUrl the base url router, to especify
     * which the base of the routes.
     *
     * base_url + route_url
     */
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.routes = [];
  }

  /**
     *
     * @param {String} method GET, PUT, POST or other HTTP verb
     * @param {String} url a sub url from the baseUrl
     * @param {Object} request
     */
  _createRoute(method, url, request) {
    return new Route(method, url, request);
  }

  get(url, request) {
    this.routes.push(this._createRoute('GET', url, request));
  }

  post(url, request) {
    this.routes.push(this._createRoute('POST', url, request));
  }

  delete(url, request) {
    this.routes.push(this._createRoute('DELETE', url, request));
  }

  put(url, request) {
    this.routes.push(this._createRoute('PUT', url, request));
  }

  custom(method, url, request) {
    this.routes.push(this._createRoute(method, url, request));
  }
}
