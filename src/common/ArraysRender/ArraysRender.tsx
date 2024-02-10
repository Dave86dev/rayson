import React from 'react';

import { ArraysComponentProps } from '../../interfaces';

export const ArraysRender: React.FC<ArraysComponentProps> = ({ keyName, value }) => {
  return (
    <div>
      <strong>{keyName}:</strong> Array with {value.length} items.
    </div>
  );
};
