import { useDispatch } from 'react-redux';
import './Meme.css';

const Meme = ({ meme }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch({ type: 'DELETE_MEME', payload: meme.id });
  return (
    <div className="Meme" key={meme.id}>
      <img src={meme.imageUrl} alt="" />
      <button aria-label="delete" onClick={remove}>
        &#10006;
      </button>
      <div className="Meme-top">{meme.topText}</div>
      <div className="Meme-bottom">{meme.bottomText}</div>
    </div>
  );
};

export default Meme;
