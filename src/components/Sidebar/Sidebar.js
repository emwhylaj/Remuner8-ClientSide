/*eslint-disable*/
import React, { useState } from 'react';
import { NavLink as NavLinkRRD, Link } from 'react-router-dom';
// nodejs library to set properties for components
import { PropTypes } from 'prop-types';
import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar';

// reactstrap components
import {
  Collapse,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from 'reactstrap';

const Sidebar = props => {
  const [collapseOpen, setCollapseOpen] = useState();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
  };
  // toggles collapse between opened and closed (true/false)
  const toggleCollapse = () => {
    setCollapseOpen(data => !data);
  };
  // closes the collapse
  const closeCollapse = () => {
    setCollapseOpen(false);
  };
  // creates the links that appear in the left menu / Sidebar
  const createLinks = routes => {
    return routes.map((prop, key) => {
      return (
        <NavItem key={key}>
          <NavLink
            to={prop.layout + prop.path}
            tag={NavLinkRRD}
            onClick={closeCollapse}
            activeClassName="active"
          >
            <i className={prop.icon} />
            {prop.name}
          </NavLink>
        </NavItem>
      );
    });
  };

  const { bgColor, routes, logo } = props;
  let navbarBrandProps;
  if (logo && logo.innerLink) {
    navbarBrandProps = {
      to: logo.innerLink,
      tag: Link
    };
  } else if (logo && logo.outerLink) {
    navbarBrandProps = {
      href: logo.outerLink,
      target: '_blank'
    };
  }

  return (
    <Navbar
      className="navbar-vertical fixed-left navbar-light bg-white data-simplebar"
      expand="md"
      id="sidenav-main"
    >
      <Container fluid>
        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Brand */}
        {logo ? (
          <NavbarBrand className="pt-0" {...navbarBrandProps}>
            <img
              alt={logo.imgAlt}
              className="navbar-brand-img"
              src={logo.imgSrc}
              width="115"
            />
          </NavbarBrand>
        ) : null}
        {/* User */}
        <Nav className="align-items-center d-md-none">
          <UncontrolledDropdown nav>
            <DropdownToggle nav className="nav-link-icon">
              <i className="ni ni-bell-55" />
            </DropdownToggle>
            <DropdownMenu
              aria-labelledby="navbar-default_dropdown_1"
              className="dropdown-menu-arrow"
              right
            >
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav>
            <DropdownToggle nav>
              <Media className="align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="..."
                    src={
                      require('../../assets/img/theme/team-1-800x800.jpg')
                        .default
                    }
                  />
                </span>
              </Media>
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu-arrow" right>
              <DropdownItem className="noti-title" header tag="div">
                <h6 className="text-overflow m-0">Welcome!</h6>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-single-02" />
                <span>My profile</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-settings-gear-65" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-calendar-grid-58" />
                <span>Activity</span>
              </DropdownItem>
              <DropdownItem to="/admin/user-profile" tag={Link}>
                <i className="ni ni-support-16" />
                <span>Support</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem href="#pablo" onClick={e => e.preventDefault()}>
                <i className="ni ni-user-run" />
                <span>Logout</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        {/* Collapse */}
        <Collapse navbar isOpen={collapseOpen}>
          {/* Collapse header */}
          <div className="navbar-collapse-header d-md-none">
            <Row>
              {logo ? (
                <Col className="collapse-brand" xs="6">
                  {logo.innerLink ? (
                    <Link to={logo.innerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </Link>
                  ) : (
                    <a href={logo.outerLink}>
                      <img alt={logo.imgAlt} src={logo.imgSrc} />
                    </a>
                  )}
                </Col>
              ) : null}
              <Col className="collapse-close" xs="6">
                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={toggleCollapse}
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          {/* Form */}
          <Form className="mt-4 mb-3 d-md-none">
            <InputGroup className="input-group-rounded input-group-merge">
              <Input
                aria-label="Search"
                className="form-control-rounded form-control-prepended"
                placeholder="Search"
                type="search"
              />
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <span className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          {/* Navigation */}
          <Nav navbar>{createLinks(routes)}</Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Employees</h6>
          {/* Navigation */}
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/employees">
                <i className="fas fa-users text-blue" />
                Employees
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-building text-blue" />
                Departments
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-chart-bar-32 text-blue" />
                Salary Structure
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-user-run text-blue" />
                Leaves
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-calendar-check text-blue" />
                Attendance
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-hourglass-end text-blue" />
                Overtime and Bonuses
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-thumbs-up text-blue" />
                Approvals
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">HR</h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-file-invoice-dollar text-blue" />
                Accounts
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-spaceship text-blue" />
                Taxes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-funnel-dollar text-blue" />
                Payroll
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-money-coins text-blue" />
                Employee Salary
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-support-16 text-blue" />
                Arrears
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/payslip">
                <i className="ni ni-book-bookmark text-blue" />
                Payslip
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-money-bill-alt text-blue" />
                Payroll Items
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-hand-holding-usd text-blue" />
                Loan Deduction
              </NavLink>
            </NavItem>
          </Nav>
          {/* Divider */}
          <hr className="my-3" />
          {/* Heading */}
          <h6 className="navbar-heading text-muted">Administration</h6>
          <Nav className="mb-md-3" navbar>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-spaceship text-blue" />
                Activities
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-key-25 text-blue" />
                Authentication
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="fas fa-user text-blue" />
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/departments">
                <i className="ni ni-settings-gear-65 text-blue" />
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">
                <i className="ni ni-curved-next text-blue" />
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

Sidebar.defaultProps = {
  routes: [{}]
};

Sidebar.propTypes = {
  // links that will be displayed inside the component
  routes: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape({
    // innerLink is for links that will direct the user within the app
    // it will be rendered as <Link to="...">...</Link> tag
    innerLink: PropTypes.string,
    // outerLink is for links that will direct the user outside the app
    // it will be rendered as simple <a href="...">...</a> tag
    outerLink: PropTypes.string,
    // the image src of the logo
    imgSrc: PropTypes.string.isRequired,
    // the alt for the img
    imgAlt: PropTypes.string.isRequired
  })
};

export default Sidebar;

/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
