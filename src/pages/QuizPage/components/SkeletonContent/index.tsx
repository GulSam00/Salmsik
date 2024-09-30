export default function SkeletonContent() {
  return (
    <div className='m-[16px] mb-[0px] flex h-screen flex-col gap-[16px]'>
      <div className='flex h-[16px] justify-between gap-[6px] px-[16px]'>
        <div className='w-[274px] rounded-[16px] bg-grey-200'></div>
        <div className='w-[16px] rounded-[16px] bg-grey-200'></div>
      </div>

      <div className='flex flex-1 flex-col gap-[20px] p-[16px]'>
        <div className='flex h-[16px] justify-between'>
          <div className='w-[200px] rounded-[16px] bg-grey-200'></div>
          <div className='w-[16px] rounded-[16px] last:bg-grey-200'></div>
        </div>
        <div className='flex-1 rounded-[6px] bg-grey-200'></div>
        <div className='flex h-[212px] flex-col gap-[8px]'>
          <div className='h-[36px] rounded-[6px] bg-grey-200'></div>
          <div className='h-[36px] rounded-[6px] bg-grey-200'></div>
          <div className='h-[36px] rounded-[6px] bg-grey-200'></div>
          <div className='h-[36px] rounded-[6px] bg-grey-200'></div>
          <div className='h-[36px] rounded-[6px] bg-grey-200'></div>
        </div>
      </div>

      <div className='mx-[16px] h-[36px] rounded-[6px] bg-grey-200'></div>
    </div>
  );
}
