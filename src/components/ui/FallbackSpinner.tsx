import { Flex, Spin } from 'antd';

export const FallbackSpinner = () => {
  return (
    <Flex justify="center" align="center" style={{ height: '80vh' }}>
      <Spin size="large" />
    </Flex>
  );
};
