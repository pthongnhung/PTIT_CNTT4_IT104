import React from "react";

export default function Bai5() {
  return (
    <div className="bg-blue-300 w-[300px] h-[300px] flex justify-center items-center border-blue-900 border-1">
      <div className="relative bg-blue-200 w-[200px] h-[150px] rounded-lg p-4  border-blue-900 border-1">
        <p className="text-gray-700 ">Relative parent</p>
        <button className="absolute bottom-0 left-0 bg-blue-500 text-white px-3 py-1 rounded-lg  border-blue-900 border-1">
          Absolute child
        </button>
      </div>
    </div>
  );
}
