import { FetchQuizStatsParams } from '@/api/question/stats/type';
import { useQuery } from '@tanstack/react-query';
import fetchQuizStats from '@/api/question/stats/feature';

function useQuizStats({ userId }: FetchQuizStatsParams) {
  return useQuery({
    queryKey: ['stats', userId],
    queryFn: () => fetchQuizStats({ userId }),
    enabled: !!userId,
  });
}

export default useQuizStats;
