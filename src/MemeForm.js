import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import './MemeForm.css';

const MemeForm = () => {
  const INITIAL_STATE = { imageUrl: '', topText: '', bottomText: '' };
  const [ formData, setFormData ] = useState(INITIAL_STATE);

  const dispatch = useDispatch();
  const add = (meme) => dispatch({ type: 'ADD_MEME', payload: meme });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name] : value
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const meme = { ...formData, id: nanoid() };
    add(meme);
    setFormData(INITIAL_STATE);
  };

  return (
    <div className="MemeForm">
      <form onSubmit={handleSubmit}>
        <div className="MemeForm-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            name="imageUrl"
            id="imageUrl"
            type="text"
            placeholder="Paste your image URL here"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </div>
        <div className="MemeForm-group">
          <label htmlFor="topText">Top text:</label>
          <input
            name="topText"
            id="topText"
            type="text"
            placeholder="Add text to the top of your meme (optional)"
            value={formData.topText}
            onChange={handleChange}
          />
        </div>
        <div className="MemeForm-group">
          <label htmlFor="bottomText">Bottom text:</label>
          <input
            name="bottomText"
            id="bottomText"
            type="text"
            placeholder="Add text to the bottom of your meme (optional)"
            value={formData.bottomText}
            onChange={handleChange}
          />
        </div>

        <button>Create Meme</button>
      </form>
    </div>
  );
};

export default MemeForm;
