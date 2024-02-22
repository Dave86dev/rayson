import React from 'react';

import { FetchInputProps } from '../../interfaces';

const FetchInput: React.FC<FetchInputProps> = ({ value, onChange }) => {
  return (
    <input
      aria-label="Fetch URL"
      type="text"
      autoCorrect="off"
      spellCheck="false"
      name="fetching"
      placeholder="Enter a URL that returns JSON data"
      autoComplete="off"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default FetchInput;
