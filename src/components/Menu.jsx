import { useContext, useEffect, useRef } from "react"
import { MenuContext } from "../context/ContextProvider"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Theme from "./Theme";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Menu() {
  const navigate = useNavigate();

    // State to manage show or hide of the menu
    const { isMenuVisible, setIsMenuVisible } = useContext(MenuContext);
    const menuRef = useRef(null);

    // Effect to handle clicks outside the menu
    useEffect(() => {
      // Function to check if click is outside the menu
      const handleClickOutside = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
          hideMenu();
        }
      };

      // Add event listener on mount
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup event listener on ounmount
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Function to toggle menu
    const hideMenu = () => {
        setIsMenuVisible(false);
    };

    // Function to Navigate to login page
    const navigateToLogin = () => {
      hideMenu();
      navigate('/login');
    }
        
  return (
    <nav 
      ref={menuRef}
      className={`fixed top-0 bottom-0 right-0 z-30 bg-gray-100 dark:bg-gray-800 text-black dark:text-white transition-all duration-[800ms] xl:hidden
      ${isMenuVisible ? 'opacity-100 w-[60%]' : 'opacity-0 w-[0%]'}`}
    >
      <FontAwesomeIcon 
        icon={faClose} 
        onClick={hideMenu}
        className="ring-2 ring-black dark:ring-white px-2 py-1 m-2 hover:text-red-600"
      />
      <ul className="flex flex-col justify-center align-center gap-2 p-4 xl:flex-row">
        <li className="hover:text-green-600 cursor-pointer hover:dark:bg-gray-700 px-4 py-3 hover:bg-gray-200 transition-all duration-300">
            <Link to='/'> Home </Link>
        </li>
        <li className="hover:text-green-600 cursor-pointer hover:dark:bg-gray-700 px-4 py-3 hover:bg-gray-200 transition-all duration-300">
            About Us
        </li>
        <div className="cursor-pointer flex justify-between px-4 py-3 hover:bg-gray-200 transition-all duration-300 group dark:hover:bg-gray-700">
            <span className="">Categories</span>
            <FontAwesomeIcon 
              icon={faChevronUp} 
              className="w-4 h-4 text-gray-600 dark:text-gray-300 transition-transform duration-300 rotate-90 group-hover:rotate-180"
            />
          <hr className="bg-black"/>
          <ul className="absolute border-t border-t-gray-300 m-auto right-4 left-4 justify-center align-center flex-col w-[] mt-9 bg-white dark:bg-gray-600 text-black dark:text-white hidden group-hover:flex transition-all duration-300">
            <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-400 dark:hover:bg-gray-500 transition-all duration-300"> Spiritual </li>
            <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-400 dark:hover:bg-gray-500 transition-all duration-300"> Mental </li>
            <li className="px-4 py-2 hover:bg-gray-300 hover:text-green-400 dark:hover:bg-gray-500 transition-all duration-300">  Physical </li>        
          </ul>
        </div>

        <li className="hover:text-green-600 cursor-pointer hover:dark:bg-gray-700 px-4 py-3 hover:bg-gray-200 transition-all duration-300">
          Books
        </li>

        <li className=" cursor-pointer hover:dark:bg-gray-700 px-4 py-3 hover:bg-gray-200 transition-all duration-300">
          <Theme />
        </li>
        
        <button onClick={navigateToLogin} className="px-4 py-2 bg-green-600 hover:bg-green-500">
          Login 
        </button>
      </ul>
    </nav>
  )
}

export default Menu
