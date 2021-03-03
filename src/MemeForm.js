import { useState } from 'react';
import { nanoid } from 'nanoid';

const MemeForm = ({ makeMeme }) => {
  const INITIAL_STATE = { imageUrl: '', topText: '', bottomText: '' };
  const [ formData, setFormData ] = useState(INITIAL_STATE);

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
    makeMeme(meme);
    setFormData(INITIAL_STATE);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="imageUrl">
          Image URL:{' '}
          <input
            name="imageUrl"
            id="imageUrl"
            type="text"
            placeholder="Paste your image URL here"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="topText">
          Top text:{' '}
          <input
            name="topText"
            id="topText"
            type="text"
            placeholder="Add text to the top of your meme (optional)"
            value={formData.topText}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="bottomText">
          Bottom text:{' '}
          <input
            name="bottomText"
            id="bottomText"
            type="text"
            placeholder="Add text to the bottom of your meme (optional)"
            value={formData.bottomText}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create Meme" />
      </form>
    </div>
  );
};

export default MemeForm;
