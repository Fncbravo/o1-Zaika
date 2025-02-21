import { RestaurantCard } from './RestaurantCard'
import resList from '../utils/mockData'
import { useState } from 'react';


  export const Body = () => {

    // State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    // normal js variable
  let listOfRestaurantsJS = [
    {
      info: {
        id: "25620",
        name: "KFC",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        costForTwo: 4000,
        deliveryTime: 36,
        avgRating: "3.8",
      }},
      {
        info: {
          id: "25621",
          name: "Dominos",
          cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
          cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
          costForTwo: 4000,
          deliveryTime: 36,
          avgRating: "4.5",
        }},
        {
          info: {
            id: "25622",
            name: "MCD",
            cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
            cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
            costForTwo: 4000,
            deliveryTime: 36,
            avgRating: "4.1",
          }}

];

    return (
      <div className="body">
        <div className="filter">
          <button className='filter-btn' onClick={()=> {
              
             const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4 
            ); 
            setListOfRestaurants(filteredList);
          }}>Top rated Restaurants</button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))}
        </div>
      </div>
    )
  }