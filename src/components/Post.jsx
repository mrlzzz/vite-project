import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import autoAnimate from "@formkit/auto-animate";
import "./styles/Post.css";

{
  /* <p
  ref={hiddenRef}
  className={` expandable-element text-lg tracking-tight text-gray-700 ${
    isExpanded ? "expanded" : "closed"
  }`}
  >
  {blogData.content}
</p> */
}

const Post = ({ blogData }) => {
  const postRef = useRef(null);
  const hiddenRef = useRef(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [toast, showToast] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    postRef.current && autoAnimate(postRef.current);
  }, [postRef]);

  function handleClick() {
    setIsExpanded(!isExpanded);

    if (isExpanded) {
      // hiddenRef.current.classList.remove("hidden");
      // hiddenRef.current.classList.add("visible-content");
    } else {
      //hiddenRef.current.classList.remove("visible-content");
      //hiddenRef.current.classList.add("hidden");
    }
  }

  return (
    <div
      onClick={handleClick}
      ref={postRef}
      className="mx-8 mb-4 bg-slate-400 p-6 shadow-md shadow-slate-700 duration-300 last:mb-0 hover:bg-slate-300"
    >
      <h1 className="text-2xl font-bold text-gray-950">{blogData.title}</h1>
      <hr className="my-1 border-slate-300" />
      <h2 className="text-lg text-gray-900">{blogData.subTitle}</h2>
      <span className="text-base text-gray-700">{blogData.date}</span>
      {!isExpanded && <p>...</p>}
      {isExpanded && (
        <div
          ref={hiddenRef}
          className={`flex flex-col text-lg tracking-tight text-gray-700`}
        >
          {blogData.content}
          {blogData.content}
          <div className="self-end">
            <button
              onClick={() => {
                showToast();
              }}
              className="mr-4 mt-8  border-b border-gray-900 px-3 py-2 text-base font-light  transition-all hover:bg-gray-600  hover:text-gray-200 hover:shadow-lg active:bg-gray-500"
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
