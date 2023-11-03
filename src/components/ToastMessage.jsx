function ToastMessage({ children, title, type }) {
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
        className={`my-1 rounded-md shadow-md ${color} px-8 py-2 font-semibold text-white`}
      >
        <h2>{title}</h2>
        <p className="py-2 text-sm">{children}</p>
      </div>
    </>
  );
}

export default ToastMessage;
