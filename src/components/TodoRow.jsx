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

  let clickTimer = 0;

  const handleMouseDown = (direction) => {
    clickTimer = setTimeout(() => {
      longClick(direction);
    }, 300);
  };

  const handleMouseUp = () => {
    console.log("asd");
    clearTimeout(clickTimer);
  };

  const longClick = (direction) => {
    if (direction === "top") {
      handlerFunctions.moveTop(id);
    } else {
      handlerFunctions.moveBottom(id);
    }
  };

  return (
    <>
      <tr className=" bg-slate-300">
        <th
          scope="row"
          className=" whitespace-nowrap border-r-2 px-1 font-medium text-gray-900"
        >
          <div className=" flex content-center">
            <div className="flex scale-75 flex-col pr-2 opacity-0 transition-all duration-300 group-hover:opacity-50">
              <div
                onClick={() => {
                  handlerFunctions.moveUp(id);
                }}
                onMouseDown={() => {
                  handleMouseDown("top");
                }}
                onMouseUp={handleMouseUp}
              >
                <Icon type="arrowUpIcon"></Icon>
              </div>
              <div
                onClick={() => {
                  handlerFunctions.moveDown(id);
                }}
                onMouseDown={() => {
                  handleMouseDown("bottom");
                }}
                onMouseUp={handleMouseUp}
              >
                <Icon type="arrowDownIcon"></Icon>
              </div>
            </div>
            {isEditing ? (
              <div className="flex flex-col justify-center">
                <div className="flex h-[50%] bg-red-300">
                  <input
                    type="text"
                    name="task"
                    value={editedTask}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    ref={inputRef}
                    className=" w-[80%] rounded-l-sm px-2  font-normal outline-none"
                  ></input>
                  <button
                    onClick={() => {
                      handleSave();
                    }}
                    className=" rounded-r-sm bg-slate-500 px-4  text-sm font-normal text-slate-100 hover:brightness-110"
                  >
                    Edit
                  </button>
                </div>
              </div>
            ) : (
              <div className=" flex flex-col justify-center">{task}</div>
            )}
          </div>
        </th>
        <TodoRowStatus className={""} status={statusType} />
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
