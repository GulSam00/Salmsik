interface Props {
  variants?: keyof typeof TYPE_VARIANTS;
  message?: string;
}

function FormStateMessage({ variants = 'error', message }: Props) {
  return (
    <div className='flex h-[16px] items-center justify-center'>
      <span className={`${TYPE_VARIANTS[variants]} animate-fadeIn text-detail12R`}>{message}</span>
    </div>
  );
}

export default FormStateMessage;

const TYPE_VARIANTS = {
  error: 'text-[#FC0D0D]',
};
