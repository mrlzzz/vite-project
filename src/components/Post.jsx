import { useEffect, useRef, useState, useContext } from "react";
import autoAnimate from "@formkit/auto-animate";
import ToastMessage from "./ToastMessage";
import { ToastContext } from "../context/ToastContext";
import "./styles/Post.css";

const Post = ({ blogData }) => {
  const postRef = useRef(null);
  const hiddenRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const { addToast } = useContext(ToastContext);

  useEffect(() => {
    postRef.current && autoAnimate(postRef.current);
  }, [postRef]);

  function handleClick() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div
      onClick={handleClick}
      ref={postRef}
      className="mx-8 mb-4 cursor-pointer bg-slate-400 p-6 shadow-md shadow-slate-700 duration-300 last:mb-0 hover:bg-slate-300"
    >
      <h1 className="text-2xl font-bold text-gray-950">{blogData.title}</h1>
      <hr className="my-1 border-slate-300" />
      <h2 className="text-lg text-gray-900">{blogData.subTitle}</h2>
      <span className="text-base text-gray-700">{blogData.date}</span>
      {!isExpanded && <p>...</p>}
      {isExpanded && (
        <div
          ref={hiddenRef}
          className={`flex cursor-default flex-col text-lg tracking-tight text-gray-700`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {blogData.content}
          {blogData.content}
          <div
            className="self-end"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              onClick={() => {
                addToast(
                  <ToastMessage title={"Error from the Blog"} type={"error"}>
                    Functionality not implemented at the moment.
                  </ToastMessage>,
                );
              }}
              className="mr-4 mt-8  border-y border-gray-900 px-3 py-1 text-base font-light  transition-all hover:bg-gray-600  hover:text-gray-200 hover:shadow-lg active:bg-gray-500"
            >
              Read more &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
