interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants?: keyof typeof COLOR_VARIANTS;
  size?: keyof typeof SIZE_VARIANTS;
}

export default function DynamicButton({
  variants = 'default',
  size = 'lg',
  children,
  className,
  ...props
}: React.PropsWithChildren<Props>) {
  return (
    <button
      className={`rounded-[8px] text-body16M ${COLOR_VARIANTS[variants]} ${SIZE_VARIANTS[size]} ${className}`}
      type='button'
      {...props}
    >
      {children}
    </button>
  );
}

const COLOR_VARIANTS = {
  primary: 'bg-blue-800 text-grey-100 active:bg-blue-700',
  default: 'bg-blue-200 text-black border border-solid border-[rgba(0, 0, 0, 0.10)] active:bg-blue-100',
  secondary: 'bg-grey-300 text-grey-800 active:bg-grey-200',
};

const SIZE_VARIANTS = {
  lg: 'w-full h-[48px]',
  sm: 'w-[112px] h-[48px]',
};
