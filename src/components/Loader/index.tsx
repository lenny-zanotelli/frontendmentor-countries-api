import { CSSProperties } from 'react';
import { CircleLoader } from 'react-spinners';

const override: CSSProperties = {
  display: 'block',
  position: 'fixed',
  zIndex: '1',
  top: '50%',
  left: '40%'
};

function Loader() {
  return (
    <CircleLoader
      cssOverride={override}
      color="gray"
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default Loader;
