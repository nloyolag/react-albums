import React from 'react';
import albumImage from '../datasource/album.jpg';
import { Album } from '../types';

interface AlbumContainerProps {
  album: Album
}

const AlbumContainer: React.SFC<AlbumContainerProps> = ({album}) => {
  const {title, artist, date, genre} = album;

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

export default AlbumContainer;