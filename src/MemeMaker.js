import MemeForm from './MemeForm';
import { useSelector, useDispatch } from 'react-redux';
import './MemeMaker.css';

const MemeMaker = () => {
  const memes = useSelector((st) => st.memes);
  const dispatch = useDispatch();
  const add = (meme) => dispatch({ type: 'ADD_MEME', payload: meme });
  const remove = (id) => dispatch({ type: 'DELETE_MEME', payload: id });
  return (
    <div className="MemeMaker">
      <h1>Meme Generator</h1>
      <h3>Fill out the form to create your own meme.</h3>
      <MemeForm makeMeme={add} />
      <div className="MemeMaker-container">
        {memes.length > 0 &&
          memes.map((meme) => (
            <div className="MemeMaker-meme" key={meme.id}>
              <img src={meme.imageUrl} alt="" />
              <button aria-label="delete" onClick={() => remove(meme.id)}>
                &#10006;
              </button>
              <div className="MemeMaker-top">{meme.topText}</div>
              <div className="MemeMaker-bottom">{meme.bottomText}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MemeMaker;
