import React, { Component } from 'react';
import {connect} from 'react-redux';


class Header extends Component {
  renderContent(){
    switch(this.props.auth){
      case null:
        return 'pendding';
      case false:
        return 'bye bye';
      default:
        return 'i am logg in';
    }
  }

  render() {
    return (
      <nav >
        <div className="nav-warpper">
          <a className="left brand-logo">
          Header
          </a>
          <ul className="right">
            { this.renderContent()}
          </ul>
        </div>
      </nav>
      );
  }
}

function mapStateToProps({auth}){
  return { auth};
}


export default connect()(Header);
