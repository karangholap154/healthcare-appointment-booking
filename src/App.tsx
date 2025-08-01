import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import DoctorList from './components/DoctorList';
import DoctorProfile from './components/DoctorProfile';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<DoctorList />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;