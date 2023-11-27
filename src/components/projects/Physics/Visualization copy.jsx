// import { useRef, useEffect, useState } from "react";

// const buttonStyle =
//   "w-fit border rounded-sm m-1 active:brightness-90 active:scale-95 border-slate-400 bg-slate-300 px-6 py-1 transition-all duration-75 hover:brightness-110";

// // const initialRectParams = { x: 10, y: 10, w: 100, h: 100 };

// const Visualization = () => {
//   const canvasRef = useRef(null);
//   const [rectX, setRectX] = useState(10);
//   const [rectY, setRectY] = useState(10);
//   const [rectWidth, setRectWidth] = useState(100);
//   const [rectHeight, setRectHeight] = useState(100);
//   const [rectFill, setRectFill] = useState("green");

//   const drawRect = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext("2d");
//     context.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings
//     context.fillStyle = rectFill;
//     context.fillRect(rectX, rectY, rectWidth, rectHeight);
//   };

//   const handleDrawClick = () => {
//     drawRect();
//   };

//   return (
//     <>
//       <div className="flex w-full bg-red-100 p-6">
//         <div className=" bg-blue-200 p-4">
//           <h2>Menu</h2>
//           <h4>Buttons:</h4>
//           <div className="flex flex-col">
//             <button
//               className={buttonStyle}
//               onClick={() => {
//                 handleDrawClick();
//               }}
//             >
//               Button 1
//             </button>
//             <button className={buttonStyle}>Button 2</button>
//             <button className={buttonStyle}>Button 3</button>
//           </div>
//           <h4>Parameters:</h4>
//           <div className="flex flex-col">
//             <label htmlFor="input-1">x</label>
//             <input
//               onChange={(e) => {
//                 setRectY(Number(e.target.value));
//                 handleDrawClick();
//               }}
//               id="input-1"
//               type="number"
//               value={rectX}
//             ></input>
//             <label htmlFor="input-2">y</label>
//             <input
//               onChange={(e) => {
//                 setRectY(Number(e.target.value));
//               }}
//               id="input-2"
//               type="number"
//               value={rectY}
//             ></input>
//             <label htmlFor="input-3">w</label>
//             <input
//               onChange={(e) => {
//                 setRectWidth(Number(e.target.value));
//               }}
//               id="input-3"
//               type="number"
//               value={rectWidth}
//             ></input>
//             <label htmlFor="input-4">h</label>
//             <input
//               onChange={(e) => {
//                 setRectHeight(Number(e.target.value));
//               }}
//               id="input-4"
//               type="number"
//               value={rectHeight}
//             ></input>
//             <div>
//               <input
//                 onChange={(e) => {
//                   setRectFill(e.target.value);
//                 }}
//                 type="color"
//                 id="head"
//                 name="head"
//                 value="#e66465"
//               />
//               <label htmlFor="head"></label>
//             </div>
//           </div>
//         </div>
//         <div className="w-full bg-red-300">
//           <canvas
//             ref={canvasRef}
//             className="h-full w-full bg-red-400"
//             id="myCanvas"
//           ></canvas>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Visualization;
