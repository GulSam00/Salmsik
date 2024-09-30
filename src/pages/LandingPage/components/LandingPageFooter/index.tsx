import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DynamicButton } from 'components';
import { useCopyClipBoard } from 'hooks';
import { useToastContext } from 'lib/toast/useToastContext';

export default function LandingPageFooter() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { onCopy } = useCopyClipBoard();
  const { setToastContent } = useToastContext();
  const navigate = useNavigate();

  const handleClickCopyLink = async () => {
    const isSuccessCopy = await onCopy('https://salmsik.com');
    setToastContent(isSuccessCopy ? '테스트 링크가 복사 되었습니다!' : '복사에 실패했습니다.');
  };

  const handleClickStartQuiz = () => {
    const prevQuizAnswers = localStorage.getItem('quizAnswers');
    if (prevQuizAnswers) {
      setIsPopupOpen(true);
    } else {
      navigate('/quiz');
    }
  };

  const handleClickClearLocal = (isClear: boolean) => {
    if (isClear) {
      localStorage.clear();
    }
    navigate('/quiz');
  };

  return (
    <div className='fixed bottom-0 left-0 flex w-full justify-center'>
      <div className='flex w-full flex-col bg-grey-0 px-[16px] sm:w-[375px]'>
        <div className='flex justify-center gap-[4px] pt-[8px]'>
          <img src='icons/icon_link.svg' alt='icon_link' />
          <div className='cursor-pointer underline' onClick={handleClickCopyLink}>
            테스트 링크 복사
          </div>
        </div>
        <DynamicButton onClick={handleClickStartQuiz} variants='primary' size='lg' className='my-[16px]'>
          테스트 시작
        </DynamicButton>

        {isPopupOpen && (
          <div className='fixed bottom-0 left-0 flex h-[164px] w-full justify-center'>
            <div className='relative w-full bg-grey-0 p-[16px] sm:w-[375px]'>
              <img
                className='absolute right-[16px] top-[16px] cursor-pointer'
                src='icons/ic_cross.svg'
                alt='icon_close'
                onClick={() => setIsPopupOpen(false)}
              />
              <div className='flex flex-col gap-[16px]'>
                <div className='text-body16M'>이어서 진행하시겠어요?</div>
                <div className='text-detail12R text-grey-1000'>
                  이전에 풀던 퀴즈가 있습니다. <br /> 이어서 진행하시겠어요?
                </div>
                <div className='flex justify-between gap-[16px]'>
                  <DynamicButton size='sm' onClick={() => handleClickClearLocal(true)} variants='secondary'>
                    처음부터
                  </DynamicButton>
                  <DynamicButton
                    size='sm'
                    className='flex-1'
                    onClick={() => handleClickClearLocal(false)}
                    variants='primary'
                  >
                    이어서 진행
                  </DynamicButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
