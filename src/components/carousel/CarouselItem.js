import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import './Carousel.scss';

function CarouselItem(props) {
  function handleClick(e) {
    props.callback(props.index);
  }

  let className;
  switch (props.position) {
    case 0:
      className = 'carouselItemLeft';
      break;
    case 1:
      className = 'carouselItemSelected';
      break;
    case 2:
      className = 'carouselItemRight';
      break;
    default:
      break;
  }

  return (
    <Card
      className={"carouselItem "+className}
      onClick={(e) => handleClick(e)}>
      <Row height="wrap-content">
        <Col
          className="d-none d-md-block align-middle"
          md={3}
          lg={2}
          style={{ marginTop: 6 }}>
          <img alt={props.img.alt} src={props.img.src} width="80%" />
        </Col>
        <Col md={9} xs={12} class="align-middle">
          <p style={{ color: '#617489' }}>
            <b>{props.title}</b>
          </p>
          <br />
          <p style={{ color: '#617489' }}>{props.body}</p>
          <br />
          <div>
            {props.links.map((link, idx) => (
              <a>
                {idx > 0 && <a> and </a>}
                <a color="#7c9fd6" href={link.value}>
                  {link.text}
                </a>
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </Card>
  );
}

export default CarouselItem;
