import { baseConfig } from "../config";
import BaseServices from "./baseServices";

export class UserServices extends BaseServices {
  constructor() {
    super(baseConfig.apiServer);
  }

  getInfoMe() {
    return this.get(`/users/me`);
  }

  getListMember() {
    return this.get(`/staff`)
  }
}

export default new UserServices();
