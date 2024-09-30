import { PropsWithChildren } from 'react';

import Backdrop from './Backdrop';
import { useOutsideClick } from 'hooks';
import { handleBlockingScroll } from './utils';

export interface ModalProps extends PropsWithChildren {
  width?: number;
  height?: number;
  dimmed?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ width = 320, height = 610, dimmed = true, isOpen, onClose, children }: ModalProps) {
  const { modalRef } = useOutsideClick({ onClose });
  handleBlockingScroll({ blockCase: isOpen });

  if (!isOpen) return null;

  return (
    <Backdrop dimmed={dimmed}>
      <div
        style={{ width, height }}
        ref={modalRef}
        className='absolute left-1/2 top-1/2 z-50 flex flex-1 -translate-x-1/2 -translate-y-1/2 bg-white'
      >
        <button type='button' className='absolute right-[8px] top-[8px] h-[20px] w-[20px]' onClick={onClose}>
          Ⅹ
        </button>

        <div className='flex flex-1 flex-col'>{children}</div>
      </div>
    </Backdrop>
  );
}
