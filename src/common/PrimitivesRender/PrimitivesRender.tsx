import React from "react";
import "./PrimitivesRender.css";

import { PrimitivesComponentProps } from "../../interfaces";

export const PrimitivesRender: React.FC<PrimitivesComponentProps> = ({
  keyName,
  value,
}) => (
  <div className="primitivesDesign">
    {keyName !== "" && (
      <>
        <div className="key">{keyName}</div>
        {": "}
      </>
    )}{" "}
    {`${value !== null ? value.toString() : "null"}`}
  </div>
);
