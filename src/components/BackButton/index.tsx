import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function BackButton() {
  return (
    <button type="button">
      <Link to="/">
        <AiOutlineArrowLeft />
        Back
      </Link>
    </button>
  );
}

export default BackButton;
