import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import image2 from '../assets/image2.jpeg'
import image3 from '../assets/image3.jpeg'
import image4 from '../assets/image4.webp'
import image5 from '../assets/image5.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';


function RecentSliderHero() {
  // Array of images with their respective subheadings
  const slides = [
    {
      img: image2,
      subheading: 'Stay connected to nature',
    },
    {
      img: image3,
      subheading: 'Improve your mental strength',
    },
    {
      img: image4,
      subheading: 'Whatever soround you matters',
    },
    {
      img: image5,
      subheading: 'Nourishement of all your faculties',
    },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // Time between slides(5 second)
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Using a consistent className for all image containers */}
        {slides.map((slide, index) => (
          <div key={index} className='slider-item'>
            <div className='bg-transparent top-0 bottom-0 left-0 right-0 relative'>
              <img src={slide.img} alt="Harmonious life image" className='slider-image sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[500px] '/>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60"></div>
              {/* Text over the image */}
              <div className="absolute top-[34%] sm:top-[35%] md:top-[40%] lg:top-[42%] xl:top-[45%] left-[5%] flex flex-col text-white text-2xl font-bold z-10 max-w-[450px]">
                <p className="relative z-10 mt-3 mb-6 text-3xl sm:text-4xl">{slide.subheading}</p>
                <div className='px-3 flex flex-row items-center py-2 bg-white text-black rounded-full max-w-[178px]'>
                  <span className='font-semibold text-xl'>Explore more</span>
                    <FontAwesomeIcon 
                      icon={faArrowAltCircleRight} 
                      className='text-red-600 text-2xl ml-2 transition-all duration-300 hover:cursor-pointer hover:opacity-80 hover:text-[25px]'
                    />
                </div>
              </div>
              </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RecentSliderHero;
