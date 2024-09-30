interface Props {
  timer: number;
}

export default function QuizTimeCounter({ timer }: Props) {
  return (
    <div className='flex h-[32px] w-[58px] items-center rounded-[6px] p-[4px] pl-[6px] pr-[8px] shadow-[0_2px_10px_0_rgba(0,0,0,0.1)]'>
      <img src='icons/icon_clock.svg' alt='clock' width={24} />
      <div className='text-body16M text-blue-800'>{timer}</div>
    </div>
  );
}
