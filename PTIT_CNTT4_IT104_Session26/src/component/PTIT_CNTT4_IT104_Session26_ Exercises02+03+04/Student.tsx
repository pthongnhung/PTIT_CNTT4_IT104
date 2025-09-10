import React, { useState, type ChangeEvent } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function Student() {
  const { name } = useParams();
  const [ isStatus, setIsStatus ] = useState<boolean>(false);
  const [studentName, setStudentName] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setStudentName(e.target.value);
    setIsStatus(false);
  };
  const [nameSearch, setSearchParamName] = useSearchParams();
  const handleClick = () => {
    setSearchParamName({
      name: studentName,
    });
  };

  return (
    <div>
      <h2>Thong tin sinh vien</h2>
      <h2>Ten sinh vien {name}</h2>
      <input
        type="text"
        placeholder="Nhap ten sinh vien"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Tim kiem</button>
      {isStatus && (<h2>Ket qua mong doi :{nameSearch.get("name")}</h2>)}
    </div>
  );
}
