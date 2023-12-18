import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './styles.scss';

function BackButton() {
  return (
    <button
     className='details__back-button'
     type="button"
    >
      <Link to="/">
        <AiOutlineArrowLeft />
        <span>Back</span>
      </Link>
    </button>
  );
}

export default BackButton;
