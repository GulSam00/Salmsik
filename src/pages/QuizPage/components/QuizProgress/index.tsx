import { useNavigate } from 'react-router-dom';

interface Props {
  maxQuizIndex: number;
  curQuizIndex: number;
}

export default function QuizProgress({ maxQuizIndex, curQuizIndex }: Props) {
  const navigate = useNavigate();
  const prgressPercent = Math.ceil((curQuizIndex / maxQuizIndex) * 100) + '%';
  return (
    <div className='flex items-center gap-[6px] self-stretch px-[16px]'>
      <img
        src='icons/icon_arrow_l.svg'
        alt='icon_arrow_l'
        className='cursor-pointer'
        width={24}
        onClick={() => navigate('/')}
      />
      <div className='h-[16px] w-[212px] flex-1 rounded-[16px] bg-grey-200 p-[2px]'>
        <div style={{ width: prgressPercent }} className={`h-[12px] shrink-0 rounded-[16px] bg-squash-600`}></div>
      </div>
      <div className='w-[52px] text-body16M text-squash-600'>
        {curQuizIndex} / {maxQuizIndex}
      </div>
    </div>
  );
}
