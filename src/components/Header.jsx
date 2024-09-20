import logo from '../assets/logo.png'
import SearchBar from './SearchBar'
import Hamburger from './Hamburger'
import Theme from './Theme'
import Menu from './Menu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from 'react-router-dom'


function Header() {
  const location = useLocation(); // Get the current location

  return (
    <div className="w-full px-10 py-1 shadow-md flex justify-between items-center dark:shadow-sm dark:shadow-gray-400">
      <img src={logo} alt="Logo" className='h-20 xl:h-24'/>
      <SearchBar />

      {/* The toggleable menu hidden from xl and larger screens */}
      <Menu />

      {/* Menu for xl and lager screens */}
      <div className='hidden xl:flex'>
        <ul className="flex flex-col justify-center items-center  text-lg gap-6 p-4 xl:flex-row">
          <li className="cursor-pointer">
            <Theme />
          </li>
          <li className="hover:text-green-600 cursor-pointer hover:font-semibold">
            <Link to='/'> Home </Link>
          </li>
          <li className="hover:text-green-600 cursor-pointer hover:font-semibold">
              About Us
          </li>

          <div className="cursor-pointer flex items-center gap-2 px-4 py-3 transition-all duration-300 group dark:text-black hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800">
            <span className='dark:text-white'>Categories</span>
            <FontAwesomeIcon 
              icon={faChevronDown} 
              className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 group-hover:rotate-180"
            />
            <hr className="bg-black"/>
            <ul className="fixed z-30 border-t border-t-gray-300 right-0 top-9 justify-center align-center flex-col w-[50%] mt-9 bg-gray-200 dark:bg-gray-800 text-black dark:text-white hidden group-hover:flex transition-all duration-300">
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-600 dark:hover:bg-gray-700 transition-all duration-300"> 
                <Link to='/categories/spirituality'> Spirituality </Link>  
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-600 dark:hover:bg-gray-700 transition-all duration-300">
                <Link to='/categories/cognitive'> Cognitive </Link>  
              </li>
              <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-600 dark:hover:bg-gray-700 transition-all duration-300">  
                <Link to='/categories/physicality'> Phisicality </Link>  
              </li>        
            </ul>
          </div>

          <li className="hover:text-green-600 cursor-pointer hover:font-semibold">
              Books
          </li>
          {location.pathname !== '/dashboard' ? (
            <Link to='/login'> 
              <button className="px-4 py-2 bg-green-600 hover:bg-green-500">
                Login 
              </button>
            </Link> 
          ) : (
            <Link to='/login'>
              <button className="px-4 py-2 bg-red-600 hover:bg-red-500">
                Logout 
              </button>
            </Link> 
          )}
        </ul>
      </div>

      {/* Hamburger hidden in xl and larger screens */}
        <Hamburger />
    </div>
  )
}

export default Header
