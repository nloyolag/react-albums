import React from 'react';

const Search = ({onChange}) => {
  return (
    <form>
      <input type="text" className="input" onChange={onChange} placeholder="Search..." />
    </form>
  );
}

export default Search;