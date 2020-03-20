import React from "react";
import {albums} from "../datasource/albums";
import Album from "./album";

class AlbumList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {albums: []};
  }

  componentDidMount() {
    this.setState({
      albums: albums
    });
    console.log("Rendering album list: ", albums);
  }

  render() {
    return this.state.albums.map((album) =>
      <Album key={album.title + '_' + album.artist}
             title={album.title}
             artist={album.artist}
             date={album.date}
             genre={album.genre} />
    );
  }
}

export default AlbumList;