import React from 'react';
import * as THREE from 'three';
import DOTS from 'vanta/dist/vanta.dots.min';
//mport BIRDS from 'vanta/dist/vanta.birds.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class AnimationWrapper extends React.Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = DOTS({
      el: this.vantaRef.current,
      THREE: { ...THREE },
      showLines: false,
      color: '#1e2c3a',
      backgroundColor: '#f2f4f5',
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return <div ref={this.vantaRef}>{this.props.children}</div>;
  }
}
export default AnimationWrapper;
