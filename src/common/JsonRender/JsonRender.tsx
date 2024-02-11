import React from "react";
import { StackElement } from "../../interfaces";
import { ArraysRender } from "../ArraysRender/ArraysRender";
import { ObjectsRender } from "../ObjectsRender/ObjectsRender";
import { PrimitivesRender } from "../PrimitivesRender/PrimitivesRender";

import { JsonRenderProps } from "../../interfaces";

export const JsonRender: React.FC<JsonRenderProps> = ({data}) => {
  //Here we go .. let's rock with the iterative function

  const renderIteration = (json: unknown, parentPath = '') => {

    //let's see if you are a JSON and you are not null....
    if (typeof json === "object" && json !== null) {

      const stack: (StackElement & {parentPath: string})[] = Object.entries(json).map(([keyName, value]) => ({ keyName, value, parentPath }));
      const elements: JSX.Element[] = [];

      while(stack.length > 0){
        //careful with this in the future!, need to handle error....
        const { keyName, value, parentPath } = stack.pop()!;
        const currentPath = `${parentPath}${parentPath ? '.' : ''}${keyName}`;

        if (Array.isArray(value)) {
          elements.push(<div key={currentPath}><ArraysRender keyName={keyName} value={value} /></div>);
        } else if (typeof value === 'object' && value !== null) {
          elements.push(<div key={currentPath}><ObjectsRender value={value} /></div>);
        } else { 
          elements.push(<PrimitivesRender key={currentPath} keyName={keyName} value={value} />);
        }
        
      }

      //last first..
      return <div>{elements.reverse()}</div>;

    } else {
        return <>You didn't provide a valid JSON data!</>
    }
  };

  return <>{renderIteration(data)}</>;
};
