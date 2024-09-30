interface Props {
  percent: number;
}

export default function RankPercent({ percent }: Props) {
  return (
    <div className='my-[16px] flex items-center justify-center gap-[16px]'>
      <img src='/images/main_header_cha.png' alt='character' className='w-[72px] object-contain' />
      <div className='flex flex-col'>
        <span className='text-body16M'>나의 상식 수준은?</span>
        <span className='text-displayB'>상위 {percent}%</span>
      </div>
    </div>
  );
}
