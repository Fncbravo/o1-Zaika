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
           src="https://preview.redd.it/how-would-i-take-a-logo-like-a-fast-food-logo-remove-the-v0-vp4l25hezqfd1.jpeg?width=640&crop=smart&auto=webp&s=5cb3aad43002d9455f7c0f4595304e564045036e" alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Cart</li></ul>
      </div>
    </div>
  )
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <img 
        className='res-logo'
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A" alt="Restaurant" />
     <h3>{props.resName}</h3>
     <h4>{props.cuisine}</h4>
     <h4>4.5 stars</h4>
     <h4>38 minutes</h4>
    </div> 

  )
};

const resObj = {
  type: "restaurant",
  data: {
    type: "F",
    name: "KFC",
    cuisines: "Burger,Fries",
    avgRating: 3.8
  }
}

const resData = resObj;

const Body = (resData) => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="res-container">
        <RestaurantCard 
        resName= {resData.data.name}
        cuisine= {resData.data.cuisines}
        Rating = {resData.data.avgRating}
        
        />
        <RestaurantCard resName= "KFS" cuisine="Chicken Burger"/>
        <RestaurantCard resName= "KFS" cuisine="Chicken Burger"/>
        <RestaurantCard resName= "KFS" cuisine="Chicken Burger"/>
        <RestaurantCard resName= "KFS" cuisine="Chicken Burger"/>
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
