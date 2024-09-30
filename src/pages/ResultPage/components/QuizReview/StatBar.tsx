import React from 'react';

interface Props {
  option: string;
  rate: number;
  isAnswer: boolean;
  isUserAnswer: boolean;
  result: 'correct' | 'wrong';
}

function StatBar({ option, rate, isAnswer, isUserAnswer, result }: Props) {
  return (
    <div className='relative'>
      <div className='h-[24px] rounded-[6px] bg-blue-200' />
      <div
        className={`absolute left-0 top-0 h-[24px] rounded-l-[6px] border ${isAnswer ? 'border-black/10 bg-forest-500' : 'border-black/10 bg-red-500'}`}
        style={{ width: `calc(100% * ${rate} / 100)` }}
      />
      {isUserAnswer && (
        <div className='absolute right-[4px] top-0 h-[24px] w-[24px]'>
          <img src={`/icons/ic_check_${result}.svg`} alt={result} />
        </div>
      )}
      <span className='absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-detail12M'>
        {option}
      </span>
    </div>
  );
}

export default StatBar;
