import  React from 'react';
import '../styles/restaurant-list.css';
import HeaderComponent from '../components/HeaderComponent';
import RestaurantCard from '../components/RestaurantCard';
import RestaurantServices from '../util/RestaurantServices';
class RestaurantComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            userName: '',
            restaurantLists : []
        }
    }
    componentWillMount(){
        this.setState({userName: this.props.match.params.username});
        this.setState({
            restaurantLists : RestaurantServices.readFromJSONFile()
        });
    }
    printList(){
        let arrayOfCards = []
        for(let object of this.state.restaurantLists){
            arrayOfCards.push(<RestaurantCard restaurant={object} name={this.state.userName} navigation={this.props.history}/>)
        }
        return arrayOfCards;
    }

    render(){
        return(
        <div>
            <HeaderComponent userName={this.state.userName} />
            <div class="main-Container">
                 {this.printList()} 
            </div> 
        </div>   
       );
    }
}

export default RestaurantComponent;