class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users`, { headers: this._headers }).then(
      (res) => {
        if (res.ok) return res.json();
        return Promise.reject(`Error: ${res.status}`);
      }
    );
  }

  registerUser(data) {
    return fetch(`${this._baseUrl}/register`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
      }),
    }).then((res) => {
      if (res.ok) return res.json();
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

const api = new Api({
  baseUrl: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
