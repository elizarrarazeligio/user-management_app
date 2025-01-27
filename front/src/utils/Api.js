// class Api {
//   constructor({ baseUrl, headers }) {
//     this._baseUrl = baseUrl;
//     this._headers = headers;
//   }

//   // checkresponse() {
//   //   return fetch(`${this._baseUrl}/`).then((res) => {
//   //     return res.json();
//   //   });
//   // }
// }

// const api = new Api({
//   baseUrl: "http://localhost:3000/user-management_app",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

const api = async () => {
  const response = await fetch("http://localhost:3005/", {
    mode: "cors",
  });
  const data = response.json();
  return data;
};

export default api;
