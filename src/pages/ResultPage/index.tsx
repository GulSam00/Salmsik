import { Link, Navigate, useLocation } from 'react-router-dom';
import { useCopyClipBoard, useDisclosure } from 'hooks';
import { useToastContext } from '@/lib/toast/useToastContext';

import { DynamicButton, TopBar } from '@/components';
import { CategoryCards, PreRegistrationModal, QuizReview, RadarChart, RankPercent, Section } from './components';

export default function ResultPage() {
  const preRegistrationModal = useDisclosure();
  const { state } = useLocation();

  const { onCopy } = useCopyClipBoard();
  const { setToastContent } = useToastContext();

  const [percent, userId] = [state?.percent ?? 3, state?.userId ?? 1];

  if (!userId) {
    return <Navigate to='/' />;
  }

  const handleClickShare = async () => {
    const isSuccessCopy = await onCopy('https://salmsik.com');
    setToastContent(isSuccessCopy ? '클립보드에 복사되었습니다.' : '공유링크 복사를 실패했습니다.');
  };

  return (
    <div className='flex flex-1 flex-col items-center gap-[16px] overflow-scroll p-[16px] pt-[48px] scrollbar-hide'>
      <TopBar
        left={
          <Link to='/'>
            <img src='/icons/icon_arrow_l.svg' alt='go back' />
          </Link>
        }
      />

      <Section>
        <RankPercent percent={percent} />
      </Section>

      <Section title='분야별 정답률' icon='ic_doughnut_chart'>
        <RadarChart userId={userId} />
      </Section>

      <Section title='내가 강한 분야' icon='ic_thumb_up'>
        <CategoryCards type='strong' userId={userId} />
      </Section>

      <Section title='내가 약한 분야' icon='ic_thumb_down'>
        <CategoryCards type='weak' userId={userId} />
      </Section>

      <Section title='문제 풀이 결과' icon='ic_paper_light'>
        <QuizReview userId={userId} />
      </Section>

      <Section title='사전 예약' icon='ic_bell_pin'>
        <span className='text-body16M'>
          삶에 필요한 지식을 퀴즈로 재밌게 배울 수 있는 모바일 앱을 출시할 예정입니다. 사전예약하시고, 삶에 도움이 되는
          지식을 쌓아보세요!
        </span>
        <DynamicButton onClick={preRegistrationModal.onOpen} variants='primary'>
          사전예약 신청
        </DynamicButton>
        <PreRegistrationModal
          isOpen={preRegistrationModal.isOpen}
          onClose={preRegistrationModal.onClose}
          userId={userId}
        />
      </Section>

      <div className='mb-[16px] mt-[48px] w-full'>
        <DynamicButton onClick={handleClickShare}>
          <div className='flex items-center justify-center gap-[4px]'>
            <img src={`/icons/ic_link.svg`} alt='link' width={24} height={24} />
            테스트 링크 복사
          </div>
        </DynamicButton>
      </div>
    </div>
  );
}
