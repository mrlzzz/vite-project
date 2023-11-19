import { useRef } from "react";

function ToastMessage({ children, title, type, dataKey, removeToast }) {
  const toastRef = useRef(null);
  let color;

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
    default:
      color = "bg-slate-400";
  }

  return (
    <>
      <div
        onClick={() => {
          removeToast();
        }}
        ref={toastRef}
        data-key={dataKey}
        className={`my-1 flex flex-col  content-center rounded-md shadow-md ${color} px-3 py-2 font-semibold text-white hover:cursor-pointer hover:brightness-110 lg:px-6 lg:py-2`}
      >
        <div className="flex h-fit flex-col flex-wrap gap-2 py-1">
          <h2>{title}</h2>
          <p className=" font-mono text-sm font-normal">{children}</p>
        </div>
      </div>
    </>
  );
}

export default ToastMessage;
