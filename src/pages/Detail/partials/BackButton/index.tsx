import { Link } from 'react-router-dom';
import './styles.scss';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

function BackButton() {
  return (
    <button
     className='details__back-button'
     type="button"
    >
      <Link to="/">
        <ArrowLeftIcon />
        <span>Back</span>
      </Link>
    </button>
  );
}

export default BackButton;
