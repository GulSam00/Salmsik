import React from 'react';

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

function ExpandBar({ onClick, isOpen }: Props) {
  return (
    <div
      className={`flex h-[28px] cursor-pointer justify-center py-[4px] ${isOpen ? 'rotate-180 animate-rotateBack' : 'rotate-0 animate-rotate'}`}
      onClick={onClick}
    >
      <img src='icons/icon_dropdown.svg' height={20} width={20} />
    </div>
  );
}

export default ExpandBar;
