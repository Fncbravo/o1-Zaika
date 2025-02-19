import './index.css';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *    - Restaurant Card
 *      - Image
 *      - Name
 *      - Rating
 *      - Cusines
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className='header'>
      <div className="logo-container">
        <img 
           className='logo'
           src="https://preview.redd.it/how-would-i-take-a-logo-like-a-fast-food-logo-remove-the-v0-vp4l25hezqfd1.jpeg?width=640&crop=smart&auto=webp&s=5cb3aad43002d9455f7c0f4595304e564045036e" 
           alt="Logo"
         />
      </div>
      <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
 const { resData } = props;
    return (
    <div className="res-card">
      <img 
        className='res-logo'
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"  
        />
     <h3>{resData.info.name}</h3>
     <h4>{resData.info.cuisines.join(", ")}</h4>
     <h4>{resData.info.costForTwo}</h4>
     <h4>{resData.info.avgRating}</h4>
    </div> 

  )
};

const resObj = {
  "info": {
    "id": "25620",
    "name": "KFC",
    "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fc1726b6-290d-463d-9baa-d1c34c0542fc_25620.JPG",
    "locality": "Intermediate Ring Road",
    "areaName": "Ejipura",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Fast Food",
      "Rolls & Wraps"
    ],
    "avgRating": 4.3,
    "parentId": "547",
    "avgRatingString": "4.3",
    "totalRatingsString": "32K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 0.9,
      "serviceability": "SERVICEABLE",
      "slaString": "30-35 mins",
      "lastMileTravelString": "0.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2025-02-19 23:59:00",
      "opened": true
    },
    "badges": {

    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {

        },
        "textBased": {

        },
        "textExtendedBadges": {

        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹59"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "lottie": {

        },
        "video": {

        }
      }
    },
    "reviewsSummary": {

    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {

    },
    "externalRatings": {
      "aggregatedRating": {
        "rating": "--"
      }
    },
    "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
    "context": "seo-data-d29907ba-4af8-41ae-b5f6-0207cb4dffde"
  },
  "cta": {
    "link": "https://www.swiggy.com/city/bangalore/kfc-intermediate-ring-road-ejipura-rest25620",
    "type": "WEBLINK"
  }
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="res-container">
        <RestaurantCard 
         resData = {resObj}
        />
{/*         
        <RestaurantCard resName= "KFC" cuisine="Burger, Fries" rating={4.2} time={25}/>
        <RestaurantCard resName= "Domino's" cuisine="Pizza,Pasta" rating={4.1} time={35}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
        <RestaurantCard resName= "PizzaHut" cuisine="Pizza, Wings" rating={4.0} time={40}/>
         */}
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <Header />
      <Body />
    </>
  )
};

export default App
