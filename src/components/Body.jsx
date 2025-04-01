import { RestaurantCard } from './RestaurantCard'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

  export const Body = () => {

    // State variable - super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [searchText, setSearchText] = useState(""); 

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component)
    console.log("body rendered");

   useEffect(()=> {
    fetchData();
  }, []);

   const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
       );
       
       const json = await data.json();

       console.log(json);
       // Optional chaining
       setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   };

   const onlineStatus = useOnlineStatus();
   
   if(onlineStatus === false) 
    return (
      <h1>
        Looks like you are offline. Please check your internet connection.
      </h1>
    );

   if(listOfRestaurants.length === 0) {
    return <Shimmer />;
   }
   console.log(listOfRestaurants)

    return (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input 
            type="text" 
            className='border border-solid border-gray-400 rounded-lg p-2 m-2' 
            value={searchText} 
            onChange={(e)=> {
              setSearchText(e.target.value);
            }}
            />
            <button className='bg-blue-100 p-2 m-2 rounded-lg border border-solid border-gray-400'
            onClick={()=> {
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.includes(searchText)
              );

              setListOfRestaurants(filteredRestaurant);

            }}>Search</button>
            
          </div>
          <div className='search m-4 p-4 flex items-center'>
          <button className='bg-blue-100 p-2 m-2 rounded-lg border border-solid border-gray-400' 
                  onClick={()=> {
              
             const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4 
            ); 
            setListOfRestaurants(filteredList);
          }}>Top rated Restaurants</button> 
          </div>
        </div>
        <div className="restaurant-list flex flex-wrap">
          {listOfRestaurants.map((restaurant) => (
             <Link 
             key={restaurant.info.id}
             to={"/restaurants/" + restaurant.info.id}
             >
              <RestaurantCard resData = {restaurant}/></Link>
          ))}
        </div>
      </div>
    )
  }