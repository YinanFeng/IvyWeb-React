import React from "react";
import ContentBox from "../contentBox/ContentBox";


class Root extends React.Component {

  render () {
    console.log("here");
    console.log(this.props.currentTab);
    return (
      <React.Fragment>
        <div className="Tab">
          <h2 className={this.props.currentTab==1?'TabChoose':'TabItem'} onClick={() => this.props.onTabClicked(1)}>Education</h2>
          <h2 className={this.props.currentTab==2?'TabChoose':'TabItem'} onClick={() => this.props.onTabClicked(2)}>Working Experience</h2>
          <h2 className={this.props.currentTab==3?'TabChoose':'TabItem'} onClick={() => this.props.onTabClicked(3)}>Extra-curricular Activities</h2>
        </div>

        <div className="Content">
          {this.props.currentTab==1? <div><ContentBox title="UNSW" time="2017" location="Sydney, Australia"/></div>:null}
          {this.props.currentTab==2? <p>content-working experience</p>:null}
          {this.props.currentTab==3? <p>content-eca</p>:null}
        </div>
      </React.Fragment>
    );
  };

}


export default Root;