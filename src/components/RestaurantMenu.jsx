import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=671928&catalog_qa=undefined&submitAction=ENTER"
     );
    const json = await data.json();

    console.log(json);
    setResInfo(json.data);
  }

if (resInfo === null) return <Shimmer/ >; 

  const {name, cuisines, costForTwoMessage} = 
  resInfo?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{costForTwoMessage}</h3>
        
        <ul>
          <li>Biryani</li>
          <li>Burgers</li>
          <li>Diet coke</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;