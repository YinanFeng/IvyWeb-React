import React from 'react';
import { Carousel } from 'antd';

class ScrollingPhoto extends React.Component{
  render() {
    return (
        <Carousel autoplay>
            <div><img className='ScrollingSingleImage'  src={require("./Image0.jpg")} /><p>Sydney, Australia</p></div>
            <div><img className='ScrollingSingleImage'  src={require("./Image1.jpg")} /><p>Dubai, United Arab Emirates</p></div>
            <div><img className='ScrollingSingleImage'  src={require("./Image3.jpg")} /><p>Qufu, China</p></div>
            <div><img className='ScrollingSingleImage'  src={require("./Image2.jpg")} /><p>Adelaide, Australia</p></div>
            <div><img className='ScrollingSingleImage'  src={require("./Image4.jpg")} /><p>Hangzhou, China</p></div>
        </Carousel>
    )
  }
}

export default ScrollingPhoto;