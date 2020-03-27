import React, { useState, useEffect } from 'react';
import {albumsData} from '../datasource/albums';
import Album from './album';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(albumsData);
  }, []);

  return albums.map((album) =>
    <Album key={album.title + '_' + album.artist}
            title={album.title}
            artist={album.artist}
            date={album.date}
            genre={album.genre} />
  );  
}

export default AlbumList;