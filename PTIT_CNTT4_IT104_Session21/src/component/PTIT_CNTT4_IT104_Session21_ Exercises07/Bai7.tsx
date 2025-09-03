import React from "react";

export default function Bai77() {
  return (
    <div className=" flex items-center justify-center bg-white p-6">
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 9 }, (_, i) => (
          <div
            key={i}
            className="bg-[#d946ef] w-[250px] text-white  text-center text-xl h-24 flex items-center justify-center rounded-lg "
          >
            0{i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
