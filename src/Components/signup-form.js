
import { Link } from 'react-router-dom';
import '../Components/login-form.css';
function SignUpForm() {
    return (
        <div className="d-flex p-2 form-container">
            <div className='header-text'>
                <Link to='/' class="navbar-brand"><span className='logo'>Blue</span> Express</Link>
                
                <p className='h2'>Create an Account</p>
            </div>
            <form>
                <div className="mb-3">
                    <label for="UserEmailOrPhone" className="form-label">Email or Phone Number: </label>
                    <input type="text" className="form-control" id="UserEmailOrPhone" placeholder='Enter an Email or Phone Number' />
                    
                </div>
                <div className="mb-3">
                    <label for="InputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="InputPassword1" placeholder='Enter A Password' />
                </div>
                <div className="mb-3">
                    <label for="InputPassword2" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="InputPassword2" placeholder='Confirm Your Password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <div class='bottom-div'>
                    <p>Already Have an Account ?<Link to='/login'>  Login</Link></p>
                </div>
            </form>
        </div>
    );
}


export default SignUpForm;