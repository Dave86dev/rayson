import React from "react";
import data from "../../data/demoData.json";
import { StackElement } from "../../interfaces";

export const JsonRender: React.FC = ({}) => {
  //Here we go .. let's rock with the iterative function

  const renderIteration = (json: unknown) => {

    //let's see if you are a JSON and you are not null....
    if (typeof json === "object" && json !== null) {

      const stack: StackElement[] = Object.entries(json).map(([key, value]) => ({ key, value }));
      const elements: JSX.Element[] = [];

      while(stack.length > 0){
        //careful with this in the future!, need to handle error....
        const { key, value } = stack.pop()!;

        if (typeof value === 'object' && value !== null) {
            Object.entries(value).forEach(([childKey, childValue]) => {
              stack.push({ key: childKey, value: childValue });
            });
            elements.push(<div key={key}><strong>{key}:</strong></div>);
          } else {
            // Handle non-object values
            elements.push(<div key={key}>{key}: {String(value)}</div>);
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
