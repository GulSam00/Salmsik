import { useState } from 'react';

import { useTimer } from 'hooks';
import { DynamicButton } from 'components';
import { QuizProgress, QuizTimeCounter, QuizQuestions } from '..';

import { Question } from 'api/question/type';
import { answerObj } from '@/api/user/submit/type';
import { QuestionEmojis } from 'api/question/type';

import Lottie from 'lottie-react';
import loading_ani from 'assets/quiz_loding_ani.json';

interface Props {
  handleSubmitQuiz: (answer: answerObj) => void;
  curQuiz: Question;
  maxQuizIndex: number;
  curQuizIndex: number;
  questionEmojis: QuestionEmojis;
}

export default function QuizContent({ handleSubmitQuiz, curQuiz, maxQuizIndex, curQuizIndex, questionEmojis }: Props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [selectAnswer, setSelectAnswer] = useState<number>(-1);

  const handleClickAnswer = (index: number) => {
    setSelectAnswer(index);
    setIsDisabled(false);
  };

  const handleClickSubmit = () => {
    const answer = {
      id: curQuiz.id,
      answer: curQuiz.choices[selectAnswer - 1] ?? '모름',
    };
    handleSubmitQuiz(answer);
    handleNextQuiz();
    setIsDisabled(true);
    setSelectAnswer(-1);
  };

  const skipNextQuiz = () => {
    const answer = {
      id: curQuiz.id,
      answer: selectAnswer === -1 ? '모름' : curQuiz.choices[selectAnswer - 1],
    };
    handleSubmitQuiz(answer);
    handleNextQuiz();
    setIsDisabled(true);
    setSelectAnswer(-1);
  };

  const { timer, handleNextQuiz } = useTimer({ initialTime: curQuiz.timeLimit, onTimeOut: skipNextQuiz });

  return (
    // 여기만 마진bottom 0으로 수정
    <div className='m-[16px] mb-[0px] flex h-screen flex-col justify-between gap-[16px]'>
      <QuizProgress maxQuizIndex={maxQuizIndex} curQuizIndex={curQuizIndex} />

      <div className='flex flex-1 flex-col gap-[20px] rounded-[8px] bg-grey-0 p-[16px]'>
        <div className='flex items-center justify-between'>
          <div className='flex text-grey-1000'>
            <div className='text-body14M'>{questionEmojis[curQuiz.category]}</div>
            <div className='text-body14R'>{curQuiz.category} 문제</div>
          </div>
          <QuizTimeCounter timer={timer} />
        </div>

        <div className='flex-1 text-left text-body16M'>{curQuiz.content}</div>

        <div className='flex h-[212px] flex-1'>
          <QuizQuestions
            questions={curQuiz.choices}
            selectAnswer={selectAnswer}
            handleClickAnswer={handleClickAnswer}
          />
        </div>
      </div>

      {isDisabled ? (
        <div className='h-[48px]'></div>
      ) : (
        <DynamicButton variants='primary' disabled={isDisabled} onClick={handleClickSubmit}>
          {curQuizIndex < maxQuizIndex ? '다음' : '문제 제출'}
        </DynamicButton>
      )}
    </div>
  );
}
