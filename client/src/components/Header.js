import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
      <nav >
        <div className="nav-warpper">
          <a className="left brand-logo">
          Header
          </a>
          <ul className="right">
            <li>
              <a> sign in google </a>
            </li>
          </ul>
        </div>
      </nav>
      );
  }
}


export default Header;
