import { RestaurantCard } from './RestaurantCard'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

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

   if(listOfRestaurants.length === 0) {
    return <Shimmer />;
   }
   console.log(listOfRestaurants)

    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input 
            type="text" 
            className='search-box' 
            value={searchText} 
            onChange={(e)=> {
              setSearchText(e.target.value);
            }}
            />
            <button onClick={()=> {
                console.log(searchText);

                const filteredRestaurant = listOfRestaurants.filter((res) =>
                  res.info.name.includes(searchText)
              );

              setListOfRestaurants(filteredRestaurant);

            }}>Search</button>
            
          </div>
          <button className='filter-btn' onClick={()=> {
              
             const filteredList = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4 
            ); 
            setListOfRestaurants(filteredList);
          }}>Top rated Restaurants</button>
        </div>
        <div className="res-container">
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