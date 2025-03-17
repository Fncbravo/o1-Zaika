import User from "./User"
import UserClass from "./UserClass"
import { Component } from 'react'

class About extends Component {

  constructor(props) {
    super(props);

    console.log("Parent Constructor");

  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  
  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        
        <UserClass name={"Sujeet (class)"} location={"mumbai (class)"}/> 
      </div>
    )
  }
}



export default About