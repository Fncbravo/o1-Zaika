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
           src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
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