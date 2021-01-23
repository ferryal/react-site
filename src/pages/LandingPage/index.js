import React, { Component } from "react";
import Notification from './../../components/Notification-Panel';
import Personal from "../../components/Personal-Info";
import PersonalSkills from './../../components/Pesonal-Skills';
import Subscription from './../../components/Subscription';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotifHidden: false
    };
    this.handleHideNotif = this.handleHideNotif.bind(this);
  }

  handleHideNotif() {
    this.setState({
      isNotifHidden: true
    })
  }

  render() {
    const { isNotifHidden } = this.state;
    return (
      <div className="container">
        <Notification handleHideNotif={this.handleHideNotif}
          isNotifHidden={isNotifHidden}/>
        <div className={`wrapper ${isNotifHidden !== false ? 'disapear-container-animation' : ''}`}>
          <Personal />
          <PersonalSkills />
          <div className="wrapper-footer">&copy; 2019 Ferryal Muhamad Fajar Bahari. All rights reserved.​</div>
        </div>
        <Subscription />
      </div>
    );
  }
}

export default LandingPage;
