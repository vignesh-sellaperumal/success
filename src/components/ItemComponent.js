import React from 'react'
import '../styles/ButtonCompon.css';
import ButtonComponent from './ButtonComponent';
import RestaurantServices from '../util/RestaurantServices';
class ItemComponent extends React.Component{
    constructor()
    {
        super();
    }
    clicevent(id){
       this.props.method(id);
    }
    render(){
        return(
            <div class="first-sub2">
                <h2 class="item-title">{this.props.items.name}</h2> 
                <ButtonComponent type="button" value="Add" className="add" onClick = {()=>this.clicevent(this.props.items.id)}/>
                <h6 class="sub2-padd">{this.props.items.desc}</h6>
                <h5>Rs. {this.props.items.price}</h5>
            </div>
        );
    }
}

export default ItemComponent;