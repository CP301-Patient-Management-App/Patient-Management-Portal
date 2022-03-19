import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//components

import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';
import Signup from './components/signup';
import Login from './components/login';

function App() {
  const user = localStorage.getItem("token")
  return (
    <BrowserRouter>
      {user && <Header />}
      <Box >
        <Routes>
          <Route exact path="/login" element = {<Login />}/>
          {user && <Route exact path="/" element={<Home/>}/>}
          {user && <Route exact path="/details/:id" element={<DetailView/>}/>}
          {user && <Route exact path="/create" element={<CreateView/>}/>}
          {user && <Route exact path="/update/:id" element={<UpdateView/>}/>}
          <Route exact path="/signup" element = {<Signup />}/>
          <Route exact path="/" element={<Navigate replace to = "/login" />} />

        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;