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

const PlaceCard = ({ hero, id, title, subTitle, imageUrl }) => (
  <Card
    to={`/place/${id}`}
    hero={hero}
    imageUrl={imageUrl}
  >
    <CardOverlay />
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

const Card = styled(Link)`
  background-color: black;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-end;
  padding: 16px;

  &:not(:last-child) {
    margin-bottom: ${props => !props.hero && '2px'};
  }

  background-image: ${props => props.imageUrl && `url(${props.imageUrl})`};
  background-size: cover;
  position: relative;
`;

const CardOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 50%;
  right: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);
`;

const CardTitle = styled.div`
  font-size: ${props => props.hero ? '24px' : '16px'};
  color: white;
  font-weight: bold;
  position: relative;
`;

const CardSubtitle = styled.div`
  color: white;
  font-size: 14px;
  position: relative;
`;

const CardColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: ${props => props.hero ? '2' : '1'};
  margin-right: ${props => props.hero && '2px'};
`;

export default PlaceSet;
