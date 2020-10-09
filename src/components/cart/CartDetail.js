import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/CartActions"
import { Table,Button } from 'reactstrap';
import alertify from "alertifyjs"
import gif from "../../img/gif.2.gif"
import "../../app.css"
class CartDetail extends Component {



    removeFromCart(product){
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName+ " Sepetten Kaldırıldı")
    }
    renderEmpty() {
        return (
            <div style={{textAlign:"center"}}>
            <img src={gif} alt="Sepetiniz BomBoos"  className="App-logo"/>
            <h3 >Sepetiniz Bos</h3> 
            </div>
          
        );
      }
    cartRender(){
        return(
            <Table bordered>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Unit Price</th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.props.cart.map(cartItem => (
                    <tr key ={cartItem.product.id}>
                        <th scope="row">{cartItem.product.id}</th>
                        <td>{cartItem.product.productName}</td>
                        <td>{cartItem.product.unitPrice}</td>
                        <td>{cartItem.quantity}</td>
                        <td> 
                        <Button color="danger" onClick={()=> this.removeFromCart(cartItem.product)} >
                        Sil
                        </Button>
                        </td>

                    </tr>
                ))}


            </tbody>
        </Table>
        )

    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.cartRender() : this.renderEmpty()}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}
function mapStateToProps(state) {
    return {
        cart: state.cartReducer,
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
