// import BButton from './components/shared/BButton'


// const App = () => {
//   //handle next
//   const handleNext = () => {

//     alert('next clicked')

//   }
//   //handle sell
//   const handleSell = () => {

//     alert('sell clicked')
//   }
//   //handle buy
//   const handleBuy = () => {

//     alert('buy clicked')
//   }
//   //handle signup
//   const handleSignup = () => {

//     alert('signup clicked')
//   }
//   return (
//     <div>
//       <h1>Car listing Bay</h1>

//       <div>
//         <BButton  btnFunc={handleSell} bradius={'10px'} bgColor="orange"><i className="fa-solid fa-arrow-right"></i>SELL</BButton>
//         <BButton   btnFunc={handleNext} bradius='0px'>NEXT <i className="fa-solid fa-arrow-left"></i></BButton>
//         <BButton btnFunc={handleBuy} bgColor='red'>READ</BButton>  
//         <BButton bgColor='green'>Buy</BButton>
//         <BButton/>
//         <BButton  btnFunc={handleSignup} bgColor='pink'>Login</BButton>
//         <BButton/>
//       </div>
//       <div>
//         <BButton btnName="activeBtn">submit form</BButton>
//         <BButton btnName="inactiveBtn">submit form</BButton>
//       </div>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Counter from './components/counter/counter'
import BButton from './components/shared/BButton'
import { useState } from 'react'
import Imagegallery from './components/Imagegallery'
import Teamlist from './components/team/Teamlist'
import AddTeamForm from './components/addcar/AddTeamForm'
import Navigationbar from './components/Header/Navigationbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Listing from './components/listing/Listing'
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