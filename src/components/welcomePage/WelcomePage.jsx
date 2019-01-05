import React from 'react'
import ResumeContainer from '../../container/ResumeContainer'
// import HomePage from '../homePage/HomePage'
import HomePageContainer from '../../container/HomePageContainer'
import CoverPageContainer from '../../container/CoverPageContainer'

class WelcomePage extends React.Component {
  render () {
    return (
      <React.Fragment>

        {this.props.currentNav !== 'HOME'
          ? <div>
            <h4 className='WelcomePageNav'>Welcome!</h4>
            <div className='MainNav'>
              <p className={this.props.currentNav === 'HOME' ? 'MainNavTabSelected' : 'MainNavTab'} onClick={() => this.props.onNavChoose('HOME')}>HOME</p>
              <p className={this.props.currentNav === 'BIO' ? 'MainNavTabSelected' : 'MainNavTab'} onClick={() => this.props.onNavChoose('BIO')}>BIO</p>
              <p className={this.props.currentNav === 'RESUME' ? 'MainNavTabSelected' : 'MainNavTab'} onClick={() => this.props.onNavChoose('RESUME')}>RESUME</p>
            </div>
            <hr />
          </div>
          : null}
        {this.props.currentNav === 'BIO' ? <HomePageContainer /> : null}
        {this.props.currentNav === 'RESUME' ? <ResumeContainer /> : null}
        {this.props.currentNav === 'HOME' ? <CoverPageContainer /> : null}
      </React.Fragment>
    )
  }
}

export default WelcomePage
