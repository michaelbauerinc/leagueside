import axios, { AxiosResponse } from "axios";

export class HttpService {
  private static BE_DOMAIN = "localhost:3000";
  private static prefix = "http://";
  private static axios = axios.create({
    // .. where we make our configurations
    baseURL: `${HttpService.prefix}${HttpService.BE_DOMAIN}`,
  });
  static async post(endpoint: string, data: Record<string, string>) {
    try {
      let response: AxiosResponse = await this.axios.post(endpoint, data);
      return response;
    } catch (err) {
      return err;
    }
  }
  static async get(endpoint: string, data: Record<string, string> | Record<string, boolean>) {
    try {
      let response: AxiosResponse = await this.axios.get(endpoint, { params: data });
      return response;
    } catch (err) {
      return err;
    }
  }

  static async patch(endpoint: string, data: Record<string, string> | Record<string, boolean>) {
    try {
      let response: AxiosResponse = await this.axios.patch(endpoint, data);
      return response;
    } catch (err) {
      return err;
    }
  }
}

export default HttpService;
