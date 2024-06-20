import { Flex } from '@radix-ui/themes';
import Layout from '../../components/Layout';
import BackButton from '../../components/BackButton';
import ContentDetail from '../../components/ContentDetail';


function Detail() {

  return (
    <Layout>

      <Flex 
        direction='column' 
        width='max-content'
        gap='9'
        mt='-5'
      >
        <BackButton />
        <ContentDetail />
      </Flex>

    </Layout>
  );
}

export default Detail;
