import { Flex } from '@radix-ui/themes';
import Layout from '../../components/Layout';
import BackButton from './partials/BackButton';
import ContentDetail from './partials/ContentDetail';


function Detail() {

  return (
    <Layout>

      <Flex 
        direction='column' 
        width='max-content'
        gap='9'
      >
        <BackButton />
        <ContentDetail />
      </Flex>

    </Layout>
  );
}

export default Detail;
