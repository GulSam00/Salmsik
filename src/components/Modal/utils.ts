interface Props {
  blockCase: boolean;
  target?: HTMLElement;
}

export function handleBlockingScroll({ blockCase, target = document.body }: Props) {
  const blockScroll = () => {
    target.style.overflow = 'hidden';
  };

  const unblockScroll = () => {
    target.style.overflow = 'unset';
  };

  blockCase ? blockScroll() : unblockScroll();
}
