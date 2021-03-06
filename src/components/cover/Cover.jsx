import React from 'react'
import LinkTags, {} from '../linkTags/LinkTags'

class Cover extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='CoverAllDiv'>
          <h1 className='CoverPageTitle'>Ivy Yinan Feng</h1>
          <p className='CoverPageTag'>Student - Developer - Avid Traveller</p>
          <button onClick={() => this.props.onNavChoose('BIO')} className='exploreButton'>Explore More</button>
          <div className='HomePageLinkTag'>
            <LinkTags />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Cover
