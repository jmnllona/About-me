// import React, { useEffect, useState } from "react";



// type selectType = {
//       selectedType: string;
//       setSelectedType: React.Dispatch<React.SetStateAction<string>>;
// };
// function Select({ selectedType, setSelectedType }: selectType) {
//       const [isOpen, setIsOpen] = useState<boolean>(false);

//       return (
//             <div
//                   onFocus={() => setIsOpen(true)}
//                   onBlur={(e) => {
//                         if (!e.currentTarget.contains(e.relatedTarget as Node)) {
//                               setIsOpen(false);
//                         }
//                   }}
//                   className="relative">
//                   <button
//                         className={
//                               `min-w-0 w-24 px-5 py-1 rounded-full text-xs outline-none  bg-amber-50 placeholder:text-amber-700/30 text-amber-900/50 `
                             
//                         }>
//                         {selectedType}
//                   </button>

//                   {isOpen && (
//                         <div className={"absolute grid grid-cols-2 w-max left-1/2 -translate-x-1/2 top-8   gap-px bg-amber-900 " } >
//                               {Object.entries(types).map(([type, color]) => (
//                                     <button
//                                           key={type}
//                                           onClick={() => setSelectedType(type)}
//                                           className={"px-2 py-2 bg-amber-50 "}>
//                                           {type}
//                                     </button>
//                               ))}
//                         </div>
//                   )}
//             </div>
//       );
// }
