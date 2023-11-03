import { useRef } from "react";

function ToastMessage({ children, title, type, dataKey, removeToast }) {
  const toastRef = useRef(null);
  let color = "bg-slate-400";
  switch (type) {
    case "error":
      color = "bg-red-600";
      break;
    case "success":
      color = "bg-green-600";
      break;
    case "info":
      color = "bg-yellow-600";
      break;
  }

  return (
    <>
      <div
        onClick={() => {
          removeToast();
        }}
        ref={toastRef}
        data-key={dataKey}
        className={`my-1 rounded-md shadow-md ${color} px-8 py-2 font-semibold text-white hover:cursor-pointer hover:bg-green-500`}
      >
        <h2>{title}</h2>
        <p className="py-2 font-mono text-sm font-normal">{children}</p>
      </div>
    </>
  );
}

export default ToastMessage;
