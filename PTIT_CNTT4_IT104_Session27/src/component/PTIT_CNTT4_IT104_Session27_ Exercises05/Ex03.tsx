import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogLayout from "./BlogLayout";
import Posts from "./Posts";
import PostDetail from "./PostDetail";

export default function Ex03() {
  return (
    <Router>
      <Routes>
        <Route path="/blog" element={<BlogLayout />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}
