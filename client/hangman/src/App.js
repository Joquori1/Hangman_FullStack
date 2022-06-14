import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //front end routing
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';


const App = () => {
    return (
    <div>
<BrowserRouter>
<Routes>
    <Route path="/login" exact component ={Login} />
    <Route path="/register" exact component ={Register} />
    <Route path="/dashboard" exact component ={Dashboard} />
</Routes>
</BrowserRouter>

    </div>
    );
}



export default App;
