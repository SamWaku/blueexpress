import logo from './logo.svg';
import './App.css';
//Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
//Router Import
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Pages Imports
import Home from "./Pages/home";
import Login from "./Pages/login";
import SignUp from "./Pages/sign-up";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact component={<Home />} />
        <Route path='/login' component={<Login />} />

        <Route path='/signup' exact component={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
