import React, {Component} from 'react';
import {
  Badge,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  DropdownToggle,
  Row, Col, Card, CardHeader, CardBlock, Button
} from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 900 });
  }


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    const isDesktop = this.state.isDesktop;
    return (

      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>&#9776;</NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>&#9776;</NavbarToggler>
        <Nav className="d-md-down-none" navbar>
        </Nav>
        <Nav className="ml-auto" navbar>
          
        </Nav>

      <div>
        {isDesktop ? (
          <div>
            <a href="https://www.linkedin.com/in/linnearylander">
              <button className="btn-linkedin icon btn btn-secondary"><span> LinkedIn </span></button>
            </a>
            <a href="https://github.com/lrylander">
              <button className="btn-github icon btn btn-secondary"><span>Github</span></button>
            </a>
            <a href="mailto: linnearylander@gmail.com">
              <button onclick="sendEmail();" className="btn-vimeo icon btn btn-secondary"><span>Mail</span></button>
            </a>

          </div>
        ) : (
          <div></div>
        )}
      </div>
        
      </header>
    )
  }
}

export default Header;

