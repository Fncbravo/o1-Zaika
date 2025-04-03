import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import userRestaurantMenu from "../utils/userRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = userRestaurantMenu(resId);

if (resInfo === null) return <Shimmer/ >; 

  const {name, cuisines, costForTwoMessage} = 
  resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = 
  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  // const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"] === )

  return (
    <div className="menu">
        <h1>{name}</h1>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs "}
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