import { RestaurantCard } from './RestaurantCard'
import resList from '../utils/mockData'

  export const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div className="res-container">
          {resList.map((restaurant) => (
              <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
          ))};
  
        </div>
      </div>
    )
  }