import React from 'react'; 

//para:
// -title -time -location
class ContentBox extends React.Component{
    
    render() {
        return (
            <React.Fragment>
                <div className="ContentBox">
                    <h3>{this.props.title}</h3>
                    <h4>{this.props.time}</h4>
                    <h4>{this.props.location}</h4>
                </div>
            </React.Fragment>
        );
    }
} 

export default ContentBox;