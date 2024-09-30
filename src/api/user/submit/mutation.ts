import { useMutation } from '@tanstack/react-query';

import FetchQuestions from './feature';
import { FetchQuestionsRequest, FetchQuestionsResponse, ApiError } from './type';

export default function useSubmitQuestion() {
  return useMutation<FetchQuestionsResponse, ApiError, FetchQuestionsRequest>({
    mutationFn: (request: FetchQuestionsRequest) => FetchQuestions(request),
  });
}
