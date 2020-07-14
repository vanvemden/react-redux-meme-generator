import React, { useState } from "react";

const INITIAL_STATE = { top: "", url: "", bottom: "" };

const MemeForm = ({ addMeme }) => {

  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({ ...fData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addMeme(formData);
    setFormData(INITIAL_STATE);
  }

  return (
    <form className="MemeForm" onSubmit={handleSubmit}>
      <label htmlFor="top">top text</label>
      <input name="top" id="top" placeholder="top text" value={formData.top} onChange={handleChange} />
      <label htmlFor="url">image url</label>
      <input name="url" id="url" placeholder="image url" value={formData.url} onChange={handleChange} />
      <label htmlFor="bottom">bottom text</label>
      <input name="bottom" id="bottom" placeholder="bottom text" value={formData.bottom} onChange={handleChange} />
      <button>Submit</button>
    </form>

  );
};

export default MemeForm;