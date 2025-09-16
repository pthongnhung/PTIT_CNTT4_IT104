import React, { useEffect } from "react";
import { createStudent } from "./CreateStudent";

export default function Ex06() {
  useEffect(() => {
    createStudent();
  }, []);
  return <div></div>;
}
