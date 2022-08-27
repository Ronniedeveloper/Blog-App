import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404 Sorry</h1>
            <p>The page cannot be found!</p>
            <Link to='/'>Go back to homepage</Link>
        </div>
    );
}
 
export default NotFound;