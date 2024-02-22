import { JsonSearchProps } from "../interfaces";

export const JsonExplorer = ({
  dataJson,
  criteria,
}: JsonSearchProps): string => {
  const stack: Array<{ dataJson: any; actualRoute: string }> = [
    { dataJson, actualRoute: "" },
  ];

  while (stack.length > 0) {
    const stackItem = stack.pop();
    if (!stackItem) {
      return "Error deciphering JSON route";
    }

    const { dataJson: currentNode, actualRoute } = stackItem;

    if (typeof currentNode === "object" && currentNode !== null) {
      for (const [key, value] of Object.entries(currentNode)) {
        const newPath = Array.isArray(currentNode)
          ? `${actualRoute}[${key}]`
          : actualRoute
          ? `${actualRoute}.${key}`
          : key;

        if (newPath === criteria) {
          if (value === null) {
            return "null";
          } else if (typeof value !== "object") {
            return String(value);
          }
        } else if (typeof value === "object") {
          stack.push({ dataJson: value, actualRoute: newPath });
        }
      }
    } else if (actualRoute === criteria) {
      return String(currentNode);
    }
  }

  return "No match found";
};
