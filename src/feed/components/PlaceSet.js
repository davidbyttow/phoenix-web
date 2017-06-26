import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const PlaceSet = ({ title, places }) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <More>SEE MORE</More>
    </Header>
    <CardTable>
      <CardColumn hero>
        <PlaceCard hero {...places[0]} />
      </CardColumn>
      <CardColumn>
        <PlaceCard {...places[1]} />
        <PlaceCard {...places[2]} />
      </CardColumn>
    </CardTable>
  </Container>
);

const PlaceCard = ({ hero, title, subTitle }) => (
  <Card hero={hero}>
    <CardTitle hero={hero}>{title}</CardTitle>
    <CardSubtitle hero={hero}>{subTitle}</CardSubtitle>
  </Card>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 24px;
`;

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
`;

const More = styled.div`
  font-size: 11px;
  color: #ddd;
  font-weight: 600;
`;

const CardTable = styled.div`
  display: flex;
  height: 400px;
`;

const Card = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: ${props => !props.hero && '2px'};
  }
`;

const CardTitle = styled.div`
  font-size: ${props => props.hero ? '24px' : '16px'};
  color: white;
  font-weight: bold;
`;

const CardSubtitle = styled.div`
  color: white;
  font-size: 14px;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: ${props => props.hero ? '2' : '1'};
  margin-right: ${props => props.hero && '2px'};
`;

export default PlaceSet;
