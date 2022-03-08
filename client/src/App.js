import { Box } from '@material-ui/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//components

import Header from './components/Header';
import Home from './components/home/Home';
import DetailView from './components/post/DetailView';
import CreateView from './components/post/CreateView';
import UpdateView from './components/post/UpdateView';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box style = {{marginTop: 64}}>
        <Routes>
          
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/details/:id" element={<DetailView/>}/>
          <Route exact path="/create" element={<CreateView/>}/>
          <Route exact path="/update/:id" element={<UpdateView/>}/>

        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;