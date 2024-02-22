import React from 'react';

import { SearchInputProps } from '../../interfaces';

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, disabled }) => {
  return (
    <input
      aria-label="Search Data"
      type="text"
      autoCorrect="off"
      spellCheck="false"
      name="searching"
      autoComplete="off"
      disabled={disabled}
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
