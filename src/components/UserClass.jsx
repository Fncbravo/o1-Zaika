import React from 'react';

class UserClass extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
        console.log("Child Constructor")
    }

    componentDidMount() {
        console.log("Child componentDidMount");
    }
 
    render() {
        const { name, location } = this.props;
        const { count } = this.state;

        console.log("Child Render")

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <button onClick={() => {
                // NEVER UPDATE STATE VAIRABLES DIRECTLY
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 1,
                })
            }}>Count increase</button>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @sujeetmarch18</h3>
        </div>
    )

  }
}

export default UserClass;