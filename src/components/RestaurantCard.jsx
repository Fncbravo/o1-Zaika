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
       <div className="res-card">
         <img 
           className='res-logo'
           alt="res-logo"
           src={ CDN_URL + 
             resData.info.cloudinaryImageId
           }  
           />
        <h3>{name}</h3>
        <h4>{cuisines}</h4>
        <h4>{costForTwo}</h4>
        <h4>{avgRating}</h4>
       </div> 
     )
   };