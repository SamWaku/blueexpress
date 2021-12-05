//Parcel Tracker CSS
import './parcel-tracker.css'
//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
function ParcelTracker() {
    return (
        <div className='container-fluid' >
            <div className="heading container-fluid mt-2 bg-light pt-4 pb-4 aos-item ">
                <div className="row">
                    <div className="col">
                        <div className="btn btn-lg">
                            <i className="fa fa-map-marker icon"></i> Locations
                        </div>
                    </div>

                    <div className="col">
                        <div className="btn btn-lg">
                            <i className="fa fa-qrcode icon"></i> Sign Parcel
                        </div>
                    </div>

                    <div className="col">
                        <div className="btn btn-primary">
                            <i className="fa fa-rocket"></i> Ship Now
                        </div>
                    </div>
                </div>
            </div>

            <div className="tracking_form container-fluid mt-2 pt-4 bg-light pb-4 aos-item ">
                <h4>Track your parcel</h4>
                <form className=" d-flex track mt-2 ">

                    <input className="form-control input-box" type="search" placeholder="Enter tracking number"
                        aria-label="Search" />
                    <button className="btn btn-outline-success btn-primary" id='track-btn' type="submit">Track</button>
                </form>
            </div>
        </div>
    )
}


export default ParcelTracker;