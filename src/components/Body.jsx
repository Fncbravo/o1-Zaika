import { RestaurantCard } from './RestaurantCard'
import resList from '../utils/mockData'
import { useEffect, useState } from 'react';


  export const Body = () => {

    // State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

   useEffect(()=> {
    fetchData();
  }, []);

   const fetchData = async () => {
    const data = fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
       );

       const json = await data.json();

       console.log(json)

   };

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