import React, { useState, useEffect } from "react";
import { albumsData } from "../datasource/albums";
import Album from "./album";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    setAlbums(albumsData);
  }, []);

  return (
    <div className="albumsList">
      {albums.map(album => (
        <Album
          key={album.title + "_" + album.artist}
          album={album}
        />
      ))}
    </div>
  );
};

export default AlbumList;
