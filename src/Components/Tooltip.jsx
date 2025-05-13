// export const Tooltip = () => {
//     return (
//         <>
//             <h1>Tooltip</h1>
//         </>
//     )
// }

import React, { useEffect, useState } from 'react';

function Tooltip({ text, children, position = 'up'}) {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const [posY, setPosY] = useState('125%');
  const [posX, setPosX] = useState('50%');

    useEffect(() => {
      setPosition();
    }, [])
    
  
  function setPosition(){
    switch (position) {
        case 'up':
                setPosY('125%');
                setPosX('50%');
            break;
        case 'down':
                setPosY('-125%');
                setPosX('50%');
            break;
        case 'left':
                setPosY('0');
                setPosX('400%');
            break;
        case 'right':
                setPosY('0');
                setPosX('-250%');
            break;
    }
  }
  

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
    >
      {children}
      {isTooltipVisible && (
        <div
          style={{
            position: 'absolute',
            zIndex: 1,
            // bottom: '125%',
            bottom: posY,
            left: posX,
            marginLeft: '-60px',
            width: '120px',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#fff',
            textAlign: 'center',
            borderRadius: '6px',
            padding: '5px 0',
            visibility: 'visible',
            opacity: 1,
            transition: 'opacity 0.3s',
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Tooltip text="This is a tooltip!">
//         <button>Hover me</button>
//       </Tooltip>
//     </div>
//   );
// }

export default Tooltip;