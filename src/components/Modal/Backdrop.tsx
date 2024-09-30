import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  dimmed: boolean;
}

export default function Backdrop({ dimmed, children }: Props) {
  return (
    <div className={`fixed left-0 top-0 z-[11] h-full w-full ${dimmed ? 'bg-black bg-opacity-40' : ''}`}>
      {children}
    </div>
  );
}
