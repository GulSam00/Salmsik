import { useState } from 'react';

import { DynamicButton } from 'components';

interface Props {
  handleNextStep: (value: number) => void;
}

export default function SubmitAge({ handleNextStep }: Props) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [text, setText] = useState<string>('');

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const regexNum = /^[0-9]*$/;

    if (regexNum.test(input)) {
      if (input.length === 0) setText(input);
      else setText(Number(input).toString());
      setIsDisabled(input === '');
    }
  };

  const handleClickSubmit = () => {
    handleNextStep(Number(text));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isDisabled) {
      handleClickSubmit();
    }
  };

  return (
    <div className='m-[16px] flex h-screen flex-col justify-between'>
      <div className='flex flex-col gap-[16px]'>
        <div className='mb-[16px] text-left text-head20B'>나이를 입력하세요.</div>
        <div className='relative flex flex-col items-center'>
          <input
            className={`mx-[12px] h-[34px] w-full border-b-[2px] text-body16M ${text.length && 'border-blue-800'}`}
            placeholder='나이'
            value={text}
            onChange={handleChangeText}
            onKeyDown={handleKeyDown}
            maxLength={2}
            autoFocus={true}
          />
          {text.length > 0 && (
            <img
              src='icons/icon_erase.svg'
              alt='icon_erase'
              className='absolute right-[5px] top-[5px] cursor-pointer'
              onClick={() => setText('')}
            />
          )}
          {/* {isWarning && <div className='m-[4px] w-full text-left text-red-500'>숫자만 입력해주세요</div>} */}
        </div>
      </div>

      {text.length > 0 && (
        <DynamicButton variants='primary' disabled={isDisabled} onClick={handleClickSubmit}>
          제출
        </DynamicButton>
      )}
    </div>
  );
}
