import React from 'react';

class UserClass extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default", 
            }
        };
        // console.log(this.props.name + "Child Constructor")
    }

    async componentDidMount() {
        // console.log(this.props.name + "Child componentDidMount");
        // Api call

        const data = await fetch("https://api.github.com/users/fncbravo");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });

        console.log(json);
    }
 
    render() {

        // console.log(this.props.name + "Child Render")

        const { name, location, avatar_url } = this.state.userInfo;

    return (
        <div className="user-card">
            <img src={avatar_url} alt="user" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @sujeetmarch18</h3>
            
        </div>
    )

  }
}

export default UserClass;