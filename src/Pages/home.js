//Components
import TopNav from "../Components/Layout/top-nav";
import Slider from "../Components/slider";
import ParcelTracker from '../Components/parcel-tracker';
import Services from '../Components/our-services';
import ShipmentForm from "../Components/ship-form";
import AboutUs from '../Components/footer';
import BottomNav from '../Components/Layout/bottom-nav';
//Home CSS
import "./Home.css"

function Home(){
    return(
        <div className='body'>
            <TopNav />
            <Slider/>
            <br/>
            <ParcelTracker/>
            <Services />
            <ShipmentForm/>
            <AboutUs/>
            <BottomNav/>
        </div>
    )
}

export default Home;