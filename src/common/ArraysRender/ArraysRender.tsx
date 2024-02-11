import React, { useState } from 'react';
import "./ArraysRender.css";
import { ArraysComponentProps } from '../../interfaces';
import { ObjectsRender } from '../ObjectsRender/ObjectsRender';
import { PrimitivesRender } from '../PrimitivesRender/PrimitivesRender';

export const ArraysRender: React.FC<ArraysComponentProps> = ({ keyName, value, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setIsExpanded(!isExpanded);
    };

    const renderArrayItem = (item: any, index: number) => {
        const itemType = typeof item;
        if (itemType === 'object' && item !== null) {
            return Array.isArray(item) ? (
                <div key={index}>
                  <ArraysRender keyName={`Item ${index}`} value={item} depth={depth + 1} />
                </div>
            ) : (
                <div key={index}>
                  <ObjectsRender value={item} depth={depth + 1} />
                </div>
            );
        } else {
            return <div key={index}><PrimitivesRender keyName={`Item ${index}`} value={item} /></div>;
        }
    };
  
    return (
      <div className='arraysDesign'>
        <div className={'keyArray'} onClick={toggleExpand}>
          {keyName}: [{value.length}] {isExpanded ? '[-]' : '[+]'}
        </div>
        {isExpanded && (
          <div>
            <br/>
            {value.map((item, index) => renderArrayItem(item, index))}
          </div>
        )}
      </div>
    );
};
