import React from 'react'
import * as VANTA from 'vanta'
import DOTS from 'vanta/dist/vanta.dots.min'
import * as THREE from 'three'
//mport BIRDS from 'vanta/dist/vanta.birds.min'

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

class AnimationWrapper extends React.Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = DOTS({
	  el: this.vantaRef.current,
	  THREE: THREE
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return <div ref={this.vantaRef}>
      {this.props.children}
    </div>
  }
}
export default AnimationWrapper