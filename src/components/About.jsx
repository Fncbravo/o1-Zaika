import User from "./User"
import UserClass from "./UserClass"
import { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props);

    // console.log("Parent Constructor");

  }

  componentDidMount() {
    // console.log("Parent component Did Mount");
  }
  
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        
        <UserClass name={"First"} location={"mumbai (class)"}/> 
      </div>
    )
  }
}


/*
- Parent Constructor
- Parent Render


  - Sujeet Constructor
  - Sujeet Render

  - Elon Constructor
  - Elon Render  

    <DOM UPDATEED - IN SINGLE BATCH>  

  - First Component Did Mount
  - Second Component Did Mount

- Parent Component Did Mount
 */


export default About