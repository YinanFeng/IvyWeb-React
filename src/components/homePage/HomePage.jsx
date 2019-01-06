import React from 'react'
import ScrollingPhoto from '../scrollingPhoto/ScrollingPhoto'
import HomePageLinkTags from '../homePageLinkTag/HomePageLinkTags'

class HomePage extends React.Component {
  render () {
    // const img = '../';
    return (
      <React.Fragment>
        <div id='bigContainer' className='HomePageContainer'>
          <div className='HomePageTextImage'>
            <div className='HomePageTextContainer'>
              <p className='HomePageHey'>-- Hey again! --</p>
              <h2 className='HomePageTitle'>How's it going? I am Ivy Feng</h2>
              <h2 className='HomePageTitle'>Welcome to my website</h2>
              <p className='HomePageText'>I'm a student at UNSW majoring Computer Science. I enjoy going to the gym and reading. I am also an avid traveller, having once visited 7 cities across 3 countries in a single holiday and dreaming of spending a whole year to travel the entire world in the future.</p>
              <div className='BioLinkTags'>
                <HomePageLinkTags />
              </div>
            </div>
            <div className='ScrollingImage'>
              <ScrollingPhoto />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default HomePage
