import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import './app.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
    );
};

export default App;

