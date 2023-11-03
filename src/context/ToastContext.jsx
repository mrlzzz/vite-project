// Beautiful component, a custom context for toast messages.
// Remember to export the `const ToastContext`
// Remember to export defualt the `ToastProvider`
// `ToastProvider` wrapper takes its `children` wraps them around actual ToastContext.Provider
// Meaning that, in the app, we actually use the `<ToastProvider>` wrapper, not `<ToastContext.Provider>`
//
// Additionally, upon any change in the `toasts` array state
// the `useEffect` will remove the first element from after some time - FIFO.

import { createContext, useState, useEffect } from "react";
import ToastMessage from "../components/ToastMessage";

export const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    const toastTimeout = setTimeout(() => {
      if (toasts.length > 0) {
        const updatedToasts = toasts.slice(1); // Remove the first toast
        setToasts(updatedToasts);
      }
    }, 2000);

    // Clear the timeout when the component unmounts or when toasts change
    return () => {
      clearTimeout(toastTimeout);
    };
  }, [toasts]);

  const addToast = (type, title, message) => {
    const toastKey = crypto.randomUUID();
    const removeToast = () => {
      setToasts((prevToasts) =>
        prevToasts.filter((toast) => toast.key !== toastKey),
      );
      console.log("clicked");
    };
    setToasts([
      ...toasts,
      <ToastMessage
        key={toastKey}
        dataKey={toastKey}
        type={type}
        title={title}
        removeToast={removeToast}
      >
        {message}
      </ToastMessage>,
    ]);
  };

  // const removeToast = (index) => {
  //   const updatedToasts = [...toasts];
  //   updatedToasts.splice(index, 1);
  //   setToasts(updatedToasts);
  //   console.log(toasts);
  // };

  // This gets exposed to componenets using the context
  const contextValue = {
    toasts,
    setToasts,
    addToast,
    //removeToast,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
