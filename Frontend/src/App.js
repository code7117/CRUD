import logo from './logo.svg';
import './App.css';
import Table from './Table/Table';
import UserForm from './form/Form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (

<>
    <Router>
         <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
   <Route path="/" element={<Table />} />
        <Route path="/userform" element={<UserForm />} />
        <Route path="/userform/:id" element={<UserForm />} />
      </Routes>
    </Router>
</>
 
  );
};

export default App;