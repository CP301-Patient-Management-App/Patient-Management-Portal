import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import CreateDoctor from './components/doctorPost/CreateDoctor';
import Signup from './components/signup';
import Login from './components/login';
import AboutUs from './components/aboutus';
import ContactUs from './components/contactus';
import DoctorSpeciality from './components/doctorPost/DoctorSpeciality';
import DoctorCards from './components/doctorPost/DoctorCards';



function App() {
	const user  = JSON.parse(localStorage.getItem('token'))
  // const user = localStorage.getItem("token")
  const [searchItem, setSearchItem] = useState("");


  return (
    <BrowserRouter>
      {user && user.categories === 'Admin' && <Header setSearchItem={setSearchItem} />}
      <Box >
        <Routes>
          <Route exact path="/login" element = {<Login />}/>
          {user && user.categories === 'Admin' && <Route exact path="/" element={<Home  searchItem={searchItem}/>}/>}
          {user && <Route exact path="/details/:id" element={<DetailView/>}/>}
          {user && <Route exact path="/create" element={<CreateView/>}/>}
          {user && <Route exact path="/update/:id" element={<UpdateView/>}/>}
          <Route exact path="/aboutus" element = {<AboutUs />}/>
          <Route exact path="/contactus" element = {<ContactUs />}/>
          <Route exact path="/signup" element = {<Signup />}/>
          <Route exact path="/createDoctor" element={<CreateDoctor/>}/>
          <Route exact path="/speciality" element={<DoctorSpeciality/>}/>
          <Route exact path="/Doctors" element={<DoctorCards/>}/>
          {/* <Route exact path="/DoctorPosts" element={<DoctorPosts/>}/> */}
          <Route exact path="/" element={<Navigate replace to = "/login" />} />

        </Routes>
      </Box>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;