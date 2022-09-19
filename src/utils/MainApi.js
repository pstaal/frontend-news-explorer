class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
    this._section = null;
  }

  _handleResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  }

  addUser(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    }).then((res) => this._handleResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((res) => this._handleResponse(res));
  }

  verifyJWT(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => this._handleResponse(res));
  }

  getArticles() {
    return fetch(`${this._baseUrl}/articles`, {
      method: "GET",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => this._handleResponse(res));
  }

  addArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        keyword,
        title,
        text,
        date,
        source,
        link,
        image,
      }),
    }).then((res) => this._handleResponse(res));
  }

  deleteArticle(id) {
    return fetch(`${this._baseUrl}/articles/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then((res) => this._handleResponse(res));
  }

  //   getInitialUser(token) {
  //         return fetch(`${this._baseUrl}/users/me`, {
  //           headers: { ...this._headers,
  //             authorization: `Bearer ${token}`,
  //         }})
  //         .then(res => this._handleResponse(res));
  //   }

  //   addCart({title, link}, token){
  //     return fetch(`${this._baseUrl}/cards`, {
  //       method: "POST",
  //       headers: { ...this._headers,
  //         authorization: `Bearer ${token}`,
  //     },
  //       body: JSON.stringify({
  //         name: title,
  //         link
  //       })
  //     })
  //     .then(res => this._handleResponse(res));
  //  }

  //  deleteCard(id, token) {
  //   return fetch(`${this._baseUrl}/cards/${id}`, {
  //     method: "DELETE",
  //     headers: { ...this._headers,
  //       authorization: `Bearer ${token}`,
  //     }
  //   })
  //   .then(res => this._handleResponse(res));
  //  }

  //  toggleLike(id, isLiked, token) {
  //     return fetch(`${this._baseUrl}/cards/${id}/likes`, {
  //       method: isLiked ? "DELETE" : "PUT",
  //       headers:  { ...this._headers,
  //         authorization: `Bearer ${token}`,
  //       }
  //     })
  //     .then(res => this._handleResponse(res));
  //  }

  //  changePicture({avatar}, token){
  //   return fetch(`${this._baseUrl}/users/me/avatar`, {
  //       method: "PATCH",
  //       headers: { ...this._headers,
  //         authorization: `Bearer ${token}`,
  //       },
  //       body: JSON.stringify({
  //         avatar
  //       })
  //     })
  //     .then(res => this._handleResponse(res));
  //   }

  //   setNewUser({userName, userJob}, token) {
  //     return fetch(`${this._baseUrl}/users/me`, {
  //         method: "PATCH",
  //         headers: { ...this._headers,
  //           authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({
  //           name: userName,
  //           about: userJob
  //         })
  //         })
  //         .then(res => this._handleResponse(res));
  //   }
}

//initalize mainApi instance
const mainApi = new MainApi({
  baseUrl: "https://api.nieuws.students.nomoredomainssbs.ru",
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
