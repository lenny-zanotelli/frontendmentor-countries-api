import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { Button, Text } from '@radix-ui/themes';

function BackButton() {
  return (
    <Button
      size='4'
      variant='surface'
      color='gray'
      highContrast
      style={{
        margin: '4.5rem auto auto 4.8rem'
      }}
    >
      <Link to="/">
        <ArrowLeftIcon width='18' height='18' />
        <Text
          as='span'
          size='5'
          weight='medium'
          color='gray'
          align='center'
          style={{
            paddingLeft: '0.5rem'
          }}
        >
          Back
        </Text>
      </Link>
    </Button>
  );
}

export default BackButton;
