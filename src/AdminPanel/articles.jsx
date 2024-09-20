import { useEffect, useState } from "react"
import { fetchArticles } from "../components/services/mockService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCirclePlus, faFileCircleXmark, faFilePen } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useTooltip } from "../context/TooltipContextProvider";

function Articles() {
    const { showTooltip, hideTooltip } = useTooltip();
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch all articles on component mount
        fetchArticles().then(data => {
            setArticles(data);
            setLoading(false);
        });

        // Cleanup function to hide tooltip on unmount
        return () => hideTooltip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Handle mouse enter
    const handleMouseEnter = (e, message) => {
      const rect = e.target.getBoundingClientRect();
      showTooltip(message, { x: rect.x + rect.width / 2, y: rect.y });
    };

    const handleMouseLeave = () => {
      hideTooltip();
    }

    if (loading) {
        return <div>Loading articles...</div>
    }
    
  return (
    <div className="delete-post p-4">
      <div className="w-[80%] max-w-xl m-auto px-3 flex justify-evenly text-xl mb-1 mt-8">
        <Link to='create'>
          <FontAwesomeIcon 
            icon={faFileCirclePlus} 
            onMouseEnter={(e) => handleMouseEnter(e, 'Create New Article')}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer text-green-700 xl:text-2xl"
          />        
        </Link>
        <Link to='update'>
          <FontAwesomeIcon 
            icon={faFilePen} 
            onMouseEnter={(e) => handleMouseEnter(e, 'Update Article')}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer text-blue-700 xl:text-2xl"
          />
        </Link>

        <Link to='delete'>
          <FontAwesomeIcon 
            icon={faFileCircleXmark} 
            onMouseEnter={(e) => handleMouseEnter(e, 'Delete Article')}
            onMouseLeave={handleMouseLeave}
            className="cursor-pointer text-red-700 xl:text-2xl"
          />        
        </Link>
      </div>
      <hr className="border border-1 border-green-600"/>
      <h2 className="text-center p-4 mt-4 font-bold text-2xl lg:text-3xl 2xl:text-4xl">Posts</h2>
      <div style={{gridTemplateColumns:'repeat(auto-fill, minmax(200px, 1fr)'}} className="grid gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white group rounded-lg shadow-sm hover:shadow-lg p-4 border dark:border-gray-800 dark:hover:border hover:cursor-default dark:bg-gray-800">
            <img src={article.image} alt={article.title} className="w-full h-50 object-cover rounded-md" />
            <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
            <p className="">{article.subtitle}</p>
            <p className="font-extralight">{article.postDate}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Articles
