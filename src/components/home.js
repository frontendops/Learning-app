import React, {Component}  from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="">quizzly</h1>

                <Link to="/create" >
                    <button type="button" className="btn btn-primary">create quiz</button>
                </Link>
                

                
            </div>
        )
    }
}

export default Home;