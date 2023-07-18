import axios, { AxiosInstance, AxiosResponse } from 'axios';

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
}

class AuthHttpClient extends HttpClient {
  constructor() {
    super();
    this.httpClient.interceptors.request.use(
      (config) => {
        const accessToken = localStorage.getItem('access_token');

        this.httpClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

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
