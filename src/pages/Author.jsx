import Comment from '../components/CommentSection';
import SocialMedia from '../components/Author/SocialMedia';
import { useContext } from 'react';
import { ArticlesContext } from '../context/ContextProvider';
import { useParams } from 'react-router-dom';


function Author() {
  const { articles } = useContext(ArticlesContext);
  const { id } = useParams();

  const article = articles.find((article) => article.id.toString() === id);

  if (!article) return <div>Author not found</div>
    
  return (
    <div className='flex flex-col m-auto justify-center max-w-[80%]'>
      <h1 className='font-extrabold text-center text-4xl my-10'>{article.author}</h1>
      <img src={article.authorImg} alt="Author Image" className='rounded-full h-80 w-80 object-cover m-auto'/>
      <p className='mt-6 font-light text-xl mb-8'>{article.authorDescription}</p>

      <hr className='border border-green-500 m-auto w-full'/>
      <div>
        <h1 className='font-semibold'>Keep in touch</h1>
        <SocialMedia />
      </div>
      <Comment />
    </div>
  )
}

export default Author
