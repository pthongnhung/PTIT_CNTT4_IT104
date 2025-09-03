import React from "react";

export default function Bai8() {
  return (
    <div className="p-10 mt-8">
      <div>
        <div className="flex justify-start gap-5 p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.1. Các phần tử nằm bên trái
        </p>
      </div>

      <div>
        <div className="flex justify-end gap-5 p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.2. Các phần tử nằm bên phải
        </p>
      </div>

      <div>
        <div className="flex justify-center space-x-4 p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.3. Các phần tử nằm ở giữa
        </p>
      </div>

      <div>
        <div className="flex justify-between p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.4. Các phần tử giãn ra hai bên
        </p>
      </div>

      <div>
        <div className="flex justify-around p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.5. Các phần tử giãn đều 2 bên
        </p>
      </div>

      <div>
        <div className="flex justify-evenly p-4 border rounded">
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            01
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            02
          </p>
          <p className="w-[50px] h-[50px] bg-blue-600 text-white flex items-center justify-center rounded">
            03
          </p>
        </div>
        <p className="italic text-center mt-2">
          Hình 1.6. Các phần tử giữa đều
        </p>
      </div>
    </div>
  );
}
