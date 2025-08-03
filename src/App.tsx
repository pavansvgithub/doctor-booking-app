import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookAppointment from "./pages/BookAppointment";
import Home from "./pages/Home";
import DoctorProfile from "./pages/DoctorProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/book/:id" element={<BookAppointment />} />
      </Routes>
    </Router>
  );
}

export default App;
