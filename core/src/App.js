import "./App.css";
import Builder from "./components/Builder/builder.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home.jsx";
import Login from "./components/Auth/Login.jsx";
import Signup from "./components/Auth/SignUp.jsx";
import DataProvider from "./components/Builder/context/dataContext.jsx";
import ProtectedRoute from "./server/routes/ProtectedRoute.js";
import Navbar from "./components/home/navbar/navbar.jsx";
import Profile from "./components/profile/profile.jsx"; // Import Profile
import CreateResume from "./components/profile/CreateResume.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <DataProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/create-resume"
              element={<ProtectedRoute><CreateResume /></ProtectedRoute>} // New route
            />
            <Route
              path="/editor"
              element={<ProtectedRoute><Builder /></ProtectedRoute>}
            />
            <Route
              path="/profile"
              element={<ProtectedRoute><Profile /></ProtectedRoute>}
            />
            <Route path="/" element={<Home />} />
          </Routes>
        </DataProvider>
      </div>
    </Router>
  );
}

export default App;