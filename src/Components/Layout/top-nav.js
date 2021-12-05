import { Link } from 'react-router-dom';
import './nav.css';
//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//ReactStrap JS
import {Container, Navbar, Nav} from 'react-bootstrap';
function TopNav() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                <Link to='/' class="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='nav-link'>Home</Link>
                            <Link to='/notifications' className='nav-link'>Notifications</Link>
                            <Link to='/about' className='nav-link'>About Us</Link>
                            <Link to='/login' className='nav-link'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default TopNav;