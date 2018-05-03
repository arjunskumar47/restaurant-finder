import axios from 'axios';

class ApiConnection {

  constructor() {

    this.API_BASE = '';
    this.AUTH_TOKEN = '';
    this.REST_METHODS = {
      1: 'GET',
      2: 'POST',
      3: 'PUT',
      4: 'DELETE'
    };

  }

  /**
   * Method to make request to API endpoint and handle response
   * @param {Object} params -
   * @param {String} params.url - The relative URL path
   * @param {Number} params.method - The number key for preferred request method from `this.REST_METHODS`
   * @param {Object} [params.data] - If not GET, the data to be sent to server for POST / PUT
   * @private
   */
  _makeRequest( params ) {

    const requestObject = {
      url: params.url,
      method: this.REST_METHODS[params.method],
      baseURL: this.API_BASE,
      timeout: 45000,
      headers: {
        'user-key': this.AUTH_TOKEN
      }
    };

    if( params.method !== 1 && typeof params.data !== 'undefined' )
      requestObject.data = params.data;

    return axios(requestObject);

  }

  /**
   * The GET method for API calls
   * @param {String} url - The relative URL path
   */
  get( url ) {

    return this._makeRequest({url, method: 1});

  }

  /**
   * The POST method for API calls
   * @param {String} url - The relative URL path
   * @param {Object} data - The data to be sent to the server
   */
  post( url, data ) {

    return this._makeRequest({url, method: 2, data});

  }

  /**
   * The PUT method for API calls
   * @param {String} url - The relative URL path
   * @param {Object} data - The data to be sent to the server
   */
  put( url, data ) {

    return this._makeRequest({url, method: 3, data});

  }

  /**
   * The DELETE method for API calls
   * @param {String} url - The relative URL path
   * @param {Object} data - The data to be sent to the server
   */
  remove( url, data ) {
    return this._makeRequest({url, method: 4, data });
  }

  setConfig(token, url) {

    if( token )
      this.AUTH_TOKEN = token;

    if( url )
      this.API_BASE = url;

  }

  getConfig( key ) {
    return this[key] || false;
  }

}

export default new ApiConnection();