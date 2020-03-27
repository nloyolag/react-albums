import React, { useState, useEffect } from "react";
import { albumsData } from "../datasource/albums";
import Album from "./album";
import Search from "./search";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const filterAlbums = () => {
    const filteredAlbums = albumsData.filter(a =>
      Object.keys(a).some(
        k =>
          a[k]
            .toString()
            .toLowerCase()
            .indexOf(searchQuery) !== -1
      )
    )
    
    setAlbums(filteredAlbums);
  }

  useEffect(() => {
    setAlbums(albumsData);
  }, []);

  useEffect(() => {
    filterAlbums();
  }, [searchQuery]);

  return (
    <div className="albumsWrapper">
      <Search onChange={handleInputChange} />
      <div className="albumsList">
        {albums
          .map(album => (
            <Album key={album.title + "_" + album.artist} album={album} />
          ))}
      </div>
    </div>
  );
};

export default AlbumList;
