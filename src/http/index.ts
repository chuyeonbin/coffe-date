import axios, { AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:8080' : '';

class HttpClient {
  private httpClient: AxiosInstance;

  constructor() {
    this.httpClient = axios.create({
      baseURL: BASE_URL,
    });
  }

  async get<T = any>(url: string) {
    const response: AxiosResponse<T> = await this.httpClient.post(url);

    return response.data;
  }

  async post<T = any>(url: string, data?: object) {
    const response: AxiosResponse<T> = await this.httpClient.post(url, data);

    return response.data;
  }
}

const httpClient = new HttpClient();

export default httpClient;