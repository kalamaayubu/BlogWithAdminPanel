import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import SocialMedia from './SocialMedia';
import { Link } from 'react-router-dom';



function ArticleContent({ article }) {
        
  return (
    <div className='flex flex-col justify-center items-center my-15 mt-20 w-[80%] m-auto relative'>
      <SocialMedia />
      <p className='font-bold text-4xl'>
        {article.title}
      </p>
      <p className='flex gap-4 sm:gap-6 xl:gap-8 font-light mb-10'>
        <span className='italic'>Writen by</span>
        <Link to={`/authors/${article.id}`}>
          <span className='hover:text-green-700 cursor-pointer hover:underline hover:font-normal transition-all duration-700'>
            {article?.author || 'Unknown Author'}
          </span>
        </Link>
        <span className='group cursor-pointer'>
          <FontAwesomeIcon icon={faComment} className='group-hover:text-blue-700' />
          <span className='group-hover:text-green-600 mx-[1px]'>{article?.comments || 0}</span>
        </span>
        <span className='group cursor-pointer'>
          <FontAwesomeIcon icon={faThumbsUp} className='group-hover:text-green-700' />
          <span className='group-hover:text-green-600 mx-[1px]'>{article?.likes || 0}</span>
        </span>
      </p>
      <div className='font-light text-[1.3rem]'>
        <p className='mb-4'>{article?.summary || 'No content available'}</p>
        <div className='mb-4'>
          <img src={article?.content?.images[0]} alt="" />
        </div>
        <p className='mb-4'>{article?.summary}</p>
        <br />
        <h1 className='font-semibold text-3xl lg:text-4xl mb-3'>Summary</h1>
        <p className='mb-4'>{article?.summary}</p>

      </div>
    </div>
  );
}

// Props Validation
ArticleContent.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    likes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
    summary: PropTypes.number.isRequired,
    content: PropTypes.shape({
        text: PropTypes.string,
        images: PropTypes.arrayOf(PropTypes.string),
    })
  }).isRequired,
};

export default ArticleContent;
