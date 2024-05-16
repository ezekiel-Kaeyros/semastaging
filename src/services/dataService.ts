import { getUserCookies } from '@/cookies/cookies';
import axios from 'axios';

const API_URL =
  'https://6r10kf27nk.execute-api.eu-central-1.amazonaws.com/prod/product/100609346426084';
// const API_URL = 'https://k8wmg6ma27.execute-api.eu-central-1.amazonaws.com'
const user = getUserCookies();
console.log('user', user);

export default class DataService {
  client: any;
  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      timeout: 30000,
      timeoutErrorMessage: 'Time out!',
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  post = (url: string, data: any) => {
    return this.client.post(url, data);
  };

  get = (url: string) => {
    return this.client.get(url);
  };

  put = (url: string, data: any) => {
    return this.client.put(url, data);
  };

  delete = (url: string) => {
    return this.client.delete(url);
  };
}
