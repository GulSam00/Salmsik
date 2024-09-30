interface Props {
  questions: string[];
  selectAnswer: number;
  handleClickAnswer: (answer: number) => void;
}

export default function QuizQuestions({ questions, selectAnswer, handleClickAnswer }: Props) {
  const COLOR_VARIANTS = {
    selected: 'bg-indigo-600 text-grey-100 active:bg-indigo-500',
    notSelected: 'bg-blue-200 active:bg-blue-100',
  };

  const getSelectColor = (index: number) => {
    return selectAnswer === index ? COLOR_VARIANTS.selected : COLOR_VARIANTS.notSelected;
  };

  return (
    <div className='flex w-full flex-col justify-end gap-[8px]'>
      {questions.map((question, index) => {
        const questionIndex = index + 1;
        return (
          <div
            className={`cursor-pointer rounded-[6px] py-[6px] ${getSelectColor(questionIndex)} `}
            key={index}
            onClick={() => handleClickAnswer(questionIndex)}
          >
            {question}
          </div>
        );
      })}
      <div
        className={`cursor-pointer rounded-[6px] py-[6px] ${getSelectColor(0)}`}
        onClick={() => handleClickAnswer(0)}
      >
        모름
      </div>
    </div>
  );
}
