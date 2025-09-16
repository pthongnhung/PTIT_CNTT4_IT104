import React, { useEffect } from "react";
import { getStudentById } from "./GetStudentById";

export default function Ex05() {
  useEffect(() => {
    getStudentById(5);
  }, []);
  return <div></div>;
}
