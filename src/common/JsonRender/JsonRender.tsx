import React from "react";

import { JsonRenderProps } from "../../interfaces";

export const JsonRender: React.FC<JsonRenderProps> = ({
  data,
  depth,
  actualRoute,
}) => {
  if (Array.isArray(data)) {
    return <>array</>;
  } else if (typeof data === "object" && data !== null) {
    return <>object</>;
  } else {
    return <>primitives</>;
  }
};
