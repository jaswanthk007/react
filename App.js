import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("test"));
/*header*/
const Menu = ()=>{return(
    <div className="header">
    <div>
        <img src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" className="logo"/>
    </div>
    <div>
    <ui className="menu">
        <li>Home</li>
        <li>Restaurants</li>
        <li>Offers</li>
        <li>Help</li>
    </ui>
    </div>
    </div>
)}
/*search*/
const Search = ()=>{return(
    <div className="search-div"> 
    <input type="search" className= "search"/>
    <div className="btn search">Search</div>
    </div>
)}
/*testaurantcard*/
const Restaurantcard = (props) =>
{console.log(props)
    return(
    <div className="card">
        <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/e758ecc0debf8e049aa92c598135d25d" className="img-width"/>
    <h3>{props.name}</h3>
    <p>Bakery, American</p>
    </div>
)}
/*const Test = ()=> {
  const colors [color, setColor] = useState("red");
  return (
    <>
    <h1>My favorite color is {color}!</h1>
    <button
      type="button"
      onClick={() => setColor("blue")}
    >Blue</button>
    </>
  )
}*/
const FavoriteColor = () =>{
    const [color, setColor] = useState("red");
  return (
      <>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
        <button
          type="button"
          onClick={() => setColor("pink")}
        >Pink</button>
        <button
          type="button"
          onClick={() => setColor("green")}
        >Green</button>
      </>
    );
  }
/*rendering-componenet*/
const NewComponent = ()=>{
    return(<div id="testt">  
   <Menu/>
   <Search/>
   <div className="card-dis">
   <Restaurantcard name="Kamat" cusines="Biryani"/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <Restaurantcard/>
   <FavoriteColor/>
   </div>
   </div>)};

root.render(<NewComponent/>)
