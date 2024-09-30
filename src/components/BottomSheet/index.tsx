import { PropsWithChildren } from 'react';

import { useOutsideClick } from 'hooks';
import { handleBlockingScroll } from '@/components/Modal/utils';

import Backdrop from '@/components/Modal/Backdrop';

export interface BottomSheetProps extends PropsWithChildren {
  dimmed?: boolean;
  isOpen: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  isVisibleCloseButton?: boolean;
}

export default function BottomSheet({
  dimmed = true,
  isOpen,
  onClose,
  title,
  isVisibleCloseButton = true,
  children,
}: BottomSheetProps) {
  const { modalRef } = useOutsideClick({ onClose });
  handleBlockingScroll({ blockCase: isOpen });

  if (!isOpen) return null;

  return (
    <Backdrop dimmed={dimmed}>
      <div
        ref={modalRef}
        className='absolute bottom-0 left-1/2 z-50 flex w-full flex-1 -translate-x-1/2 animate-sheetUp flex-col rounded-t-[8px] bg-white p-[16px] shadow-[0_-10px_30px_10px_rgba(0,0,0,0.1)] sm:mx-auto sm:w-[375px]'
      >
        <div className='h-[24px]'>
          <h3 className='text-center text-body16M'>{title}</h3>
        </div>

        {isVisibleCloseButton && (
          <img
            alt='close icon'
            src='/icons/ic_cross.svg'
            className='absolute right-[16px] top-[16px] cursor-pointer'
            onClick={onClose}
          />
        )}

        <div className='flex flex-1 flex-col'>{children}</div>
      </div>
    </Backdrop>
  );
}
