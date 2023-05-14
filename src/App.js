import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Route, Routes, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>

      {/* defined the routes */}
      <Routes>
        <Route path='/' exact />
        <Route path='/add-expense' exact />

        {/* error route if any other routes is accessed the page will be redirected to home ie '/' */}
        <Route  path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
