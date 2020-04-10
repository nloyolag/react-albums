import React, { useState, useEffect } from "react";
import { albumsData } from "../datasource/albums";
import AlbumContainer from "./album-container";
import Search from "./search";
import { Album } from "../types"

const AlbumList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  }

  const filterAlbums = () => {
    const filteredAlbums = albumsData.filter(a =>
      Object.keys(a).some(
        k =>
          k
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
            <AlbumContainer key={album.title + "_" + album.artist} album={album} />
          ))}
      </div>
    </div>
  );
};

export default AlbumList;
