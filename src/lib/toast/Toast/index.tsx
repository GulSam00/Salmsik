interface Props {
  content: string;
}

function Toast({ content }: Props) {
  return (
    <div className='absolute bottom-[128px] left-1/2 flex h-[64px] w-[256px] -translate-x-1/2 animate-float justify-center rounded-lg bg-grey-0 pl-[16px] pr-[8px] shadow-[0_4px_10px_0_rgba(0,0,0,0.1)]'>
      <img src='icons/icon_check.svg' alt='icon_check' width={24} />
      <div className='flex-1 content-center text-center text-body14M'>{content}</div>
    </div>
  );
}

export default Toast;
