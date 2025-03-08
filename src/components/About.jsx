import User from "./User"
import UserClass from "./UserClass"

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <User name= {"sujeet (function)"}/>

      <UserClass name={"Sujeet (class)"} location={"mumbai (class)"}/>
      
    </div>
  )
}

export default About