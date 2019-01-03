import React from 'react';
import LinkTags, {} from '../linkTags/LinkTags'

class Cover extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className='CoverPageTitle'>Ivy Yinan Feng</h1>
                <p className='CoverPageTag'>Student - Developer - Avid Traveller</p>
                <div className='exploreButtonDiv'>
                    <h3 onClick={() => this.props.onNavChoose('BIO')} className='exploreButton'>Explore More</h3>
                </div>
                <div className='HomePageLinkTag'>
                    <LinkTags />
                </div>
            </React.Fragment>
        );
    };


};

export default Cover;