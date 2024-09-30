import React, { PropsWithChildren } from 'react';

interface Props {
  left?: React.ReactNode;
  right?: React.ReactNode;
}

function TopBar({ left, right, children }: PropsWithChildren<Props>) {
  return (
    <div className='fixed top-0 z-[10] flex h-[48px] w-full items-center justify-between bg-grey-100 px-[16px] sm:w-[375px]'>
      <div className='flex-1'>{left}</div>
      <div className='text-body16M'>{children}</div>
      <div className='flex-1 justify-end'>{right}</div>
    </div>
  );
}

export default TopBar;
