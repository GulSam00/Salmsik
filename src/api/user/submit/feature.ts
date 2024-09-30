import { axiosInstance } from 'lib/axios';

import { FetchQuestionsRequest, FetchQuestionsResponse } from './type';

async function FetchQuestions(request: FetchQuestionsRequest) {
  const { data } = await axiosInstance.post<FetchQuestionsResponse>('user/submit-grading', request);
  return data;
}

export default FetchQuestions;
