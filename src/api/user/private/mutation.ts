import { useMutation } from '@tanstack/react-query';

import createPreRegistration from './feature';
import { CreatePreRegistrationRequest } from './type';

export function usePreRegistration() {
  return useMutation({
    mutationFn: (request: CreatePreRegistrationRequest) => createPreRegistration(request),
  });
}
