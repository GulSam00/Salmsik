import { useState } from 'react';

import { SelectableButton } from 'components';

interface Props {
  handleNextStep: (value: number) => void;
}

export default function SubmitGender({ handleNextStep }: Props) {
  const [selectGender, setSelectGender] = useState<number>(-1);

  const handleClickGender = (item: number) => {
    setSelectGender(item);
    setTimeout(() => {
      handleNextStep(item);
    }, 500);
  };

  return (
    <div className='flex h-screen flex-col gap-[16px]'>
      <div className='m-[16px] text-left text-head20B'>성별을 선택해주세요</div>
      <div className='flex justify-center gap-[24px]'>
        <SelectableButton
          onClick={() => handleClickGender(0)}
          className='flex h-[132px] w-[132px] cursor-pointer items-center justify-center'
          isSelect={selectGender === 0}
          disabled={selectGender !== -1}
        >
          남자
        </SelectableButton>
        <SelectableButton
          onClick={() => handleClickGender(1)}
          className='flex h-[132px] w-[132px] cursor-pointer items-center justify-center'
          isSelect={selectGender === 1}
          disabled={selectGender !== -1}
        >
          여자
        </SelectableButton>
      </div>
    </div>
  );
}
