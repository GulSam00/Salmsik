import { axiosInstance } from 'lib/axios';

import { FetchRegisterRequest, FetchRegisterResponse } from './type';

async function fetchRegister(request: FetchRegisterRequest) {
  const { data } = await axiosInstance.post<FetchRegisterResponse>('user/register', request);

  return data;
}

export default fetchRegister;
