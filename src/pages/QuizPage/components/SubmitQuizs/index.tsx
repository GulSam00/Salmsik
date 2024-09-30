import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizContent, SkeletonContent } from '..';
import { useQuestion, useSubmitQuestion } from 'api';
import { answerObj } from '@/api/user/submit/type';
import { ApiError } from 'api/user/submit/type';

import { useToastContext } from 'lib/toast/useToastContext';

export default function SubmitQuizs() {
  const [quizAnswers, setQuizAnswers] = useState<answerObj[]>([]);

  const navigate = useNavigate();
  const { mutate: score } = useSubmitQuestion();
  const { data, isLoading } = useQuestion();
  const { setToastContent } = useToastContext();

  const questions = data?.questionArray ?? [];
  const questionEmojis = data?.questionEmojis ?? {};
  const maxQuizIndex = questions?.length;

  const handleSubmitQuiz = (answer: answerObj) => {
    const newQuizAnswers = [...quizAnswers, answer];
    if (newQuizAnswers.length === maxQuizIndex) {
      const userId = Number(localStorage.getItem('userId')) ?? 0;
      score(
        {
          userId,
          answers: newQuizAnswers,
        },
        {
          onSuccess: ({ percentile }) => {
            localStorage.clear();
            navigate('/result', {
              state: {
                userId,
                percent: percentile,
              },
            });
          },
          onError: (error: ApiError) => {
            // 응답이 없을 경우를 가정해야 하나?
            // const errorMessage = error.response.data ?? '알 수 없는 에러;
            const errorMessage = error.response.data;
            setToastContent(errorMessage.details);
            localStorage.clear();
            navigate('/');
          },
        },
      );
    } else {
      setQuizAnswers(newQuizAnswers);
      localStorage.setItem('quizAnswers', JSON.stringify(newQuizAnswers));
    }
  };

  useEffect(() => {
    const localQuizAnswers = localStorage.getItem('quizAnswers');
    if (localQuizAnswers) {
      const answerArr = JSON.parse(localQuizAnswers);
      setQuizAnswers(answerArr);
    }
  }, []);

  return (
    <>
      {isLoading ? (
        <SkeletonContent />
      ) : (
        <QuizContent
          handleSubmitQuiz={handleSubmitQuiz}
          curQuiz={questions[quizAnswers.length]}
          maxQuizIndex={maxQuizIndex}
          curQuizIndex={quizAnswers.length + 1}
          questionEmojis={questionEmojis}
        />
      )}
    </>
  );
}
