import { post } from "@/utils/request";

export default class Base {

  public static get baseUri(): string {
    return '/base';
  }

  static async login(username: string, password: string) {
    return post(`${this.baseUri}/login`, {
      username,
      password
    });
  }
}