import React from 'react';
import albumImage from '../datasource/album.jpg';

const Album = props => {
  const {title, artist, date, genre} = props.album;

  return (
    <div className="album">
      <img src={albumImage} alt="Album cover" />
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <p>{date}</p>
      <p>{genre}</p>
    </div>
  );
}

export default Album;