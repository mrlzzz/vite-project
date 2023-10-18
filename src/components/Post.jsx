import { useRef, useState } from "react";
import "./styles/Post.css";

const Post = ({ blogData }) => {
    const postRef = useRef(null);
    const hiddenRef = useRef(null);
    const [isExpanded, setIsExpanded] = useState(false);

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
            className="bg-slate-400 p-4 mx-4 mb-4 last:mb-0 shadow-md shadow-slate-700 duration-300 hover:bg-slate-300"
        >
            <h1 className="text-gray-950 text-2xl font-bold">
                {blogData.title}
            </h1>
            <hr className="my-1 border-slate-300" />
            <h2 className="text-lg text-gray-900">{blogData.subTitle}</h2>
            <span className="text-md text-gray-700">{blogData.date}</span>
            <p className="text-gray-800">{blogData.content}</p>
            <p
                ref={hiddenRef}
                className={`expandable-element ${
                    isExpanded ? "expanded" : "closed"
                }`}
            >
                {blogData.content}
            </p>
        </div>
    );
};

export default Post;
