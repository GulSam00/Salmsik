import { PropsWithChildren } from 'react';

export default function TopBarContainer({ children }: PropsWithChildren) {
  return <div className='flex flex-col items-center gap-[24px] px-[12px] py-[20px] pt-[48px]'>{children}</div>;
}
