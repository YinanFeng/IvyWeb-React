import React from 'react';

class Cover extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className='CoverPageTitle'>Ivy Yinan Feng</h1>
                <p className='CoverPageTag'>Student - Developer - Avid Traveller</p>
                <h3 onClick={() => this.props.onNavChoose('BIO')}>Explore More</h3>
            </React.Fragment>
        );
    };


};

export default Cover;