import React from 'react';
import ScrollingPhoto from '../scrollingPhoto/ScrollingPhoto';
class HomePage extends React.Component{


    render(){

        console.log(this.props.images[0].src);
        const a = this.props.images[0].src;
       // const img = '../';
        return (
            <React.Fragment>
                <div style={{ height: '450px' }}>
                    <h2 className="HomePageName">Hi! I am Ivy</h2>
                    <p className="HomePageText">- Student at UNSW -</p>
                    <p className="HomePageText">- Avid Traveller -</p>
                    <p className="HomePageText">- Developer -</p>
                    <br />
                    <div className="ScrollingImage">
                        <ScrollingPhoto />
                    </div>
                </div>
            </React.Fragment>
        );
    };
};

export default HomePage;