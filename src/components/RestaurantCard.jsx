 import { CDN_URL } from "../utils/constants";
 
 
 export const RestaurantCard = (props) => {
    const { resData } = props;
   
    const { 
     cloudinaryImageId,
     name,
     cuisines,
     costForTwo,
     avgRating
    } = resData?.info;
   
       return (
       <div className=" restaurant-card w-56 p-2 m-2 bg-yellow-100 shadow-lg rounded-lg hover:bg-yellow-200">
         <img 
           className='rounded-lg'
           alt="res-logo"
           src={ CDN_URL + 
             resData.info.cloudinaryImageId
           }  
           />
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
       </div> 
     )
   };