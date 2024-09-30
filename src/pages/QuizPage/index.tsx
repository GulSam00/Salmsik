import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { SubmitGender, SubmitAge, SubmitQuizs } from './components';
import { useRegister } from 'api';
import { ApiError } from 'api/user/submit/type';

import { useToastContext } from 'lib/toast/useToastContext';

export default function QuizPage() {
  const [testStep, setTestStep] = useState<number>(1);
  const [gender, setGender] = useState<number>(0);

  const { setToastContent } = useToastContext();
  const { mutate: register } = useRegister();
  const navigate = useNavigate();

  const renderQuizPage = () => {
    switch (testStep) {
      case 1:
        return <SubmitGender handleNextStep={handleNextStep} />;
      case 2:
        return <SubmitAge handleNextStep={handleNextStep} />;
      default:
        return <SubmitQuizs />;
    }
  };

  const handleNextStep = async (selectValue: number) => {
    if (testStep === 1) {
      setGender(selectValue);
    } else {
      register(
        { sex: gender + '', age: selectValue + '' },
        {
          onSuccess: data => {
            localStorage.setItem('userId', data.id);
            // userId를 로컬로 저장했다가 결과 페이지로 Navigate할 때 사용
          },
          onError: (error: ApiError) => {
            const errorMessage = error.response.data;
            setToastContent(errorMessage.details);
            localStorage.clear();
            navigate('/');
            return;
          },
        },
      );
    }
    setTestStep(testStep + 1);
  };

  useEffect(() => {
    const localQuizAnswers = localStorage.getItem('quizAnswers');
    if (localQuizAnswers) {
      setTestStep(3);
    }
  }, []);

  return <div className='flex h-[100dvh] flex-col text-center'>{renderQuizPage()}</div>;
}
