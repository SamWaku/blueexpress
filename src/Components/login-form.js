
import { Link } from 'react-router-dom';
import '../Components/login-form.css';
function LoginForm() {
    return (
        <div className="d-flex p-2 form-container">
            <div className='header-text'>
                <Link to='/' class="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                
                <p className='h2'>Sign into your Account</p>
            </div>
            <form>
                <div className="mb-3">
                    <label for="UserEmailOrPhone" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="UserEmailOrPhone" />
                    
                </div>
                <div className="mb-3">
                    <label for="InputPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword" />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="Check" />
                    <label className="form-check-label" for="Check">Keep Signed In</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <div class='bottom-div'>
                    <p>Don't have an Account ?<Link to='/signup'>  Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
}


export default LoginForm;