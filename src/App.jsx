import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import {Route, Routes, useLocation, Navigate} from 'react-router-dom'
import SEOHead from './components/SEO/SEOHead';
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import VillaDetails from './pages/VillaDetails'
import RoomDetails from './pages/RoomDetails'
import MyBookings from './pages/MyBookings'
import BookingDetails from './pages/BookingDetails';
import { FaWhatsapp } from 'react-icons/fa';
import Contact from './pages/Contact'
import Partners from './components/Footer/Partners'
import About from './components/Footer/About'
import HelpCenter from './components/Footer/Help-center'
import Safety from './components/Footer/safety-info'
import NavbarGallery from './components/Navbar/Gallery'
import AboutGallery from './components/About/Gallery'
import SearchResults from './pages/SearchResults';
import { AuthProvider, useAuth } from './context/AuthContext';
import SignIn from './pages/SignIn';
import OTPVerification from './pages/OTPVerification';

// Auth Guard Component
const ProtectedRoute = ({ children }) => {
  const { authToken, loading } = useAuth();
  
  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!authToken) {
    return <Navigate to="/sign-in" replace />;
  }
  
  return children;
};

const App = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  
  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  const isOwnerPath = pathname.includes("owner");
  
  // Default SEO configuration for the entire app
  const getDefaultSEO = () => {
    // Base SEO settings
    let seoProps = {
      title: 'Luxor Holiday Home Stays | Luxury Villas in Chennai & Pondicherry',
      description: 'Experience premium luxury villa stays in Chennai and Pondicherry with Luxor Holiday Home Stays. Book our exclusive villas with private pools and luxury amenities.',
      keywords: 'luxor, luxor holiday, luxorstay, luxor holiday homestays, luxury villas, chennai villas, pondicherry villas'
    };

    // Route-specific SEO settings
    if (pathname === '/') {
      seoProps.title = 'Luxor Holiday Home Stays | Premium Luxury Villas in South India';
      seoProps.description = 'Discover Luxor Holiday Home Stays - the ultimate luxury villa experience in Chennai and Pondicherry. Book your perfect getaway today.';
    } else if (pathname.includes('chennai-villas')) {
      seoProps.title = 'Luxury Villas in Chennai | Luxor Holiday Home Stays';
      seoProps.description = 'Explore our exclusive collection of luxury villas in Chennai. Private pools, premium amenities, and exceptional service by Luxor Holiday Home Stays.';
      seoProps.keywords = 'luxor, luxor chennai, luxury villas in chennai, private pool villas, chennai homestays';
    } else if (pathname.includes('pondicherry-villas')) {
      seoProps.title = 'Beachfront Villas in Pondicherry | Luxor Holiday Home Stays';
      seoProps.description = 'Book your dream beachfront villa in Pondicherry. Experience luxury accommodations with ocean views by Luxor Holiday Home Stays.';
      seoProps.keywords = 'luxor, luxor pondicherry, pondicherry beach villas, luxury stay pondicherry';
    } else if (pathname.includes('about')) {
      seoProps.title = 'About Luxor Holiday Home Stays | Our Story & Vision';
      seoProps.description = 'Learn about Luxor Holiday Home Stays - our journey, vision, and commitment to providing exceptional luxury vacation experiences in South India.';
    } else if (pathname.includes('contact')) {
      seoProps.title = 'Contact Luxor Holiday Home Stays | Booking Inquiries';
      seoProps.description = "Reach out to Luxor Holiday Home Stays for booking inquiries, special requests, or customer support. We're here to help plan your perfect stay.";
    } else if (pathname.includes('gallery')) {
      seoProps.title = 'Photo Gallery | Luxor Holiday Home Stays Premium Villas';
      seoProps.description = 'Browse our gallery of stunning luxury villas in Chennai and Pondicherry. See the premium accommodations and amenities offered by Luxor Holiday Home Stays.';
      seoProps.keywords = 'luxor gallery, luxury villa photos, chennai villas, pondicherry villas, luxury accommodations';
    }

    return seoProps;
  };

  return (
    <AuthProvider>
      <SEOHead {...getDefaultSEO()} />
      <div>
        {!isOwnerPath && <Navbar />}
        <div className='min-h-[70vh]'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/rooms' element={<AllRooms/>} />
            <Route path='/rooms/:id' element={<RoomDetails/>} />
            <Route path='/villa/:id' element={<VillaDetails/>} />
            <Route path='/villas/:id' element={<VillaDetails/>} /> {/* Support both URL patterns */}
            <Route path='/search-results' element={<SearchResults/>} />
            <Route path='/my-bookings' element={
              <ProtectedRoute>
                <MyBookings/>
              </ProtectedRoute>
            } />
            <Route path='/booking/:id' element={<BookingDetails/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/h' element={<HelpCenter />} />
            <Route path='/si' element={<Safety/>} />
            <Route path='/g' element={<NavbarGallery/>} />
            <Route path='/gallery' element={<AboutGallery/>} />
            <Route path='/about' element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/verify-otp" element={<OTPVerification />} />
          </Routes>
        </div>
        <Footer />

        <a
          href="https://wa.me/7904040739?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20villas."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50 text-2xl whatsapp-button"
        >
          <FaWhatsapp />
        </a>
      </div>
    </AuthProvider>
  )
}

export default App;



