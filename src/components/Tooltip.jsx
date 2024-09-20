import { useTooltip } from "../context/TooltipContextProvider";
import ReactDOM from 'react-dom';


function Tooltip() {
    const { tooltip, hideTooltip } = useTooltip();

    if (!tooltip.visible) return null;

    const { content, position } = tooltip;

  return ReactDOM.createPortal(
    <div
        onMouseLeave={hideTooltip}
        style={{ top: position.y, left: position.x, }}
        className="absolute ml-3 bg-gray-200 dark:bg-gray-500 bg-opacity-95 transition-opacity duration-700 dark:text-white p-2 rounded-sm pointer-events-none"
    >
      {content}
    </div>,
    document.body // Render tooltip to the body
  );
};

export default Tooltip
