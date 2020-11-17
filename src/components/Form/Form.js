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
      <h3 className="section-header">ADD A NEW SONG</h3>
      <form className="form-container">
        <div className="row">
          <div className="col-25">
            <label for="title">
              {" "}
              TITLE<span className="required">*</span>
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="artist">
              {" "}
              ARTIST<span className="required">*</span>
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="artist"
              id="artist"
              value={formData.artist}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-25">
            <label for="time">
              TIME<span className="required">*</span>
            </label>
          </div>
          <div className="col-75">
            <input
              type="text"
              name="time"
              id="time"
              value={formData.time}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <button id="form-button" onClick={handleAddSong}>
            ADD NEW SONG
          </button>{" "}
        </div>
      </form>
    </section>
  );
}

export default Form;
