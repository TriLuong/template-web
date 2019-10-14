import React, { PureComponent } from 'react';
import Graph from './Chart';
import './styles.scss';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className="dashboardContainer">
        <div className="dashboardContent">
          <div className="dashboardItem">
            <p>Load Scheduled</p>
            <p>10</p>
          </div>
          <div className="dashboardItem">
            <p>Loads Delivered</p>
            <p>3</p>
          </div>
        </div>
        <div className="dashboardContent">
          <div className="dashboardItem">
            <p>Daily Load Delivered</p>
            <Graph />
          </div>
          <div className="dashboardItem">
            <p>Load Transit</p>
            <p>2</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
