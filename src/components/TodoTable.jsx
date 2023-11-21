import { useState } from "react";
import Icon from "./Icons/Icon";
import TodoRow from "./TodoRow";
import { v4 as uuidv4 } from "uuid";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useHotkeys } from "react-hotkeys-hook";

const initialTodoList = [
  { id: uuidv4(), task: "Add more routes", status: "Done" },
  { id: uuidv4(), task: "Animate the menu", status: "Done" },
  { id: uuidv4(), task: "Enable POST requests", status: "Done" },
  { id: uuidv4(), task: "Deploy server-side code to Vercel", status: "Done" },
];

const TodoTable = () => {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [newlyAddedTodo, setNewlyAddedTodo] = useState(null);
  const [parent, enable] = useAutoAnimate();
  useHotkeys("ctrl+enter", () => addTodo());

  const addTodo = () => {
    enable(false);
    const newTodo = {
      id: uuidv4(),
      task: "New Task",
      status: "Pending",
    };
    setTodoList([...todoList, newTodo]);
    setNewlyAddedTodo(newTodo);
  };

  const removeTodo = (id) => {
    enable(false);
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  const moveTodoUp = (id) => {
    enable(true);
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index > 0) {
      const updatedTodoList = [...todoList];
      [updatedTodoList[index - 1], updatedTodoList[index]] = [
        updatedTodoList[index],
        updatedTodoList[index - 1],
      ];
      setTodoList(updatedTodoList);
    }
  };

  const moveTodoDown = (id) => {
    enable(true);
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index < todoList.length - 1) {
      const updatedTodoList = [...todoList];
      [updatedTodoList[index], updatedTodoList[index + 1]] = [
        updatedTodoList[index + 1],
        updatedTodoList[index],
      ];
      setTodoList(updatedTodoList);
    }
  };

  const moveTodoTop = (id) => {
    enable(true);
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index > 0) {
      const updatedTodoList = [...todoList];
      const movedTodo = updatedTodoList.splice(index, 1);
      updatedTodoList.unshift(...movedTodo);
      setTodoList(updatedTodoList);
    }
  };

  const moveTodoBottom = (id) => {
    enable(true);
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index < todoList.length - 1) {
      const updatedTodoList = [...todoList];
      const movedTodo = updatedTodoList.splice(index, 1);
      updatedTodoList.push(...movedTodo);
      setTodoList(updatedTodoList);
    }
  };

  const handlerFunctions = {
    add: addTodo,
    remove: removeTodo,
    moveUp: moveTodoUp,
    moveDown: moveTodoDown,
    moveTop: moveTodoTop,
    moveBottom: moveTodoBottom,
  };

  let todoRows = todoList.map((e) => {
    return (
      <TodoRow
        key={e.id}
        status={e.status}
        handlerFunctions={handlerFunctions}
        newlyAddedTodo={newlyAddedTodo}
        id={e.id}
      >
        {e.task}
      </TodoRow>
    );
  });

  return (
    <>
      <div className="h-fit">
        <div className="relative overflow-x-auto">
          <table className="m-0 w-full text-left shadow-md lg:table-fixed">
            <colgroup>
              <col span="1" style={{ width: "65%" }} />
              <col span="1" style={{ width: "15%" }} />
              <col span="1" style={{ width: "20%" }} />
            </colgroup>
            <thead className="bg-slate-500 text-sm uppercase">
              <tr>
                <th
                  style={{ verticalAlign: "middle" }}
                  scope="col"
                  className="ml-0 px-3 py-3 text-gray-200 "
                >
                  <div className="flex ">
                    <div
                      className="mr-2 flex scale-90 justify-evenly   rounded-sm"
                      onClick={() => {
                        handlerFunctions.add();
                      }}
                    >
                      <Icon type={"addIcon"}></Icon>
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="">Task</span>
                    </div>
                  </div>
                </th>
                <th
                  style={{ verticalAlign: "middle" }}
                  scope="col"
                  className="px-6 py-3 text-center text-gray-200"
                >
                  <div className="flex flex-col justify-center">
                    <span className="">Status</span>
                  </div>
                </th>
                <th
                  style={{ verticalAlign: "middle" }}
                  scope="col"
                  className="p-0 text-gray-200"
                >
                  <div className="flex justify-center">
                    <div className="flex flex-col justify-center ">
                      <span>Menu</span>
                    </div>{" "}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody ref={parent}>
              {todoRows.length !== 0 ? todoRows : "Empty"}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TodoTable;
