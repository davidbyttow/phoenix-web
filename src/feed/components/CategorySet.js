import React, { Component } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  overflow-x: hidden;
`

const Slide = styled.div`
  width: 144px;
  height: 144px;
  display: inline-block;
  background-color: black;
  padding: 16px;
  margin-right: 2px;
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
`;

class CategorySet extends Component {
  render() {
    const categories = [
      {
        name: 'Burgers',
      },
      {
        name: 'Mexican',
      },
      {
        name: 'Pizza',
      },
      {
        name: 'Chinese',
      },
      {
        name: 'Breakfast',
      },
      {
        name: 'Dessert',
      },
      {
        name: 'Fast food',
      },
    ]
    return (
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
              <Slide key={c.name}><SlideContent>{c.name}</SlideContent></Slide>
            ))
          }
        </Slider>
      </Container>
    )
  }
}

export default CategorySet;
