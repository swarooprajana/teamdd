import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Createaccount from "./pages/Createaccount";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Subscription from "./Subscription";
import NavBar from "./components/NavBar";
import  Video from "./pages/Video";
import Categories from "./pages/Categories";
import ProfilePage from "./pages/Profile1";
import Action from "./pages/Action";
import EditProfile from "./pages/EditProfile";
import AccountSettings from'./pages/AccountSettings';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Emailott from "./pages/Emailott";
import Confirm from "./pages/Confirm"
import EditProfile1 from "./pages/EditProfile1";
import History from "./pages/History";
import Anime from "./pages/Anime";
import Comedy from "./pages/Comedy";
import Documentry from "./pages/Documentry";
import Imageslider from "./pages/Imageslider";
import Movies from "./pages/Movies";
import Tvshows from "./pages/Tvshows";
import Drama from "./pages/Drama";
import Fantasy from "./pages/Fantasy";
import Horror from "./pages/Horror";
import Kids from "./pages/Kids";
import Scifi from "./pages/Scifi";
import Recommended from "./pages/Recomended";
import Topsingles from "./pages/Topsingles";
import PaymentPage from "./pages/PaymentPage";
import CategoryPage from "./pages/Category";
import MovieDetails from "./pages/MovieDetails";
import DownloadPage from "./pages/Download";
function AppRoutes() {
  return (
    <Router>
<NavBar/>
      <Routes>
        <Route path="/" element={<Createaccount/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Welcome" element={<Welcome/>}/>
        <Route path="/Subscription" element={<Subscription/>}/> 
        <Route path="/Imageslider" element={<Imageslider />} />
        <Route path="/Video" element={<Video/>}/>      
        <Route path="/Profile1" element={<ProfilePage/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/EditProfile" element={<EditProfile/>}/>
        <Route path="/AccountSettings" element={<AccountSettings/>}/>
        <Route path="/Subscription" element={<Subscription/>}/>
        <Route path="/Video" element={<Video/>}/>
        <Route path="/Categories" element={<Categories/>}/> 
        <Route path="/Anime" element={<Anime/>}  />
        <Route path="/Comedy" element={<Comedy/>}/>
        <Route path="/Documentry" element={<Documentry/>}/>
        <Route path="/Emailott" element={<Emailott/>}/>
        <Route path="/Confirm" element={<Confirm/>}/>
        <Route path="/EditProfile1" element={<EditProfile1/>}/>
        <Route path="/History" element={<History/>}/>  
        <Route path="/Action" element={<Action/>}/>
        <Route path="/Drama" element={<Drama/>}/>
        <Route path="/Fantasy" element={<Fantasy/>}/>
        <Route path="/Horror" element={<Horror/>}/>
        <Route path="Kids" element={<Kids/>}/>
        <Route path="Scifi" element={<Scifi/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Tvshows" element={<Tvshows/>}/>
        <Route path="/recomended" element={<Recommended/>}/>
        <Route path="/top" element={<Topsingles/>}/>
        <Route path="/pay" element={<PaymentPage/>}/>
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/download" element={<DownloadPage />} />



      </Routes>
    </Router>
  );
}


export default AppRoutes;
