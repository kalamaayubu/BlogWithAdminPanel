import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { fetchArticles } from "../components/services/mockService";



// Create and export contexts
export const MenuContext = createContext(); // For hiding or showing the menu
export const ThemeContext = createContext(); // For theme toggling
export const ArticlesContext = createContext(); // For blog data management


function ContextProvider({ children }) {
    // STATE MANAGEMENT
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [articles, setArticles] = useState([]); // Articles state management
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('isDarkMode'); // Get saved theme from the localStorage
      return savedTheme ? JSON.parse(savedTheme) : false;
    });

    // Sync theme with localStorage when theme changes
    useEffect(() => {
      localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // Fetch articles from mock service when the ContextProvider mounts
    useEffect(() => {
      const loadArticles = async () => {
        setLoading(true);
        setError(null); // Reset error state before fetching
        try {
          const data = await fetchArticles(); // Get articles from mock service
          setArticles(data);
        } catch (error) {
          console.error('An Error occurred: ', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      loadArticles();
    }, []);

    // Values for the contexts to the child components
    const menuContextValue = { isMenuVisible, setIsMenuVisible };
    const themeContextValue = { isDarkMode, setIsDarkMode };
    const articlesContextValue = { articles, loading, error };

    return (
      // Provide the context values to the child components
      <MenuContext.Provider value={menuContextValue}>
        <ThemeContext.Provider value={themeContextValue}>
          <ArticlesContext.Provider value={articlesContextValue}>
            {children}
          </ArticlesContext.Provider>
        </ThemeContext.Provider>
      </MenuContext.Provider>
    );
}

// Props validation
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContextProvider;
