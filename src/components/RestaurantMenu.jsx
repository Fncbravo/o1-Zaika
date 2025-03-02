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

  const {itemCards} = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards)

  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li>{item.card.info.name} - {"Rs "}
            {item.card.info.price / 100}</li>
            ))}
          <li>{itemCards[0].card.info.name}</li>
          <li>{itemCards[1].card.info.name}</li>
          <li>{itemCards[2].card.info.name}</li>
          <li>{itemCards[3].card.info.name}</li>
        </ul>
    </div>
  )
}

export default RestaurantMenu;