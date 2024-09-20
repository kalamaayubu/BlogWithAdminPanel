import { useContext } from "react"
import { ArticlesContext } from "../context/ContextProvider"
import { Link } from "react-router-dom";


function MoreArticles() {
  const { articles, loading, error } = useContext(ArticlesContext);

  if (error) return <div>Error: {error}</div>;
  if (loading) return <div>Loading...</div>;

  if (!articles || articles.length === 0) return <div>No articles available</div>;

  return (
    <div className="max-w-[80%] m-auto">
      <hr className='my-4 border border-green-600'/>
      <h1 className="font-bold underline mb-2 text-center">More articles:</h1>
      <div className='flex gap-6 flex-wrap justify-center'>
          {articles.map((article) => (
            <Link key={article.id} to={`/articles/${article.id}`}>
              <div className='max-w-60 cursor-pointer'>
                    <img src={article.image} alt="Article Image" className='cursor-pointer hover:opacity-70'/>
                    <p className='font-bold hover:text-green-600'>{article.title}</p>
                    <p className='font-semibold hover:underline'>{article.subtitle}</p>
                    <p className='font-extralight'>{article.postDate}</p>
                </div>
              </Link>
          ))}
      </div>
    </div>
  )
}

export default MoreArticles
