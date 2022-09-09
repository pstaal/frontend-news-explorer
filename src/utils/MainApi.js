class MainApi {
    constructor({ baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
        this._section = null;
      }

      _handleResponse(res) {
        return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
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

};

//initalize mainApi instance
const mainApi = new MainApi({
  baseUrl: process.env.NODE_ENV === "production" ? 'https://api.petertje.students.nomoredomainssbs.ru/' : 'http://localhost:3000',
  headers: {
    "Content-Type": "application/json"
  }
}); 

export default mainApi;