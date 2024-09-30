interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  isSelect: boolean;
}

export default function SelectableButton({
  onClick,
  isSelect,
  children,
  className,
  ...props
}: React.PropsWithChildren<Props>) {
  const selectedStyle = isSelect
    ? 'bg-blue-800 text-grey-100 animate-fadeOut'
    : 'bg-grey-300 text-grey-600 active:bg-grey-200';
  return (
    <button
      onClick={onClick}
      className={`rounded-[8px] text-body16M ${selectedStyle} ${className}`}
      type='button'
      {...props}
    >
      {children}
    </button>
  );
}
