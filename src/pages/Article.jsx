import ArticleHero from "../components/Article/ArticleHero"
import ArticleContent from "../components/Article/ArticleContent"
import MoreArticles from "../components/MoreArticles"
import Comment from "../components/CommentSection"
import SocialMedia from "../components/Article/SocialMedia"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { ArticlesContext } from "../context/ContextProvider"


function Article() {
  const { articles, loading, error } = useContext(ArticlesContext); // Fetch articles from context
  const { id } = useParams(); // Get the article id from the URL

  // Parse the article ID from URL to find the article with the matching id
  const article = articles.find(article => article.id.toString() === id); // URL paramenters are always strings

  // Conditionally render
  if (error) return <div>Error: {error}</div>;
  if (!article) return <div>Article Not Found</div>;
  if (loading) return <div>Loading...</div>; 
  
  return (
    <div>
      <ArticleHero image={article.image} />
      <SocialMedia />
      <ArticleContent article={article} />
      <MoreArticles />
      <Comment />
    </div>
  )
}

export default Article

