import { useEffect, useRef } from 'react';

interface Props {
  onClose: () => void;
}

export default function useOutsideClick({ onClose }: Props) {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    addEventListener('mousedown', handleClickOutside);

    return () => {
      removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return { modalRef };
}
