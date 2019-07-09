import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SidebarComponent extends Component {

  render() {
    
    return (
      <div>
        <div className="sidebar">

          <div className="dashboard-logo">
            <img alt="" className="large-logo" src="images/team.png" />
            <img alt="" className="small-logo" src="images/fav-icon.png" />
          </div>

          <div className="menu-bar">

            <ul className="sidebar-menu">

              <li className="nav-item">
                <a className="sidebar-link " data-toggle="collapse" href="#product">
                  <span className="icon-holder"><i className="fa fa-user" aria-hidden="true"></i> </span><span className="title">Clients</span>
                </a>

                <ul id="product" className="submenu-bar collapse">

                  <li>
                    <Link to='/' className="menu-btn">See all clients</Link>
                  </li>

                </ul>
              </li>


              <li className="nav-item">
                <a className="sidebar-link" data-toggle="collapse" href="#fulfillment">
                  <span className="icon-holder"><i className="fa fa-search" aria-hidden="true"></i> </span><span className="title">Search</span>
                </a>
                <ul id="fulfillment" className="submenu-bar collapse">

                  <li>
                    <Link to='/search' className="menu-btn">Search a client</Link>
                  </li>

                </ul>
              </li>

            </ul>
          </div>
        </div>
      </div>
    )
  }
}
