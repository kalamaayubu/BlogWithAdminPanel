import PropTypes from 'prop-types';


function ArticleHero({ image }) {
  
  return (
    <div className='flex flex-col justify-center items-center relative mb-10'>
      <img src={image} alt="Article Hero Image" className='max-h-[500px] object-cover w-[95%] mt-4'/>
    </div>
  )
}

// Props Validation
ArticleHero.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ArticleHero
