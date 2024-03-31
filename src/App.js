import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TaskTable from "./pages/Table";
import SignUp from './pages/Signup';
import Login from './pages/Login';
import ForgotPW from './pages/ForgotPW';

function App() {
  return (
    <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/table" element={<TaskTable />} />
        <Route path="/forgotpw" element={<ForgotPW />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
