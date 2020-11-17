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
      <h3>ADD A NEW SONG</h3>
      <form>
        <div>
          TITLE<span className="required">*</span>
        </div>
        <div>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          ARTIST<span className="required">*</span>
        </div>
        <input
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
        />
        <div>
          TIME<span className="required">*</span>
        </div>
        <div>
          <input
            type="text"
            name="time"
            value={formData.time}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleAddSong}>ADD NEW SONG</button>
      </form>
    </section>
  );
}

export default Form;
