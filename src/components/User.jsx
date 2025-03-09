import { useState } from "react"

const User = ({ name }) => {

  const [count] = useState(0);
  return (
    <div className="user-card">
        <h1>Count = {count}</h1>
        <h2>Name: {name}</h2>
        <h3>Location: Mumbai</h3>
        <h3>Contact: @sujeetmarch18</h3>
    </div>
  )
}

export default User