import { axiosInstance } from '@/lib/axios';
import { getQuestionResponse } from './type';

async function getQuestion() {
  const { data } = await axiosInstance.get<getQuestionResponse>('question');
  return data;
}

export default getQuestion;
