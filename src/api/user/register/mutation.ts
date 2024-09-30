import { useMutation } from '@tanstack/react-query';

import fetchRegister from './feature';
import { FetchRegisterRequest, FetchRegisterResponse, ApiError } from './type';

export default function useRegister() {
  return useMutation<FetchRegisterResponse, ApiError, FetchRegisterRequest>({
    mutationFn: (request: FetchRegisterRequest) => fetchRegister(request),
  });
}
