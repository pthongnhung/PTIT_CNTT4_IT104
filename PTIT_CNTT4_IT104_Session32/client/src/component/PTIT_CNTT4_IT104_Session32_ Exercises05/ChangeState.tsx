import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { CompanyState } from "./store/companyReducer";

export default function ChangeState() {
  const dispatch = useDispatch();
  const company = useSelector((state: any) => state.companyState.company);

  const handleChange = () => {
    dispatch({ type: "CHANGE_COMPANY" });
  };

  return (
    <div>
      <h2>Company: {company}</h2>
      <button onClick={handleChange}>Change state</button>
    </div>
  );
}
