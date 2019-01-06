import React from 'react'

class ResumePageLinkTags extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='resumeLinkTag'>
          <a href='https://www.facebook.com/yinan.feng.37' style={{ margin: '0.9vw' }}><img className='ResumePageImageStyle' src={require('./FacebookLogo.png')} alt='image' /></a>
          <a href='https://www.linkedin.com/in/yinan-feng/' style={{ margin: '0.9vw' }}><img className='ResumePageImageStyle' src={require('./LinkedinLogo.png')} alt='image' /></a>
          <a href='mailto:z5167277@ad.unsw.edu.au' style={{ margin: '0.9vw' }}><img className='ResumePageImageStyle' src={require('./MailLogo.png')} alt='image' /></a>
        </div>
        {/* <hr/> */}
      </React.Fragment>
    )
  }
}

export default ResumePageLinkTags
