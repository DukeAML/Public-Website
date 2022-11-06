import React from 'react';

import { Col, Row } from 'react-bootstrap';
import Icon from '../tools/Icon';
import placeholder from './headshots/profile-placeholder.svg';

function Person(props) {
  const github =
    props.github != null ? <Icon type="github" href={props.github} /> : '';

  const linkedin =
    props.linkedin != null ? (
      <Icon type="linkedin" href={props.linkedin} />
    ) : (
      ''
    );

  const email =
    props.email != null ? <Icon type="mail" href={props.email} /> : '';

  let thumbnail;
  let fullImage;

  if (props.img) {
    if (props.img[0].thumbnails) {
      thumbnail = props.img[0].thumbnails.small.url;
      fullImage = props.img[0].thumbnails.large.url;
    } else {
      thumbnail = placeholder;
      fullImage = props.img[0].url;
    }
  } else {
    fullImage = thumbnail = placeholder;
  }

  let imageStyle = {
    height: '120px',
    width: '120px',
    objectFit: 'cover',
    borderRadius: '100%',
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ padding: '1rem' }}>
      <Row>
        <div style={{ margin: 'auto' }}>
          <div className="person-image" style={{ display: 'grid' }}>
            <img
              src={thumbnail}
              style={{
                ...imageStyle,
                position: 'absolute',
                zIndex: -1,
                filter: 'blur(2px)',
                WebkitFilter: 'blur(2px)',
              }}
              alt=""
              onClick={props.onClick}
            />{' '}
            <img
              src={fullImage}
              style={{ ...imageStyle }}
              onClick={props.onClick}
              alt=""
            />
          </div>
        </div>
      </Row>
      <Row style={{ display: 'inline-block' }}>
        <Col xl={12}>
          <center>
            <div style={{ display: 'inline-block', padding: '0.5rem 0 0 0' }}>
              {linkedin}
              {github}
              {email}
            </div>
          </center>
        </Col>
      </Row>
      <div>
        <div style={{ display: 'inline-block', fontSize: '1.5rem' }}>
          {props.name}{' '}
        </div>
      </div>
    </Col>
  );
}
export default Person;
