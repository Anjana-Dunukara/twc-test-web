import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import Welcome from "./pages/Welcome";
import NewContact from "./pages/NewContact";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/newcontact" element={<NewContact />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
