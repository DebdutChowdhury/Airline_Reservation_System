import axios from "axios";

export default class AxiosService {
  postMethod = (url, data, isHeaderRequired = false) => {
    return axios.post(url, data, isHeaderRequired);
  };
}
