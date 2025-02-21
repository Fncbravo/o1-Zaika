import { RestaurantCard } from './RestaurantCard'
import resList from '../utils/mockData'


  export const Body = () => {
  let listOfRestaurants = [
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
          avgRating: "1.2",
        }}

];

    return (
      <div className="body">
        <div className="filter">
          <button className='filter-btn' onClick={()=> {
            // filter logic here
             listOfRestaurants = listOfRestaurants.filter(
              (res)=> res.info.avgRating > 4 
            );
            console.log(listOfRestaurants)
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