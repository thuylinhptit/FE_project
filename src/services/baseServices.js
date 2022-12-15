import axios from "axios";

class BaseServices {
  baseURL;

  http;

  configHeaders;

  constructor(baseURL, configHeaders) {
    this.http = axios.create({
      baseURL,
    });
    this.baseURL = baseURL;
    this.configHeaders = configHeaders;
    this.http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        if (response) {
          switch (response.status) {
            case 401:
              localStorage.clear();
              window.location.href = "/login";
              return;
            default:
              return;
          }
        }
        return Promise.reject(error);
      }
    );
  }

  setConfigHeaders() {
    const token = localStorage.getItem("token") || "";
    const config = {
      headers: {
        "content-type": "application/json",

      },
      ...this.configHeaders,
    };
    return config;
  }

  _fetch(url, configHeaders) {
    return this.http.get(url, { ...configHeaders });
  }

  _post(url, data, configHeaders) {
    return this.http.post(url, data, {
      ...configHeaders,
    });
  }

  get(url, configHeaders) {
    return this.http.get(url, { ...this.setConfigHeaders(), ...configHeaders });
  }

  post(url, data, configHeaders) {
    return this.http.post(url, data, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }

  put(url, data, configHeaders) {
    return this.http.put(url, data, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }

  patch(url, data, configHeaders) {
    return this.http.patch(url, data, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }

  delete(url, configHeaders) {
    return this.http.delete(url, {
      ...this.setConfigHeaders(),
      ...configHeaders,
    });
  }
}

export default BaseServices;
