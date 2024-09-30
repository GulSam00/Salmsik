import { useQuery } from '@tanstack/react-query';
import fetchCorrectCount from './feature';

interface Props {
  userId: number;
}

interface ChartData extends Record<string, unknown> {
  category: string;
  나: number;
  평균: number;
}

export function useCorrectCount({ userId }: Props) {
  return useQuery({
    queryKey: [{ scope: 'correctCount', userId }],
    queryFn: () => fetchCorrectCount({ userId }),
    select: ({ userCorrectCountEachCategory: user, averageCorrectCountEachCategory: average, emojis }) => {
      const strong: string[] = [];
      const weak: string[] = [];
      const categories = user.map(({ category }) => category);

      const chartData: ChartData[] = categories.map(category => ({
        category,
        나: user.find(result => result.category === category)?.count ?? 0,
        평균: average.find(result => result.category === category)?.count ?? 0,
      }));

      for (const { category, 나, 평균 } of chartData) {
        if (나 > 평균 + 0.5) strong.push(category);
        if (나 < 평균 - 0.5) weak.push(category);
      }

      return { chartData, strong, weak, emojis };
    },
    enabled: !!userId,
  });
}
