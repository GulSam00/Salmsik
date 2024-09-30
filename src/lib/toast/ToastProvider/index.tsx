import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Toast, ToastContext } from 'lib/toast';

function ToastProvider({ children }: PropsWithChildren) {
  const [toastContent, setToastContent] = useState<string>('');
  const toastNode = document.getElementById('_toast');
  let ToastPortal = null;

  if (toastNode && toastContent) {
    ToastPortal = createPortal(<Toast content={toastContent} />, toastNode);
  }

  useEffect(() => {
    let timer = null;
    if (toastContent) {
      timer = setTimeout(() => {
        setToastContent('');
      }, 1000 * 1.5);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [toastContent]);

  const value = useMemo(() => ({ setToastContent }), []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {ToastPortal}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
