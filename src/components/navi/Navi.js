import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';
import { Link } from 'react-router-dom';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">Home</Link> </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink><Link to="/saveproduct">Yeni Ürün Ekle</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/yasindemircan">GitHub</NavLink>
            </NavItem>
            <NavItem> 
            <CartSummary/> 
            </NavItem>
            
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;