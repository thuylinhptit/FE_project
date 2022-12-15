import { FaThumbsDown } from 'react-icons/fa';
import { baseConfig } from "../config";
import BaseServices from "./baseServices";

export class AuthServices extends BaseServices {
    constructor() {
        super(baseConfig.apiServer);
    }

    login(params) {
        return this.post(`/login`, params);
    }

    register(params) {
        return this.post(`/staff/`, params);
    }

    choose_member(params) {
        return this.post(`/choose_member`, params);
    }

    shift(params) {
        return this.post(`/shift/`, params)
    }

}

export default new AuthServices();
