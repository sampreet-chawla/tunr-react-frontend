import React from "react";
import "./Playlist.css";
import { PLAYLIST_TITLE } from "../../Constants";

function Playlist({ label, songs, deleteSong, updateFavSong }) {
  // Update Favorite Status for a song
  const handleFavorite = (event, song) => {
    event.preventDefault();
    const updatedSong = { ...song, is_fav: !song.is_fav };
    updateFavSong(updatedSong);
  };

  // Handle Delete request for a song
  const handleDeleteSong = (event, songId, songName) => {
    event.preventDefault();
    if (
      window.confirm(`Are you sure you want to delete the song: ${songName}`)
    ) {
      deleteSong(songId);
    }
  };

  // Load Song List
  const loadSongList = () => {
    return songs.map((song) => {
      // Style the isFavourite Icon
      const isFavClassName = song.is_fav ? "fas fa-heart" : "far fa-heart";
      const isFavJSX = (
        <i
          className={isFavClassName}
          style={{ color: "red" }}
          onClick={(e) => handleFavorite(e, song)}
        ></i>
      );

      // Build Song List
      return (
        <div className="song-details" key={song.id}>
          <p>
            {song.title} <br />
            <span className="song-time">{song.time}</span>
          </p>
          <p>{song.artist}</p>
          <p>{isFavJSX}</p>
          <p>
            <button onClick={(e) => handleDeleteSong(e, song.id, song.title)}>
              X
            </button>
          </p>
        </div>
      );
    });
  };

  // Display songs in Playlist.
  if (songs && songs.length > 0) {
    return (
      <section>
        <h3 className="section-header">{label}</h3>
        <div className="playlist-header">
          <p>
            Song, <span className="song-time">Time</span>
          </p>
          <p>Artist</p>
          <p>Fav</p>
          <p>Remove</p>
        </div>
        <hr />
        {loadSongList()}
      </section>
    );
  } else if (label === PLAYLIST_TITLE) {
    // Return message when there are no songs in Playlist.
    return <p>Please add songs to the Playlist.</p>;
  } else {
    // Return nothing for no favorites.
    return <p></p>;
  }
}

export default Playlist;
