import { Link } from 'react-router-dom';

function BottomNav() {
    return (
        <div>
            <ul class="footer-icons pt-2 fixed-bottom">
                <li><Link to='/'><i class="fa fa-home"></i> </Link></li>
                <li><Link to="/"><i class="fa fa-truck"></i> </Link></li>
                <li><Link to="/notifications"><i class="fa fa-bell"></i> </Link></li>
                <li><Link to="/user-profile"><i class="fa fa-user"></i> </Link></li>
            </ul>
        </div>
    )
}


export default BottomNav;