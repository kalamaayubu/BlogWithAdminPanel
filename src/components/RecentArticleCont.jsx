import { useContext } from "react";
import { Link } from "react-router-dom";
import { ArticlesContext } from "../context/ContextProvider";



function RecentArticleCont() {
  const { articles, loading, error } = useContext(ArticlesContext);
  console.log(articles);
  
  // Conditional rendering 
  if (loading) return <div>lOADING...</div>
  if (error) return <div>Error: {error}</div>

  // Check if articles id defined and has content
  if (!articles || articles.length === 0) return <div>No article available</div>

  return (
    <div className='w-[80%]'>
      {articles.map((article, index) => (
        <Link key={index} to={`/articles/${article.id}`}>
          <div className='mb-10 xl:flex xl:gap-4 cursor-default'>
            <img src={article.image} alt="Article Image" className='cursor-pointer h-auto hover:opacity-80'/>
            <div>
                <p className='font-semibold cursor-pointer hover:text-green-600 text-[1.2rem]'>{article.title}</p>
                <p className='font-bold text-2xl hover:underline cursor-pointer'>{article.subtitle}</p>
                <p className='font-extralight'>{article.postDate}</p>
                <p className='font-light text-[1.2rem]'>{article.summary}</p>
            </div>
          </div>
        </Link> 
      ))}
    </div>
  );
}

export default RecentArticleCont;
