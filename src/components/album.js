import React from 'react';

const Album = props => {
  return (
    <div className="album">
      <img src="" alt="Album cover" />
      <h2>{props.title}</h2>
      <h3>{props.artist}</h3>
      <p>{props.date}</p>
      <p>{props.genre}</p>
    </div>
  );
}

export default Album;