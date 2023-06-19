// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Propertydetail from "./pages/propertyDetail/Propertydetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/property" element={<Propertydetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
