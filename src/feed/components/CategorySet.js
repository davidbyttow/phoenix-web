import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

import { makeImageUrl } from '../../vendor/zimage';

const Container = styled.div`
  overflow-x: hidden;
`

const Slide = styled.div`
  width: 144px;
  height: 144px;
  display: inline-block;
  padding: 16px;
  margin-right: 2px;
  background-color: black;
  background-image: ${props => props.imageUrl && `url(${props.imageUrl})`};
  background-size: cover;
  position: relative;
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  color: white;
  font-size: 16px;
  font-weight: bold;
  position: relative;
`;

const SlideOverlay = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
`

const CategorySet = ({ categories }) => (
  <Container>
    <Slider
      arrows={false}
      infinite={false}
      speed={500}
      swipeToSlide
      variableWidth
      initialSlide
      slidesToShow={1}
      slidesToScroll={1}>
      {
        categories.map((c) => (
          <Slide
            key={c.name}
            imageUrl={c.imageUrl && makeImageUrl(c.imageUrl, { width: 144 * 2 })}
          >
            <SlideOverlay />
            <SlideContent>{c.name}</SlideContent>
          </Slide>
        ))
      }
    </Slider>
  </Container>
);

export default CategorySet;
