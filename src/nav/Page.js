import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  margin-top: 72px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding-bottom: 24px;
`;

const Content = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const Page = ({ children }) => {
  return (
    <Container>
      <Header>
      </Header>
      <Content>{children}</Content>
    </Container>
  )
};

export default Page;
