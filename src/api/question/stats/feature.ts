import { axiosInstance } from '@/lib/axios';
import { FetchQuizStatsParams, FetchQuizStatsResponse } from '@/api/question/stats/type';

async function fetchQuizStats({ userId }: FetchQuizStatsParams) {
  const { data } = await axiosInstance.post<FetchQuizStatsResponse>('question/stats', { userId });
  return data;
}

export default fetchQuizStats;
