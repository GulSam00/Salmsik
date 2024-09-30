import React from 'react';

import { useDisclosure } from 'hooks';

import StatBar from '@/pages/ResultPage/components/QuizReview/StatBar';
import ExpandBar from '@/pages/ResultPage/components/QuizReview/ExpandBar';

import { Stat } from '@/api/question/stats/type';

function StatCard({ question, correct, chosen, choiceSelectionRates }: Stat) {
  const correctAnswerIndex = question.choices.indexOf(correct);
  const isCorrect = correct === chosen;

  const statBars = useDisclosure();

  return (
    <div
      className={`flex flex-col rounded-[6px] bg-gradient-to-b to-[#F4F2FF] p-[16px] ${isCorrect ? 'from-[#CDF1B9]' : 'from-[#FFE1E1]'}`}
    >
      <div className='mb-[20px] flex flex-col gap-[4px]'>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[4px] text-body14M'>
            <span className='text-blue-800'>{String(question.id).padStart(2, '0')}</span>
            <span className='text-grey-1300'>{question.category}</span>
          </div>
          <span className='text-detail12R text-blue-800'>정답률 {choiceSelectionRates[correctAnswerIndex]}%</span>
        </div>

        <span className='text-detail12R text-grey-1000'>{question.content}</span>
      </div>

      <div
        className={`flex flex-col gap-[8px] overflow-hidden ${statBars.isOpen ? 'mb-[20px] animate-expand' : 'h-0 animate-collapse'}`}
      >
        {question.choices.map((option, index) => (
          <StatBar
            key={option}
            option={option}
            rate={choiceSelectionRates[index]}
            isAnswer={index === correctAnswerIndex}
            isUserAnswer={option === chosen}
            result={isCorrect ? 'correct' : 'wrong'}
          />
        ))}
      </div>

      <ExpandBar onClick={statBars.onToggle} isOpen={statBars.isOpen} />
    </div>
  );
}

export default StatCard;
