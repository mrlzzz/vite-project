const TodoRowStatus = ({ status }) => {
  let statusStyle;

  switch (status) {
    case "Done":
      statusStyle = "bg-green-400 text-green-700  text-base ";
      break;
    case "Pending":
      statusStyle = "bg-yellow-400 text-yellow-700 text-base ";
      break;
    case "Terminated":
      statusStyle = "bg-red-400 text-red-700 text-base";
      break;
    default:
      statusStyle = "bg-slate-300 text-slate-700 text-base ";
      break;
  }

  return (
    <td
      className={`border-r-2 border-slate-200 py-5 text-center ${statusStyle} content-centertransition-all justify-center duration-150`}
    >
      {status}
    </td>
  );
};

export default TodoRowStatus;
