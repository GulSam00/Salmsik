import { useForm } from 'react-hook-form';

import { Agreement, BottomSheet, DynamicButton, FormStateMessage } from '@/components';

import { usePreRegistration } from 'api/user/private/mutation';
import { emailRegExp } from 'utils/regExpHelp';

import { PreRegistrationForm } from './type';
import { BottomSheetProps } from '@/components/BottomSheet';
import { AxiosError } from 'axios';
import { ReservedError } from '@/lib/axios';
import { useToastContext } from '@/lib/toast';

interface Props extends BottomSheetProps {
  userId: number;
}

export default function PreRegistrationModal({ userId, isOpen, onClose }: Props) {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<PreRegistrationForm>();
  const { mutate: preregister } = usePreRegistration();
  const { setToastContent } = useToastContext();

  const onSubmit = (form: PreRegistrationForm) => {
    preregister({ ...form, userId }, { onError, onSuccess });
  };

  const onSuccess = () => {
    setToastContent('사전 예약 신청이 완료되었습니다!');
    onClose();
  };

  const onError = (error: Error) => {
    setError('email', {
      type: 'validate',
      message: (error as AxiosError<ReservedError>).response?.data?.details ?? '잠시 후 다시 시도해주세요',
    });
  };

  const handleClose = () => {
    clearErrors();
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose} title='상식 퀴즈 APP 사전 예약하기'>
      <form className='mt-[16px] flex flex-1 flex-col gap-[16px]' onSubmit={handleSubmit(onSubmit)}>
        <span className='px-[16px] text-center text-detail12R text-grey-1000'>
          금융, 법률, 생활, 과학, 기술 등 알아두면 유용한 지식을 한 곳에 모았습니다. 지금 사전 예약하시고 누구보다 먼저
          학습하세요!
        </span>

        <img src='/images/result_landing_image.webp' alt='result landing image' />

        <Agreement
          description='(필수) 개인정보 수집 이용 동의서'
          link='https://whimsical-latency-87b.notion.site/276056ae78094e4ea097d196651bc165?pvs=74'
          {...register('isPrivacyAgreement', { required: '필수 약관에 동의해주세요' })}
        />

        <input
          placeholder='이메일 입력'
          className='h-[36px] rounded-[4px] border border-blue-800 bg-[rgba(66,114,221,0.1)] px-[8px] text-body14M placeholder-shown:border-grey-600 placeholder-shown:bg-[rgba(0,0,0,0.1)]'
          {...register('email', {
            required: '이메일 주소를 입력해주세요',
            pattern: { value: emailRegExp, message: '유효하지 않은 이메일 주소입니다' },
          })}
        />
        <FormStateMessage message={errors.isPrivacyAgreement?.message ?? errors.email?.message} />

        <DynamicButton type='submit' variants='primary'>
          신청하기
        </DynamicButton>
      </form>
    </BottomSheet>
  );
}
