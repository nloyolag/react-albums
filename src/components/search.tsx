import React from 'react';

export interface SearchProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.SFC<SearchProps> = ({onChange}) => {
  return (
    <form>
      <input type="text" className="input" onChange={onChange} placeholder="Search..." />
    </form>
  );
}

export default Search;