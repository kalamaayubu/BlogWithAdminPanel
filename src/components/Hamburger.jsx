import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MenuContext } from "../context/ContextProvider";

function Hamburger() {
    const { isMenuVisible, setIsMenuVisible } = useContext(MenuContext);

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
    };

  return (
    <div className="xl:hidden">
      <FontAwesomeIcon 
        icon={faBars} 
        onClick={toggleMenu} 
        className="cursor-pointer"
      />
    </div>
  )
}

export default Hamburger
