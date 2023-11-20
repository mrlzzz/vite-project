import Icon from "./Icons/Icon";
import { useEffect, useState, useRef } from "react";
import TodoRowStatus from "./TodoRowStatus";

const TodoRow = ({ children, status, handlerFunctions, id }) => {
  const inputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(children);
  const [editedTask, setEditedTask] = useState("");
  const [statusType, setStatusType] = useState(status);

  useEffect(() => {
    if (isEditing) inputRef.current.focus();
  }, [isEditing]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  const handleSave = () => {
    setTask(editedTask);
    setIsEditing(false);
  };

  // TODO: Improve implementation
  const handleStatusTypeChange = () => {
    if (statusType === "Done") {
      setStatusType("Pending");
    } else {
      setStatusType("Done");
    }
  };

  return (
    <>
      <tr className="bg-slate-300">
        <th
          scope="row"
          className="whitespace-nowrap border-r-4 px-6 font-medium text-gray-900 hover:bg-slate-200"
        >
          {isEditing ? (
            <input
              type="text"
              name="task"
              value={editedTask}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              ref={inputRef}
              className="px-2 font-normal outline-none"
            ></input>
          ) : (
            task
          )}
        </th>
        <TodoRowStatus status={statusType} />
        <td style={{ verticalAlign: "middle" }} className="p-0">
          <div className=" flex scale-90 justify-center gap-1 transition-all duration-500">
            <div
              onClick={() => {
                handleEditToggle();
              }}
            >
              <Icon type={"editIcon"}></Icon>
            </div>
            <div
              onClick={() => {
                handleStatusTypeChange();
              }}
            >
              <Icon type={"checkIcon"}></Icon>
            </div>
            <div
              onClick={() => {
                handlerFunctions.remove(id);
              }}
            >
              <Icon type={"deleteIcon"}></Icon>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TodoRow;
