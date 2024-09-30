import React from 'react';
import { useCorrectCount } from '@/api/user/correctCount/query';

interface Props {
  userId: number;
  type: 'weak' | 'strong';
}

function CategoryCards({ userId, type }: Props) {
  const { data } = useCorrectCount({ userId });

  if (data?.[type]?.length === 0) {
    return (
      <span className='text-center text-body14R text-grey-500'>대중에 비해 {EMPTY_TEXT[type]} 분야가 없습니다.</span>
    );
  }

  return (
    <div className='flex flex-wrap gap-[6px]'>
      {data?.[type]?.map(category => (
        <div
          key={category}
          className='flex h-[58px] w-[54px] flex-col items-center justify-center rounded-[6px] border bg-grey-0 shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'
        >
          <span className='text-head20B'>{data?.emojis[category]}</span>
          <span className='text-detail10M'>{category}</span>
        </div>
      ))}
    </div>
  );
}

export default CategoryCards;

const EMPTY_TEXT = {
  strong: '강한',
  weak: '약한',
};
