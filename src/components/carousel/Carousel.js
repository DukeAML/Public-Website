import React, { useMemo } from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import CarouselItem from './CarouselItem';
import useWindowDimensions from '../tools/useWindowDimensions';
import './Carousel.scss';

function CustomCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();

  const news = useMemo(() => {
    // Currently our news endpoint doesn't serve anything meaningful
    // In the future we want to move this content to the CDN but rn
    // It is just stored statically here
    //const news = await getNews();
    setLoading(false);
    return [
      {
        title: 'Looking for a full-time tech internship this summer?',
        img: {
          alt: 'Phoenix Project Logo',
          src: require('../homepage/images/phoenix.png'),
        },
        body: 'The Phoenix Project is running again summer 2023 and the applications are now!',
        links: [
          {
            text: 'Apply here',
            value: 'https://airtable.com/shrU5TWqjCCFRlu77',
          },
        ],
      },
      {
        title:
          "DAML's Innovation Studio is excited to introduce their Spring 2021 Cohort!",
        img: {
          alt: 'Innovation Studio',
          src: require('../homepage/images/innovationstudio.png'),
        },
        body: 'Also check out a progress update and learn more about their upcoming Demo Day!!',
        links: [
          {
            text: 'Spring cohort',
            value:
              'https://medium.com/aml-group/introducing-the-duke-innovation-studio-spring-21-cohort-7739551c3511',
          },
          {
            text: 'demo day!',
            value:
              'https://dukeinnovationstudio.medium.com/duke-innovation-studio-spring-21-cohort-progress-updates-7e4075aee0c',
          },
        ],
      },
      {
        title:
          'The Phoenix Project: Hundreds of Duke students have lost internships. Now they’re creating their own.',
        img: {
          alt: 'Phoenix Project',
          src: require('../homepage/images/phoenix.png'),
        },
        body: 'Read more about the Phoenix Project!',
        links: [
          {
            text: 'Here',
            value:
              'https://www.newsobserver.com/news/business/article242197741.html',
          },
          {
            text: 'here!',
            value:
              'https://pratt.duke.edu/about/news/phoenix-project-delivers-data-rich-summer-opportunities',
          },
        ],
      },
    ];
  }, []);

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setSelectedIndex(
        selectedIndex === news.length - 1 ? 0 : selectedIndex + 1,
      );
      console.log('dd', selectedIndex);
    }, 3000);

    return () => clearInterval(carouselInterval);
  }, [selectedIndex]);

  // dont return anything if there isnt enough news >:(
  if (!loading && news.length < 3) {
    return;
  }

  let selectedCallback = (newSelectedIndex) => {
    setSelectedIndex(newSelectedIndex);
  };

  let generateSlides = () => {
    if (width < 700) {
      return (
        <Col>
          <CarouselItem
            {...news[selectedIndex]}
            index={selectedIndex}
            position={1}
            callback={selectedCallback}
          />
        </Col>
      );
    }

    let indices = [
      selectedIndex === 0 ? news.length - 1 : selectedIndex - 1,
      selectedIndex,
      selectedIndex === news.length - 1 ? 0 : selectedIndex + 1,
    ];

    return indices.map((idx, pos) => (
      <Col>
        <CarouselItem
          {...news[idx]}
          index={idx}
          position={pos}
          callback={selectedCallback}
        />
      </Col>
    ));
  };

  const slides = generateSlides();

  return (

      <div>
        {loading ? (
          <Spinner animation="grow" size="lg" style={{ margin: '2rem' }} />
        ) : (
          <Row>{slides}</Row>
        )}
      </div>
  );
}

export default CustomCarousel;
