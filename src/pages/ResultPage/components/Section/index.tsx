import { PropsWithChildren } from 'react';

interface Props {
  title?: string;
  icon?: React.ReactNode;
  gap?: number;
}

function Section({ icon, title, gap = 20, children }: PropsWithChildren<Props>) {
  return (
    <div className='flex w-full flex-col rounded-[6px] bg-grey-0 p-[16px]' style={{ gap }}>
      {title && (
        <div className='flex items-center gap-[4px]'>
          {typeof icon === 'string' ? <img src={`/icons/${icon}.svg`} alt={icon} width={20} height={20} /> : icon}
          <h2 className='text-body14R'>{title}</h2>
        </div>
      )}
      {children}
    </div>
  );
}

export default Section;
