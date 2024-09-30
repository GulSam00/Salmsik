import { axiosInstance } from '@/lib/axios';
import { FetchCorrectCountRequest, FetchCorrectCountResponse } from './type';

async function fetchCorrectCount(request: FetchCorrectCountRequest) {
  const { data } = await axiosInstance.post<FetchCorrectCountResponse>('user/correctCount', request);
  return data;
}

export default fetchCorrectCount;
