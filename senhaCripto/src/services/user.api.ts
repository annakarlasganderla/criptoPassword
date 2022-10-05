import { LoginTypes } from "../pages/Login/login.types";
import { Api } from "./api";

export default class UserApi extends Api {
  constructor() {
    super();
    this.url = "http://localhost:8080";
  }

  private handleError(error: any){
    return Promise.reject(error.response)
  }

  public async _login<T>(user: LoginTypes): Promise<T> {
    try {
      return (await this.axiosClient.post(`${this.url}/auth/login`, user)).data;
    } catch (error: any) {
      return this.handleError(error);
    }
  }
}