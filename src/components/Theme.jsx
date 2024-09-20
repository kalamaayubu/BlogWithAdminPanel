import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ContextProvider';
import { useTooltip } from '../context/TooltipContextProvider';


function Theme() {
    const { showTooltip, hideTooltip } = useTooltip(); // Use showTooltip and hideTooltip functions from useTooltip hook
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

    // Handle mouse enter
    const handleMouseEnter = (e, message) => {
      const rect = e.target.getBoundingClientRect();
      showTooltip(message, { x: rect.x + rect.width / 2, y: rect.y });
    };

    // Handle mouse leave
    const handleMouseLeave = () => {
      hideTooltip();
    }

    // Apply theme class to the body element whenever isDarkMode state changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Toggle theme
    const toggleTheme = () => {
        setIsDarkMode(prevTheme => !prevTheme); 
    }

  return (
    <div className='cursor-pointer mx-4'>
      <FontAwesomeIcon 
        onMouseEnter={(e) => handleMouseEnter(e, `Switch to ${isDarkMode ? 'Light' : 'Dark'} Theme`)}
        onMouseLeave={handleMouseLeave}
        icon={isDarkMode ? faSun : faMoon} 
        onClick={toggleTheme}
    />
    </div>
  );
};

export default Theme
