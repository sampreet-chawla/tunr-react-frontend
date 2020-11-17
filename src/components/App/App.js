import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import {
  BACKEND_URL,
  PLAYLIST_TITLE,
  FAVORITE_SONG_LIST_TITLE,
} from "./../../Constants";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Playlist from "../Playlist/Playlist";
import Form from "../Form/Form";

function App() {
  const [songs, setSongs] = useState([]);

  const getSongs = async () => {
    try {
      const data = await axios.get(`${BACKEND_URL}/songs`);
      setSongs(data.data);
    } catch (err) {
      console.log("Error from axios: ", err.message);
    }
  };

  useEffect(() => {
    getSongs();
  }, []);

  const favSongs = songs.filter((song) => song.is_fav);

  const deleteSong = async (songId) => {
    try {
      const data = await axios.delete(`${BACKEND_URL}/songs/${songId}`);
      console.log("Deleted song: ", data.data);
      getSongs();
    } catch (err) {
      console.log("Error from axios: ", err.message);
    }
  };

  const updateFavSong = async (song) => {
    try {
      console.log("Adding song: ", song);
      const data = await axios({
        method: "PUT",
        url: `${BACKEND_URL}/songs/${song.id}`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(song),
      });
      console.log("Updated song: ", data.data);
      getSongs();
    } catch (err) {
      console.log("Error Updating favorite: ", err.message);
    }
  };

  const addSong = async (song) => {
    const newSong = { ...song, is_fav: false };
    console.log(newSong);
    try {
      console.log("Adding song: ", song);
      const data = await axios({
        method: "POST",
        url: `${BACKEND_URL}/songs`,
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(newSong),
      });
      console.log("Added song: ", data.data);
      getSongs();
    } catch (err) {
      console.log("Error Adding song: ", err.message);
    }
  };

  return (
    <div className="App">
      App Component <i className="fas fa-heart"></i> and{" "}
      <i className="far fa-heart"></i>
      <Header />
      <main>
        <Playlist
          label={PLAYLIST_TITLE}
          songs={songs}
          deleteSong={deleteSong}
          updateFavSong={updateFavSong}
        />
        <Playlist
          label={FAVORITE_SONG_LIST_TITLE}
          songs={favSongs}
          deleteSong={deleteSong}
          updateFavSong={updateFavSong}
        />
        <Form addSong={addSong} />
      </main>
    </div>
  );
}

export default App;
