import React from 'react'
import '../styles/RestaurantList.css';
class RestaurantCard extends React.Component{
    constructor()
    {
        super();
    }
    render(){
        return(
            <div onClick={() => this.props.navigation.push("/order/"+this.props.name+"/"+this.props.restaurant.id)}>
                <div class="restaurant-01" >
                    <img src={this.props.restaurant.imageURL} alt="Restaurant 01" class="restas"/>
                    <h1>{this.props.restaurant.restaurantName}</h1>
                    <h3>{this.props.restaurant.foodType}</h3>
                    <h4 class="distance">{this.props.restaurant.distance}</h4>
                </div>
                <h5 class="feedback">{this.props.restaurant.review} reviews</h5>
            </div>
        );
    }
}

export default RestaurantCard;