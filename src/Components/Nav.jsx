// Import in Link so we can use it in our code

import { Link } from 'react-router-dom'

const Nav =() => {
    return (
        <div className ="Nav">

            <Link to ="/">
                <h2>Home</h2>
            </Link>

            <Link to="/componentA">
                <h2> Component A</h2>
            </Link>
            
            <Link to="/componentB">
                <h2> Component B </h2>
            </Link>

        </div>

    )
}

export default Nav