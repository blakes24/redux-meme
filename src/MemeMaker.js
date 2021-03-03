import MemeForm from './MemeForm';
import Meme from './Meme';
import { useSelector } from 'react-redux';
import './MemeMaker.css';

const MemeMaker = () => {
  const memes = useSelector((st) => st.memes);

  return (
    <div className="MemeMaker">
      <h1>Meme Generator</h1>
      <h3>Fill out the form to create your own meme.</h3>
      <MemeForm />
      <div className="MemeMaker-container">
        {memes.length > 0 && memes.map((meme) => <Meme meme={meme} key={meme.id} />)}
      </div>
    </div>
  );
};

export default MemeMaker;
