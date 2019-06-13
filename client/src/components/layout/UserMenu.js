import React, { Component } from 'react';
import { Link } from "react-router-dom";

import User from '@carbon/icons-react/es/user/20';

class UserMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div className="nav-item">
        <Link to="" className="nav-link" onClick={this.showMenu}>
        <User className="nav-svg" />
          User
        </Link>
        
        {
          this.state.showMenu
            ? (
              <ul
                className="dropdown-menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <li><Link className="dropdown-item " to="/my-account">
                      Profile
                    </Link></li>
                <li><button className="dropdown-item " onClick={this.onLogoutClick}>
                      Profile
                    </button></li>
              </ul>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}


  export default UserMenu;
  