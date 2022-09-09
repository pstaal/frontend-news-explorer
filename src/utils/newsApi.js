class NewsApi {
    constructor({ baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._section = null;
      }

      _handleResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
      }

      search(params) {
        const url = new URL(this._baseUrl);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return fetch(url).then(res => this._handleResponse(res)); 
      }

};

//initalize newsApi instance
const newsApi = new NewsApi({
  baseUrl: 'https://newsapi.org/v2/everything',
  headers: {
    "Content-Type": "application/json"
  }
}); 

export default newsApi;