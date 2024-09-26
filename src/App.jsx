// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Services from './Components/Services';
// import BhmsInfo from './Pages/Services/Info/BhmsInfo';  
// import BamsInfo from './Pages/Services/Info/BamsInfo';
// import MbbsInfo from './Pages/Services/Info/MbbsInfo';
// import BscSurgeryInfo from './Pages/Services/Info/BscSurgeryInfo';
// import BscTherapyInfo from './Pages/Services/Info/BscTherapyInfo';
// import NursingInfo from './Pages/Services/Info/NursingInfo';
// import AdmissionForm from './Pages/Services/AdmissionForm';
// import ThankYou from './Pages/Services/Info/ThankYou';
// import Dashboard from '../Admin/Dashboard';
// import Login from '../Admin/Login';
// import ProtectedRoute from '../Admin/ProtectedRoute';
// import { AuthProvider } from '../Admin/AuthContext';
// import AppointmentData from '../Admin/AppointmentData';

// AOS.init({
//   duration: 1000,
//   easing: 'ease-in-out',
//   once: false,
// });

// function App() {
//   return (
//     <AuthProvider>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/BhmsInfo" element={<BhmsInfo />} />
//         <Route path="/BamsInfo" element={<BamsInfo />} />
//         <Route path="/MbbsInfo" element={<MbbsInfo />} />
//         <Route path="/BscSurgery" element={<BscSurgeryInfo />} />
//         <Route path="/BscTherapy" element={<BscTherapyInfo />} />
//         <Route path="/NursingInfo" element={<NursingInfo />} />
//         <Route path="/AdmsnForm" element={<AdmissionForm />} />
//         <Route path="/thank-you" element={<ThankYou />} />
//         <Route path="/admin-dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
//         <Route path="/login" element={<Login />} />
//         <Route  path='/AppointmentData' element={<AppointmentData/>}  />
//       </Routes>
//       <Footer />
//     </AuthProvider>
//   );
// }

// export default App;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Services from './Components/Services';
import BhmsInfo from './Pages/Services/Info/BhmsInfo';  
import BamsInfo from './Pages/Services/Info/BamsInfo';
import MbbsInfo from './Pages/Services/Info/MbbsInfo';
import BscSurgeryInfo from './Pages/Services/Info/BscSurgeryInfo';
import BscTherapyInfo from './Pages/Services/Info/BscTherapyInfo';
import NursingInfo from './Pages/Services/Info/NursingInfo';
import AdmissionForm from './Pages/Services/AdmissionForm';
import ThankYou from './Pages/Services/Info/ThankYou';
import Dashboard from '../Admin/Dashboard';
import Login from '../Admin/Login';
import ProtectedRoute from '../Admin/ProtectedRoute'; // Ensure correct path
import AppointmentData from '../Admin/AppointmentData';
import { AuthProvider } from '../Admin/AuthContext'; // Ensure correct path

AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: false,
});

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/BhmsInfo" element={<BhmsInfo />} />
        <Route path="/BamsInfo" element={<BamsInfo />} />
        <Route path="/MbbsInfo" element={<MbbsInfo />} />
        <Route path="/BscSurgery" element={<BscSurgeryInfo />} />
        <Route path="/BscTherapy" element={<BscTherapyInfo />} />
        <Route path="/NursingInfo" element={<NursingInfo />} />
        <Route path="/AdmsnForm" element={<AdmissionForm />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route 
          path="/admin-dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/appointmentData" 
          element={
            <ProtectedRoute>
              <AppointmentData />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;
