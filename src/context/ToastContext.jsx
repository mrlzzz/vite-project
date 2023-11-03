// Beautiful component, a custom context for toast messages.
// Remember to export the `const ToastContext`
// Remember to export defualt the `ToastProvider`
// `ToastProvider` wrapper takes its `children` wraps them around actual ToastContext.Provider
// Meaning that, in the app, we actually use the `<ToastProvider>` wrapper, not `<ToastContext.Provider>`
//
// Additionally, upon any change in the `toasts` array state
// the `useEffect` will remove the first element from after some time - FIFO.

import { createContext, useState, useEffect } from "react";

export const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      if (toasts.length > 0) {
        const updatedToasts = toasts.slice(1); // Remove the first toast
        setToasts(updatedToasts);
      }
    }, 2000); // 3000 milliseconds (3 seconds)

    // Clear the timeout when the component unmounts or when toasts change
    return () => {
      clearTimeout(toastTimeout);
    };
  }, [toasts]);

  const addToast = (message) => {
    setToasts([...toasts, message]); // 5000 milliseconds (5 seconds)
  };

  const removeToast = (index) => {
    const updatedToasts = [...toasts];
    updatedToasts.splice(index, 1);
    setToasts(updatedToasts);
    console.log(toasts);
  };

  // This gets exposed to componenets using the context
  const contextValue = {
    toasts,
    setToasts,
    addToast,
    removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
