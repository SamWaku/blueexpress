import '../Components/footer.css';
import { Link } from 'react-router-dom';
function About() {
    return (
        <footer className="bd-footer py-5 mt-5 bg-dark aos-item " >
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-3 mb-3">
                        <ul className="list-unstyled small text-muted">
                            <li className="mb-2">Making parcel delivery easier, faster, safer and cheaper</li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <p className='header-text'>About us</p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/">Terms & Conditions</Link></li>
                            <li className="mb-2"><Link to="/docs/5.0/">Help</Link></li>
                            <li className="mb-2"><Link to="/docs/5.0/examples/">How it works</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Shopping Seervices</p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="https://www.shopeasywholesale.com">Shopeasy</a></li>
                            <li className="mb-2"><a href="https://www.nalumall.com">Nalu Mall</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Follow us</p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/">Facebook</Link></li>
                            <li className="mb-2"><Link to="/">Instagram</Link></li>
                            <li className="mb-2"><Link to="/">Twitter</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <p className='header-text'>Contact us</p>
                        <ul className="list-unstyled">
                            <li className="mb-2"><Link to="/">+260</Link></li>
                            <li className="mb-2"><Link to="/">info@blueexpress.com</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default About;