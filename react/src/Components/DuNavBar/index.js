import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  Row,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DuNavBar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Row style={{ marginTop: 10 }}>
      <Col>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/#/" className="mr-auto">DevUtils</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={collapsed} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link className="nav-link" to="/social-meta">
                  Social Meta
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default DuNavBar;
