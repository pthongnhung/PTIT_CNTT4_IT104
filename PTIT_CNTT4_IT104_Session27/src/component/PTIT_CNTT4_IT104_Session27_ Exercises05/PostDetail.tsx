import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "./Data";

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);

  if (!post) return <p>Bài viết không tồn tại.</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
