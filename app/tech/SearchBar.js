"use client";
import { useState } from "react";

// function SearchBar() {
//   const [showInput, setShowInput] = useState(false);

//   console.log("showInput", showInput);

//   return (
//     <button onClick={() => setShowInput(true)}>
//       {showInput ? (
//         <input type="text" placeholder="Search the notes" />
//       ) : (
//         <svg
//           width="20"
//           height="20"
//           viewBox="0 0 15 15"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
//             fill="currentColor"
//             fill-rule="evenodd"
//             clip-rule="evenodd"
//           ></path>
//         </svg>
//       )}
//        ̰
//     </button>
//   );
// }

// function SearchBar() {
//   return (
//       <div className="flex  bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white rounded-3xl">
//         <div className=" pl-5 flex items-center pointer-events-none">
//         <svg
//             className="w-5 h-5 text-gray-500 dark:text-gray-400"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//         </div>
//         <input
//           className="focus:border-0 flex items-center w-full p-4 font-texturina text-xl text-gray-900   bg-gray-50 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white rounded-3xl"
//           placeholder="Search the notes"
//         />
//       </div>
//   );
// }

function SearchBar() {
  return (
    <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
      <button
        type="button"
        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-3xl ring-1 ring-slate-900/10 shadow-sm py-1.5 p-4 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"

  
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
          ></circle>
        </svg>
        Quick search...
        <span className="ml-auto pl-3 flex-none text-sm font-semibold">⌘K</span>
      </button>
    </div>
  );
}
export default SearchBar;
