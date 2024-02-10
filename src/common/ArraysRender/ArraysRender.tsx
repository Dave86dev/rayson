import React, { useState } from 'react';
import "./ArraysRender.css";

import { ArraysComponentProps } from '../../interfaces';

export const ArraysRender: React.FC<ArraysComponentProps> = ({ keyName, value }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => setIsExpanded(!isExpanded);
  
    return (
      <div className='arraysDesign'>
        <div className={'keyArray'} onClick={toggleExpand}>
          {keyName}: [{value.length}] {isExpanded ? '[-]' : '[+]'}
        </div>
        {isExpanded && (
          <ul>
            {value.map((item, index) => (
              <li key={index}>
                Item {index + 1}: {JSON.stringify(item)}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };