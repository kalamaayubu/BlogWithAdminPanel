import { createContext, useCallback, useContext, useState } from "react"
import PropTypes from "prop-types";


const TooltipContext = createContext();

export const TooltipProvider = ({children}) => {
  const [tooltip, setTooltip] = useState({
    content: null,
    position: { x: 0, y: 0 },
    visible: false,
  });

  // Show tooltip
  const showTooltip = useCallback((content, position) => {
    setTooltip({ content, position, visible: true });
  }, []);

  // Hide tooltip
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const hideTooltip = useCallback(() => {
    setTooltip(prev => ({ ...prev, visible: false }));
  })

  return (
    <TooltipContext.Provider value={{ tooltip, showTooltip, hideTooltip }} >
      {children}
    </TooltipContext.Provider>
  );
};

// Props validation
TooltipProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTooltip = () => useContext(TooltipContext);