import React, { useState } from 'react';
import "./ObjectsRender.css";
import { ObjectsComponentProps } from '../../interfaces';
import { ArraysRender } from '../ArraysRender/ArraysRender'; 
import { PrimitivesRender } from '../PrimitivesRender/PrimitivesRender';

export const ObjectsRender: React.FC<ObjectsComponentProps> = ({
  value,
  depth = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation(); 
    setIsExpanded(!isExpanded);
  };

  return (
    // <div className='keyObject' style={{ marginLeft: `${depth * 0.8}em`, cursor: 'pointer' }} onClick={toggleExpand}>
    <div className='keyObject' style={{  cursor: 'pointer' }} onClick={toggleExpand}>
      {'{}'} {isExpanded ? '[-]' : '[+]'}
      {isExpanded && (
        <div>
          {Object.entries(value).map(([nestedKey, nestedValue]) => {
            const isObject = nestedValue !== null && typeof nestedValue === 'object' && !Array.isArray(nestedValue);
            const isArray = Array.isArray(nestedValue);
            return (
              <div key={nestedKey} style={{ marginLeft: `${(depth + 1) * 1}em` }}>
                {isArray ? (
                  <ArraysRender keyName={nestedKey} value={nestedValue} depth={depth + 1} />
                ) : isObject ? (
                  <ObjectsRender value={nestedValue} depth={depth + 1} />
                ) : (
                  <PrimitivesRender keyName={nestedKey} value={nestedValue} />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
