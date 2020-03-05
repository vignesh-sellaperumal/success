import React from "react";
import "./App.css";
import "./styles/order-list.css";
import "./styles/restaurant-list.css";
import "./styles/login.css";
import "./pages/LoginComponent.js";
import "./pages/RestaurantComponent.js";
import "./pages/OrderComponent.js";
import LoginComponent from "./pages/LoginComponent.js";
import RestaurantComponent from "./pages/RestaurantComponent.js";
import OrderComponent from "./pages/OrderComponent.js";
import {BrowserRouter, Route} from "react-router-dom";
function App() {
  return (
   <BrowserRouter>
   <Route exact path={"/"} component={LoginComponent} />
   <Route exact path={"/restaurants"} component={RestaurantComponent} />
   <Route exact path={"/order/:id"} component={OrderComponent} />
   </BrowserRouter>
  );
}

export default App;