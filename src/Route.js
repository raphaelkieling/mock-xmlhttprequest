import { normalizeHTTPMethodName } from './Utils';

/**
 * An Route to use on Router, especify the necessary to
 * create a handler on MockXhrServer
 */
export default class Route {
  constructor(method, url, request) {
    this.method = normalizeHTTPMethodName(method);
    this.url = url;
    this.request = request;
  }

  /**
     * Return a resolved url , joining the urls
     *
     * @param {String?} baseUrl the base url from Router
     */
  resolve(baseUrl) {
    if (!baseUrl) {
      return this.url;
    }

    return new URL(this.url, baseUrl).href;
  }
}
