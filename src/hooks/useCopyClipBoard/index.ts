import { useState } from 'react';

export default function useCopyClipBoard() {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
      return true;
    } catch (error) {
      setIsCopy(false);
      return false;
    }
  };

  return { isCopy, onCopy };
}
