import React from 'react'
import ResumePageLinkTags from '../resumePageLinkTag/ResumePageLinkTags'

class ResumePage extends React.Component {
  render () {
    return (
      <React.Fragment>

        <div className='resumeProfile'>
          <div className='resumeHeaderImage'>
            <img src={require('./Profile.jpeg')} className='resumeImage' />
          </div>
          <div className='resumeHeaderText'>
            <div className='resumeText'>
              <p style={{ fontSize: '1.5vw', lineHeight: '1vw' }}>HELLO,</p>
              <p style={{ fontSize: '1.5vw', lineHeight: '1vw' }}>I AM <span style={{ color: '#00cccc' }}>IVY</span></p>
              <p style={{ fontSize: '1.5vw', lineHeight: '1vw' }}>STUDENT AT UNSW</p>
            </div>
            <div className='resumePageLinkTag'>
              <ResumePageLinkTags />
            </div>
          </div>

        </div>
        <div>
          <div id='profile' className='ResumeProfile' >
            <div style={{ position: 'relative', top: '2vw' }}>
              <h3 style={{ position: 'relative', left: '40vw', fontSize: '1.7vw' }}>PROFILE</h3>
              <hr style={{ width: '3vw', position: 'relative', top: '-0.7vw', left: '-8.3vw', color: 'black', border: '1px solid black' }} />
              <p style={{ position: 'relative', left: '10vw', top: '1vw', fontSize: '1.5vw' }}>A penultimate year Computer Science student in UNSW with experience in Python, C, Java and HTML/CSS.</p>
            </div>
          </div>
          <div id='education' className='ResumeEducation' >
            <div style={{ position: 'relative', top: '2vw' }}>
              <h3 style={{ position: 'relative', left: '40vw', fontSize: '1.7vw' }}>EDUCATION</h3>
              <hr style={{ width: '3vw', position: 'relative', top: '-0.7vw', left: '-8.3vw', color: 'black', border: '1px solid black' }} />
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                  <img src={require('./UNSW.png')} style={{ width: '9.7vw', height: '10vw', position: 'relative', left: '9vw' }} />
                </div>
                <div style={{ position: 'relative', left: '10vw', top: '1vw' }}>
                  <p style={{ fontSize: '1.4vw' }}>UNSW</p>
                  <p style={{ fontSize: '1.4vw' }}>Bachelor's degree, Computer Science/Finance</p>
                  <p style={{ fontSize: '1.4vw' }}>2017 – 2019</p>
                </div>
              </div>
            </div>
          </div>
          <div id='experience' className='ResumeExperience'>
            <div style={{ position: 'relative', top: '2vw' }}>
              <h3 style={{ position: 'relative', left: '40vw', fontSize: '1.7vw' }}>EXPERIENCE</h3>
              <hr style={{ width: '3vw', position: 'relative', top: '-0.7vw', left: '-8.3vw', color: 'black', border: '1px solid black' }} />
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '3vw' }}>
                <div>
                  <img src={require('./BCGDV.png')} style={{ width: '10vw', height: '10vw', borderRadius: '100vw', marginBottom: '1.5vw' }} />
                  <div style={{ width: '15vw', position: 'relative', left: '-2vw' }}>
                    <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '1.4vw' }}>Software Developer Intern</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>BCG Digital Ventures</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>2018.11 - Present</p>
                  </div>
                </div>
                <div>
                  <img src={require('./CBHB.png')} style={{ width: '10vw', height: '10vw', borderRadius: '100vw', marginBottom: '1.5vw' }} />
                  <div style={{ width: '15vw', position: 'relative', left: '-2vw' }}>
                    <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '1.4vw' }}>Java Developer Intern</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>China Bohai Bank</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>2018.6 - 2018.7</p>
                  </div>
                </div>
                <div>
                  <img src={require('./TongFang.jpg')} style={{ width: '10vw', height: '10vw', borderRadius: '100vw', marginBottom: '1.5vw' }} />
                  <div style={{ width: '15vw', position: 'relative', left: '-2vw' }}>
                    <p style={{ textAlign: 'center', fontWeight: 'bolder', fontSize: '1.4vw' }}>Audit Intern</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>Zhejiang TongFang accounting firm co. LTD.</p>
                    <p style={{ textAlign: 'center', fontSize: '1.4vw' }}>2017.12 - 2018.1</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='Extracurricular Involvements' className='ResumeExtracurricularInvolvements'>
            <div style={{ position: 'relative', top: '2vw' }}>
              <h3 style={{ position: 'relative', left: '40vw', fontSize: '1.7vw' }}>EXTRACURRICULAR INVOLVEMENTS</h3>
              <hr style={{ width: '3vw', position: 'relative', top: '-0.7vw', left: '-8.3vw', color: 'black', border: '1px solid black' }} /> 
              <div style={{ position: 'relative', left: '10vw', top: '1vw', marginRight: '11vw' }}>
                <p style={{ fontSize: '1.25vw' }}>Project Officer - Skill Development Program UNSW</p>
                <p style={{ fontSize: '1.25vw' }}>External Relations Subcommittee - UNSW Woman in Technology</p>
                <p style={{ fontSize: '1.25vw' }} >Student Ambassador - CPA Australia</p>
                <p style={{ fontSize: '1.25vw' }}>Student Advisory Group - UNSW Engineering</p>
                <p style={{ fontSize: '1.25vw' }}>Volunteer(Camera operator & Set Assistant)- Blitz TV UNSW</p>
                <p style={{ fontSize: '1.25vw' }}>Culture Mentor - UNSW Student Development International (SDI)</p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ResumePage
