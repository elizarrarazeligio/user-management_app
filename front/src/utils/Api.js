class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  checkresponse() {
    return fetch(`${this._baseUrl}/users`, { headers: this._headers }).then(
      (res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Error: ${res.status}`);
      }
    );
  }
}

const api = new Api({
  baseUrl: "http://localhost:3005",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
