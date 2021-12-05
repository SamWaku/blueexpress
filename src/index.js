import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import App from "./App";
//Pages Imports
import Login from "./Pages/login";
import SignUp from "./Pages/sign-up";
import Notifications from './Pages/Notifications';
import UserProfile from "./Pages/user-profile";
import AboutUs from "./Pages/about-page";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/notifications" element={<Notifications />} />
      
    </Routes>
  </BrowserRouter>,
  rootElement
);