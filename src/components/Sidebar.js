import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/developers">Developers</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    );
}

export default Sidebar;