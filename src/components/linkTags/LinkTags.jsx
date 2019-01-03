import React from 'react';

class LinkTags extends React.Component{
    render(){
        return(
            <React.Fragment>
                    <div className='linkTag'>
                        <a href="https://www.facebook.com/yinan.feng.37"><img className="imageStyle" src={require('./FacebookLogo.png')} alt="image" /></a>
                        <a href="https://www.linkedin.com/in/yinan-feng/"><img className="imageStyle" src={require('./LinkedinLogo.png')} alt="image" /></a>
                        <a href="mailto:z5167277@ad.unsw.edu.au"><img className="imageStyle" src={require('./MailLogo.png')} alt="image" /></a>
                    </div>
                {/* <hr/> */}
            </React.Fragment>
        )
    }
}

export default LinkTags;