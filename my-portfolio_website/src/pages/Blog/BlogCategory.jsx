// src/pages/Blog/BlogCategory.jsx
import { useParams, Link } from "react-router-dom";
import posts from "../../assets/data/posts.json";

export default function BlogCategory() {
  const { category } = useParams();

  const filtered = posts.filter((p) => p.category === category);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">{category.toUpperCase()} Posts</h1>

      {filtered.length === 0 ? (
        <p>No posts found in this category.</p>
      ) : (
        <ul className="mt-4 space-y-2">
          {filtered.map((post) => (
            <li key={post.id}>
              <Link 
                to={`/blog/${category}/${post.id}`} 
                className="text-blue-500 hover:underline"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
