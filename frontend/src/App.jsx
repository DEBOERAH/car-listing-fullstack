
import React from 'react'
import { useState } from 'react'
import Navigationbar from './components/Header/Navigationbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/contact/Contact'
import Addcar from './components/addcar/Addcar'
import Blog from './components/Blog/Blog'
import PageNotfound from './components/notfound/PageNotfound'
import AllCars from './components/addcar/AllCars'
import Register from './components/Authentication/Register'
import Login from './components/Authentication/Login'


const App = () => {
const[authToken,setAuthToken] = useState(false);
const [user,setUser] = useState({});

  return (
    <>
      {/* Navigationbar */}

      <Navigationbar 
      authToken={authToken}
      setAuthToken={setAuthToken}
      user={user}
      setUser={setUser}/>
      {/*  react router setup */}
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/allcars" element={<AllCars />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path ="/addcar" element={<Addcar/>}/>
        <Route path="*" element={<PageNotfound/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/Login" element={<Login setAuthToken={setAuthToken}/>} />
      </Routes>




      <Footer />
      {/*  */}


    </>
    // <div>

    // <h1>carlistingbay</h1>
    // <Login></Login>
    // <Counter/>

    // <BButton bgColor={'red'}> Logout</BButton>
    // <Imagegallery></Imagegallery>
    // <Teamlist/>
    // <AddTeamForm/>
    // </div>

  )
}

export default App