import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Icon, Col } from 'antd';
import ItemsCarousel from '../../src/ItemsCarousel';
import { createImageChildren } from './CarouselSlideItem';

const noOfItems = 7;
const noOfCards = 2;
const chevronWidth = 60;

const Wrapper = styled.div`
  padding: 0 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const carouselItems = createImageChildren(noOfItems);

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Wrapper>
     <ItemsCarousel
    infiniteLoop={false}
    gutter={12}
    activePosition={'center'}
    chevronWidth={60}
    disableSwipe={false}
    alwaysShowChevrons={false}
    numberOfCards={1}
    slidesToScroll={1}
    outsideChevron={false}
    showSlither={true}
    firstAndLastGutter={true}
    activeItemIndex={this.state.activeItemIndex}
    requestToChangeActive={value => this.setState({ activeItemIndex: value })}
    rightChevron={'>'}
    leftChevron={'<'}
  >
    {Array.from(new Array(10)).map((_, i) =>
      <div
        key={i}
        style={{
          height: 200,
          background: 'url(https://placeimg.com/380/200/nature)'
        }}
      />
    )}
  </ItemsCarousel>
    </Wrapper>
  );
};
