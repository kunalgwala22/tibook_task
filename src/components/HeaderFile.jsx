// import React from "react";

// function HeaderFile() {
//   return (
//     <div className="border-b p-4 flex justify-between items-center" >
//       <div className="flex items-center space-x-2">
//         <h1 className="text-xl font-bold text-black px-3">Sale Invoice</h1>
//         <span className="text-gray-500 px-3">  Home - Sales</span>
//         -<span className="text-black-400">Invoice</span>
       
//       </div>

     
//       <div className="space-x-2 flex">
//         <button className="bg-gray-100 text-black px-4 py-2 rounded flex items-center">
//           <span className="mr-1">←</span> Back
//         </button>
//         <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded">
//           Save & New
//         </button>
//         <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded">
//           Save Invoice
//         </button>
//       </div>  
//     </div>
//   );
// }

// export default HeaderFile;
import React from "react";

function HeaderFile() {
  return (
    <div className="border-b p-4 flex flex-wrap justify-between items-center">
      {/* Left Section: Title and Breadcrumb */}
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold text-black px-3">Sale Invoice</h1>
        <div className="hidden sm:flex items-center space-x-1">
          <span className="text-gray-500 px-3">Home - Sales</span> -  
          <span className="text-gray-500">Invoice</span>
        </div>
      </div>

      {/* Right Section: Buttons */}
      <div className="flex space-x-2 mt-2 sm:mt-0">
        <button className="bg-gray-100 text-black px-4 py-2 rounded flex items-center">
          <span className="mr-1">←</span> Back
        </button>
        <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded">
          Save & New
        </button>
        <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded">
          Save Invoice
        </button>
      </div>
    </div>
  );
}

export default HeaderFile;
