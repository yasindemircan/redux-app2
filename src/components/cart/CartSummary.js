import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  Row,
  Badge,
  NavLink,
  NavItem,
} from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/CartActions"
import {Link} from "react-router-dom"
import alertify from "alertifyjs"

class CartSummary extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+ " Sepetten Kaldırıldı")
}
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>Sepetiniz Bos</NavLink>
      </NavItem>
    );
  }
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret >
          Your Cart<Badge color="success">{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem style={{ width: "300px" }} key={cartItem.product.id}>
              <Row className="d-flex justify-content-between">
                <Col className="col-1  col align-self-center  ">
                  <Badge color="success">{cartItem.quantity} </Badge>
                </Col>
                <Col className="text-wrap">{cartItem.product.productName}</Col>
                <Col className="col-1 col align-self-center">
                  <Badge
                    color="danger"
                    onClick={() => this.removeFromCart(cartItem.product)}
                  >
                    x
                  </Badge>
                </Col>
              </Row>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
          <Link to={"/cart"}>
            Sepete Git
          </Link>
          
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch){
  return{
    actions:{
      removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
    }
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
