import mockData from '../resources/data/mockData.json'

class RestaurantServices{
    
    static readFromJSONFile(){
        var restaurantsList = [];
        var restaurantsFromFile = mockData;
        for(let currentRestaurant of restaurantsFromFile){
            let object = {
                id: currentRestaurant.id,
                name: currentRestaurant.name,
                address: currentRestaurant.address,
                foodType: currentRestaurant.cuisines,
                distance: currentRestaurant.rating,
                review: currentRestaurant.reviews,
                imageURL:currentRestaurant.feature_image
            }
            restaurantsList.push(object);
        }
        return restaurantsList;
    }
    static readMenuJSONFile(id){
        var menu = [];
        var restaurantsFromFile = mockData;
        for(let currentRestaurant of restaurantsFromFile){
            if(currentRestaurant.id == id){
                return currentRestaurant.menu;
            }
        }
    }
}
export default RestaurantServices;