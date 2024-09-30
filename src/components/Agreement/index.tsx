import React from 'react';

interface Props extends React.HTMLProps<HTMLInputElement> {
  description?: string;
  link?: React.ReactNode | string;
}

const Agreement = React.forwardRef<HTMLInputElement, Props>(({ description, link, ...inputProps }: Props, ref) => {
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[8px]'>
        <input ref={ref} type='checkbox' id={description} hidden className='peer' {...inputProps} />
        <label
          htmlFor={description}
          className="h-[16px] w-[16px] cursor-pointer bg-[url('/icons/ic_checkbox_off.svg')] peer-checked:bg-[url('/icons/ic_checkbox_on.svg')]"
        />

        <span className='text-body14R'>{description}</span>
      </div>

      {typeof link === 'string' ? (
        <a href={link} target='_blank' className='text-body14R'>
          <img src='/icons/ic_right_arrow.svg' alt='right arrow' />
        </a>
      ) : (
        link
      )}
    </div>
  );
});

export default Agreement;
