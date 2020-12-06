import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const emptySong = {
    title: "",
    artist: "",
    time: "",
  };
  const [formData, setFomData] = useState(emptySong);

  const handleChange = (event) => {
    setFomData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleAddSong = (event) => {
    event.preventDefault();
    props.addSong({ ...formData });
    setFomData(emptySong);
  };

  return (
    <section>
      <h3 className="section-header">Add a new song</h3>
      <form className="form-container">
        <label htmlFor="title">
          {" "}
          TITLE<span className="required">*</span>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="artist">
          {" "}
          ARTIST<span className="required">*</span>
        </label>
        <input
          type="text"
          name="artist"
          id="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <label htmlFor="time">
          TIME<span className="required">*</span>
        </label>
        <input
          type="text"
          name="time"
          id="time"
          value={formData.time}
          onChange={handleChange}
        />
        <div className="button-row">
          <button id="form-button" onClick={handleAddSong}>
            ADD NEW SONG
          </button>{" "}
        </div>
      </form>
    </section>
  );
}

export default Form;
