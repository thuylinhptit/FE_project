import { baseConfig } from "../config";
import BaseServices from "./baseServices";

export class AuthServices extends BaseServices {
  constructor() {
    super(baseConfig.authServer);
  }

  login(params) {
    return this.post(`/login`, params);
  }

  register(params) {
    return this.post(`/register`, params);
  }
}

export default new AuthServices();
