import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./About";

import NotFound from "./NotFound";
import About from "./About";

export default function Ex07() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
