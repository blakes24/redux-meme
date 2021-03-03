import MemeForm from './MemeForm';
import { useSelector, useDispatch } from 'react-redux';

const MemeMaker = () => {
  const memes = useSelector((st) => st.memes);
  const dispatch = useDispatch();
  const add = (meme) => dispatch({ type: 'ADD_MEME', payload: meme });
  const remove = (id) => dispatch({ type: 'DELETE_MEME', payload: id });
  return (
    <div>
      <h1>Meme Generator</h1>
      <h3>Fill out the form to create your own meme.</h3>
      <MemeForm makeMeme={add} />
      <div className="MemeMaker-memes">
        {memes.length > 0 &&
          memes.map((meme) => (
            <div>
              <button onClick={() => remove(meme.id)}>X</button>
              <p>{meme.topText}</p>
              <img src={meme.imageUrl} alt="" />
              <p>{meme.bottomText}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MemeMaker;
