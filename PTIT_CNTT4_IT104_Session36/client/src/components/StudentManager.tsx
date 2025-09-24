import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../store/slices/userSlice";

export default function StudentManager() {
  const result = useSelector((data: any) => {
    console.log("Data", data.users.users);
    return data.users.users;
  });
  const dispatch: any = useDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  return (
    <div>
      <h1>Quan li user</h1>
      <ul>
        {result.map((item:any, index:number) => {
            return (
              <div>
                    <li key={index}>{item.name}</li>
                    <button>xoa</button>
              </div>
            );
        })}
      </ul>
    </div>
  );
}
