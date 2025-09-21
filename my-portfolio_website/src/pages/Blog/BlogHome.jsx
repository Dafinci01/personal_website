// src/pages/Blog/BlogHome.jsx
import { Link } from "react-router-dom";
import posts from "../../assets/data/posts.json";

export default function BlogHome() {
  // Extract unique categories
  const categories = [...new Set(posts.map((p) => p.category))];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Blog</h1>
      <p>Pick a category to explore:</p>

      <ul className="space-y-2 mt-4">
        {categories.map((cat) => (
          <li key={cat}>
            <Link 
              to={`/blog/${cat}`} 
              className="text-blue-500 hover:underline"
            >
              {cat.toUpperCase()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
