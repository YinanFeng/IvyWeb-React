import React from 'react'
import { Carousel } from 'antd'

class ScrollingPhoto extends React.Component {
  render () {
    return (
      <Carousel autoplay>
        <div><img className='ScrollingSingleImage' src={require('./Image0.jpg')} /><p className='ScrollingImageText'>Sydney, Australia</p></div>
        <div><img className='ScrollingSingleImage' src={require('./Image1.jpg')} /><p className='ScrollingImageText'>Dubai, United Arab Emirates</p></div>
        <div><img className='ScrollingSingleImage' src={require('./Image3.jpg')} /><p className='ScrollingImageText'>Qufu, China</p></div>
        <div><img className='ScrollingSingleImage' src={require('./Image2.jpg')} /><p className='ScrollingImageText'>Adelaide, Australia</p></div>
        <div><img className='ScrollingSingleImage' src={require('./Image4.jpg')} /><p className='ScrollingImageText'>Hangzhou, China</p></div>
      </Carousel>
    )
  }
}

export default ScrollingPhoto
