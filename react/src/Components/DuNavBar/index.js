import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavbarText,
  Row, Col
} from 'reactstrap';
import { Link } from 'react-router-dom';

const DuNavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
      <Row style={{marginTop: 10}}>
        <Col>
          <Navbar color="dark" dark expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/"><strong>DevUtils</strong></Link>
                </NavItem>
                {/* <NavItem>
                  <Link className="nav-link" to="/social-meta-generator">Social Meta Generator</Link>
                </NavItem> */}
              </Nav>
            </Collapse>
          </Navbar>
        </Col>
      </Row>
  );
}

export default DuNavBar;