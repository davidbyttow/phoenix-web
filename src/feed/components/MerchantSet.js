import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  background-color: black;
  padding: 16px;
  margin-right: 2px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: flex-end;
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

class MerchantSet extends Component {
  render() {
    const categories = [
      {
        name: 'Tender Greens',
        subTitle: '$2.99 delivery in 35-40 min'
      },
      {
        name: 'Tender Greens',
        subTitle: '$2.99 delivery in 35-40 min'
      },
      {
        name: 'Tender Greens',
        subTitle: '$2.99 delivery in 35-40 min'
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
              <Slide><SlideContent>{c.name}</SlideContent></Slide>
            ))
          }
        </Slider>
      </Container>
    )
  }
}

export default CategorySet;
