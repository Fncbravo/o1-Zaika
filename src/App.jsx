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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img 
        className='res-logo'
        alt="res-logo"
        src="https://b.zmtcdn.com/data/pictures/7/19285497/9c530580290ed4b23f583ad3f218dc86.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="Restaurant" />
     <h3>Meghna's Kitchen</h3>
    </div> 

  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="res-container">
        <RestaurantCard />
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
