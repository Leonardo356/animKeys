import React from 'react';
import MainPage from './pages/mainPage/mainPage';
import {Routes, Route} from 'react-router-dom'
import AppPage from './pages/appPage/appPage';

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/appPage" element={<AppPage />} />
        </Routes>
    </>
  );
}

export default App;
