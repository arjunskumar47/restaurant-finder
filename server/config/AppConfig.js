/**
 * A generic wrapper to get main configurations based on `process.env.NODE_ENV`
 * Can be modified to use a switch case to return different values based on environment
 * Directly returning a single object as no different environment available for this example implementation
 * @returns {{ZomatoKey: string, apiBase: string}}
 */
const AppConfig = () => {

  return {
    ZomatoKey: '011310d3cbdf9890aeeb51e341c8d2f4',
    GoogleMapsKey: 'AIzaSyCNb8p7HFohRWCy-BdIVtJznWjOHLA7tZs',
    apiBase: 'https://developers.zomato.com/api/v2.1'
  }

};

export default AppConfig();