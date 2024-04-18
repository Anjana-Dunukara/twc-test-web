import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import NewContact from "./pages/NewContact";
import Contacts from "./pages/Contacts";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <ProtectedRoutes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/newcontact" element={<NewContact />} />
            <Route path="/contacts" element={<Contacts />} />
          </ProtectedRoutes>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
