import React from 'react';

import { ObjectsComponentProps } from '../../interfaces';

export const ObjectsRender: React.FC<ObjectsComponentProps> = ({ keyName, value }) => {
  const keysCount = Object.keys(value).length;

  return (
    <div>
      <strong>{keyName}:</strong> Object containing {keysCount} properties.
    </div>
  );
};
