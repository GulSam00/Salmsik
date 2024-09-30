import { createContext, useContext } from 'react';

export const ToastContext = createContext({
  setToastContent: (content: string) => {},
});

export function useToastContext() {
  return useContext(ToastContext);
}
