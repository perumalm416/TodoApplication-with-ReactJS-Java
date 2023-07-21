import axios from "axios";
export const AuthInterceptor = (loginInput) => {
  console.log(loginInput);
  let encodedAuth =
    "Basic " + window.btoa(loginInput.username + ":" + loginInput.password);
  // let loginInput = {
  //   username: "perumal",
  //   password: "perumal",
  // };
  // let encodedAuth =
  //   "Basic " + window.btoa(loginInput.username + ":" + loginInput.password);

  axios.interceptors.request.use(
    (config) => {
      console.log("Request interceptor config : ", encodedAuth);
      config.headers.Authorization = encodedAuth;
      config.headers["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      console.log("Request interceptor Error");
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    (config) => {
      console.log("Response interceptor Config");
      return config;
    },
    (error) => {
      console.log("Response interceptor Error");
      return Promise.reject(error);
    }
  );
};
