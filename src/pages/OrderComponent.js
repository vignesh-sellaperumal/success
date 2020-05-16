import  React from 'react';
import '../styles/restaurant-list.css';
import HeaderComponent from '../components/HeaderComponent';
import ButtonComponent from '../components/ButtonComponent';
import ItemComponent from '../components/ItemComponent';
import CartComponent from '../components/CartComponent';
import RestaurantServices from '../util/RestaurantServices';
import RestaurantCard from '../components/RestaurantCard';
class OrderComponent extends React.Component{
    
    constructor(){
        super();
        this.state = {
            userName: '',
            menuLists : [],
            cartLists : [],
            arrayCartItems : [],
            total : 0,
            grandTotal : 0
        }
    }
    componentWillMount(){
        this.setState({userName: this.props.match.params.username});
        this.setState({
            menuLists : RestaurantServices.readMenuJSONFile(this.props.match.params.id)
        });
    }
    printList(){
        let arrayOfCards = []
        for(let object of this.state.menuLists){
            arrayOfCards.push(<ItemComponent items={object} navigation={this.props.match.params.id} method={this.printCart}/>)
        }
        return arrayOfCards;
    }
    printCart = (id) => {
        
        for(let object of this.state.menuLists){
            if(id==object.id){  
                let flag=0;
                    for(let index of this.state.arrayCartItems){
                        if(index==id){
                            flag=1
                        }
                    }
                    if(flag!=1) {
                        var join = this.state.arrayCartItems.concat(object.id);
                        this.setState({arrayCartItems : join})
                        var joined = this.state.cartLists.concat(<CartComponent cart={object} methodAdd={this.calculateTotal} methodSub={this.calculateSub}/>);
                        this.setState({ cartLists: joined })
                    }
                    else{
                        var count=0
                        let array = [...this.state.cartLists];
                        
                            one:
                            for(let objTwo of this.state.cartLists){
                                if(id!=objTwo.props.cart.id){
                                    count=count+1;
                                }
                                else{
                                    break one;
                                }                                
                            }
                    
                        array.splice(count,1);
                        this.setState({ cartLists:  array})

                        let arrayTwo = [...this.state.arrayCartItems];
                        let index = arrayTwo.indexOf(id)
                        arrayTwo.splice(index,1);
                        this.setState({ arrayCartItems: arrayTwo })
                    }
            }   
        }    
        return this.state.cartLists;
    }
    calculateTotal = (amount) =>{
        let amt=amount+this.state.total;
        this.setState({
            total:amt,
            grandTotal : amt - 45
        })
    }
    calculateSub = (amount) =>{
        let amt=this.state.total-amount;
        if(amt>0){
        this.setState({
            total:amt,
            grandTotal:amt-45
        })
        }
        else{
            this.setState({
                total:0,
                grandTotal:0
            })
        }
    }
    infoUser(id){
        if(id!=0)
            alert("We will reach you ASAP! :)")
    }
    render(){
        return(    
        <div>
            <HeaderComponent userName={this.state.userName} />
            <div class="main-container">
                <div class="first-container">
                    <div class="first-sub1">
                        <div>
                        <h1 id="biriyani">The Biriyani Point</h1>
                        <h5 class="indian-biriyani">Indian Biriyanis</h5>
                        <h5 class="indian-biriyani">Kodambakkam, Chennai</h5>
                        </div>
                    </div>
                    <div>
                        <div>
                        <h1 id="item-order">Order Now</h1>
                        </div>
                        {this.printList()}
                    </div>
                </div>
                <div class="second-container">
                    <div className="second-sub3">
                    <h3 id="cart-title">My Cart</h3>
                    </div>
                    {this.printCart()}
                    
                    <div class="second-sub2">
                        <h5 class="total2">Sub Total<span class="sub-total">Rs.{this.state.total}</span></h5>
                        <h5 class="total">Delivery Charges<span className="sub2">45</span></h5>
                        <h5 class="total">Coupon(SUPER)<span className="sub2">-90</span></h5>
                        <h5 class="total2">Grand Total<span class="sub-total">Rs.{this.state.grandTotal}</span></h5>
                        <ButtonComponent type="submit" value="PAY NOW" id="submit" onClick={()=>this.infoUser(this.state.grandTotal)}/>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default OrderComponent;