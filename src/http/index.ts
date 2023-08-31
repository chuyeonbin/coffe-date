import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ACCESS_TOKEN } from '../utils/constant';

const BASE_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:8080' : '';

class HttpClient {
  protected httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get<T>(url: string) {
    const response: AxiosResponse<T> = await this.httpClient.get(url);

    return response.data;
  }

  async post<T>(url: string, data?: object) {
    const response: AxiosResponse<T> = await this.httpClient.post(url, data);

    return response.data;
  }

  async patch<T>(url: string, data?: any) {
    const response: AxiosResponse<T> = await this.httpClient.patch(url, data);

    return response.data;
  }

  async delete<T>(url: string, data?: any) {
    const response: AxiosResponse<T> = await this.httpClient.delete(url, data);

    return response.data;
  }
}

class AuthHttpClient extends HttpClient {
  constructor() {
    super();
    this.httpClient.defaults.withCredentials = true;

    this.httpClient.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem(ACCESS_TOKEN);

        if (!accessToken) return config;

        config.headers['Authorization'] = `Bearer ${accessToken}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    this.httpClient.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => Promise.reject(error),
    );
  }
}

const httpClient = new HttpClient();
const authHttpClient = new AuthHttpClient();

export { httpClient, authHttpClient };
