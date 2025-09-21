// src/pages/Blog/BlogPost.jsx
import { useParams } from "react-router-dom";
import posts from "../../assets/data/posts.json";

export default function BlogPost() {
  const { category, postId } = useParams();

  const post = posts.find(
    (p) => p.category === category && p.id === postId
  );

  if (!post) {
    return <p className="p-6">Post not found.</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">Category: {post.category}</p>
      <div className="mt-4 text-lg leading-relaxed">{post.content}</div>
    </div>
  );
}
