import AxiosService from "./AxiosService";

const axios = new AxiosService();

export default class UserService {
  baseUrl = "http://localhost:5000/";

  userRegistration = (data) => {
    return axios.postMethod(`${this.baseUrl}register`, data);
  };
  userLogin = (data) => {
    return axios.postMethod(`${this.baseUrl}login`, data);
  };
}
