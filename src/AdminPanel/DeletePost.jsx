import { faTrashAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { deleteArticle, fetchArticles } from "../components/services/mockService";


function DeletePost() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all articles on component mount
        fetchArticles().then(data => {
            setArticles(data);
            setLoading(false);
        })
    }, []);

    const handleDelete = (id) => {
        const confirmed= window.confirm('Are you sure you want to delete this post? This action is cannot be reversed.');
        if (confirmed) {
            deleteArticle(id).then((success) => {
                if (success) {
                    setArticles(articles.filter((article) => article.id === id));
                    alert('Post deleted successfully.');
                } else {
                    alert('Failed to delete the post. Try again later.');
                }
            });
        } 
    };

    if (loading) {
        return <div>Loading articles...</div>
    }

  return (
    <div className="delete-post p-4">
      <h2 className="text-center p-4 font-bold text-2xl lg:text-3xl 2xl:text-4xl">Delete Posts</h2>
      <div style={{gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr)'}} className="grid gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white group rounded-lg shadow-sm hover:shadow-lg p-4 border dark:border-gray-800 dark:hover:border hover:cursor-default dark:hover:border-red-600 dark:bg-gray-800">
            <img src={article.image} alt={article.title} className="w-full h-50 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <button 
              className="text-red-600 group-hover:opacity-100 opacity-50 hover:text-red-600"
              onClick={() => handleDelete(article.id)}
            >
              <FontAwesomeIcon icon={faTrashAlt}/> Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DeletePost
