import React from 'react'
import '../styles/ButtonCompon.css';
import ButtonComponent from './ButtonComponent';
class CartComponent extends React.Component{
    constructor()
    {
        super();
        
    }
    decrement(){
        var amount=0;
        let quantity=document.getElementById(this.props.cart.id).value;
        if(quantity==0)
        quantity=0;
        else
        quantity=parseInt(quantity)-1;
        let price=quantity*this.props.cart.price;
        document.getElementById(this.props.cart.class).innerHTML="Rs."+price;
        document.getElementById(this.props.cart.id).value=quantity;
        amount=price-amount;
        this.props.methodSub(this.props.cart.price)
    }
    increment(){
        var amount=0;
        let quantity=document.getElementById(this.props.cart.id).value;
        quantity=parseInt(quantity)+1;
        let price=quantity*this.props.cart.price;
        
        document.getElementById(this.props.cart.class).innerHTML="Rs."+price;
        document.getElementById(this.props.cart.id).value=quantity;
        amount=amount+price;
        this.props.methodAdd(this.props.cart.price)
    }
    render(){
        return(
            <div class="second-sub1">
                <h5 class="prod-name">{this.props.cart.name}</h5>
                <button class="calculation" onClick={()=>this.decrement()}>-</button>
                <input class="calculation" type="text" name="Chicken-quan" value="0"  id={this.props.cart.id}/>
                <button class="calculation" onClick={()=>this.increment()}>+</button>
                <h4 class="cost" id={this.props.cart.class}></h4>
            </div>
        );
    }
}

export default CartComponent;