import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_PROXY_MODE === 'on' ? '/api' : import.meta.env.VITE_BASE_URL + '/api',
});

export interface ReservedError {
  message: string; // Internal Error, erc...
  details: string; // 에러 메시지
}
