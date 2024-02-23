import React, { useState } from "react";
import { ObjectsComponentProps } from "../../interfaces";
import { ArraysRender } from "../ArraysRender/ArraysRender";
import { PrimitivesRender } from "../PrimitivesRender/PrimitivesRender";
import { JsonCopy } from "../../utils/interfaceCopy";
import "./ObjectsRender.css";

export const ObjectsRender: React.FC<ObjectsComponentProps> = ({
  keyName,
  value,
  depth = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0 });

  const toggleExpand = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  const showTooltipAtPosition = (x: number, y: number) => {
    setTooltipPosition({ left: x, top: y });
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 1500); 
  };

  const exportHandler = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>, keyName: string, objectToCopy: any) => {
    event.stopPropagation();
    const { clientX, clientY } = event; 

    const success = await JsonCopy({ keyName, data: objectToCopy });
    if (success) {
      showTooltipAtPosition(clientX, clientY); 
    }
  };

  return (
    <div className="keyObject">
      <div className="expanderKeyValue">
        <div className="keyName">{keyName !== "" ? `${keyName}:` : "{}:"}</div>
        <div className="expanderDesign" onClick={toggleExpand}>
          {isExpanded ? "[-]" : "[+]"}
        </div>
        {isExpanded && (
          <div onClick={(event) => exportHandler(event, keyName, value)} className="tsExport">
            {"<TS Int. Export>"}
          </div>
        )}
      </div>
      {isExpanded && (
        <div>
          {Object.entries(value).map(([nestedKey, nestedValue], index) => {
            const isObject = nestedValue !== null && typeof nestedValue === "object" && !Array.isArray(nestedValue);
            const isArray = Array.isArray(nestedValue);
            return (
              <div
                key={index} 
                style={{ marginLeft: `${(depth + 1) * 20}px` }} 
              >
                {isArray ? (
                  <ArraysRender
                    keyName={nestedKey}
                    value={nestedValue}
                    depth={depth + 1}
                  />
                ) : isObject ? (
                  <ObjectsRender
                    keyName={nestedKey}
                    value={nestedValue}
                    depth={depth + 1}
                  />
                ) : (
                  <PrimitivesRender keyName={nestedKey} value={nestedValue} />
                )}
              </div>
            );
          })}
        </div>
      )}
      {showTooltip && (
        <div
          className="tooltip"
          style={{
            left: tooltipPosition.left,
            top: tooltipPosition.top,
          }}
        >
          Copied to clipboard!
        </div>
      )}
    </div>
  );
};
