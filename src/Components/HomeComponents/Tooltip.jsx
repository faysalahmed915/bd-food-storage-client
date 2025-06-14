import React, { useState, cloneElement } from 'react';

const Tooltip = ({ children, text }) => {
  const [visible, setVisible] = useState(false);

  // Clone the child element and add glow styles when visible
  const childWithGlow = cloneElement(children, {
    className: `${
      visible ? 'ring-4 ring-blue-400 ring-opacity-75 shadow-lg' : ''
    } ${children.props.className || ''}`,
  });

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {childWithGlow}
      {visible && (
        <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded  text-white text-sm whitespace-nowrap z-10">
          {text}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2  rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
