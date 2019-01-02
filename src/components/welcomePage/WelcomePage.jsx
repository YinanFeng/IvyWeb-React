import React from 'react';
import ResumeContainer from '../../container/ResumeContainer';
import HomePage from '../homePage/HomePage'
import HomePageContainer from '../../container/HomePageContainer'

class WelcomePage extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div>
                    <h4 className="WelcomePageNav">Welcome!</h4>
                    <div className="MainNav">
                        <p className={this.props.currentNav=='HOME'?"MainNavTabSelected":"MainNavTab"} onClick={() => this.props.onNavChoose('HOME')}>HOME</p>
                        <p className={this.props.currentNav=='BIO'?"MainNavTabSelected":"MainNavTab"} onClick={() => this.props.onNavChoose('BIO')}>BIO</p>
                        <p className={this.props.currentNav=='RESUME'?"MainNavTabSelected":"MainNavTab"} onClick={() => this.props.onNavChoose('RESUME')}>RESUME</p>
                    </div>
                    <hr/>
                </div>
                {this.props.currentNav=='HOME'?<HomePageContainer />:null}
                {this.props.currentNav=='RESUME'?<ResumeContainer />:null}
            </React.Fragment>
        );
    };
};

export default WelcomePage;