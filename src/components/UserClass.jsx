import React from 'react';

class UserClass extends React.Component {
 
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }
 
    render() {
        const { name, location } = this.props;
        const { count } = this.state;

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h3>Contact: @sujeetmarch18</h3>
        </div>
    )

  }
}

export default UserClass;