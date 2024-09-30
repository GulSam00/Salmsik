import { useQuery } from '@tanstack/react-query';
import getQuestion from './feature';

export default function useQuestion() {
  return useQuery({
    queryKey: ['question'],
    queryFn: () => getQuestion(),
    select: data => {
      // const questionArray = data?.questionArray.slice(0, 10) ?? [];
      const questionArray = data?.questionArray ?? [];
      const questionEmojis = data?.emojis ?? {};
      // questions이 null일 경우의 핸들링
      return { questionArray, questionEmojis };
    },
  });
}
