import { axiosInstance } from 'lib/axios';

import { CreatePreRegistrationRequest, CreatePreRegistrationResponse } from './type';

async function createPreRegistration(request: CreatePreRegistrationRequest) {
  const { data } = await axiosInstance.post<CreatePreRegistrationResponse>('user/private', request);
  return data;
}

export default createPreRegistration;
