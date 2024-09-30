import { useQuizStats } from '@/api/question';
import StatCard from '@/pages/ResultPage/components/QuizReview/StatCard';

interface Props {
  userId: number;
}

function QuizReview({ userId }: Props) {
  const { data } = useQuizStats({ userId });

  return (
    <div className='flex flex-col gap-[8px]'>
      {data?.stats.map(stat => <StatCard key={stat.question.id} {...stat} />)}
    </div>
  );
}

export default QuizReview;
