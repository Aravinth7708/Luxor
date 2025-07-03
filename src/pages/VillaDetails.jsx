"use client"

import { useState, useEffect, useRef } from "react"
import {
  Heart,
  ChevronDown,
  Plus,
  Minus,
  ArrowLeft,
  Users,
  Bed,
  MapPin,
  Share,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Star,
  Wifi,
  Car,
  Coffee,
  Waves,
  Shield,
  Check,
  Snowflake,
  Utensils,
  Dumbbell,
  PawPrint,
  Flame,
  Zap,
  Home,
  X,
} from "lucide-react"

import PhotoGallery from "./PhotoGallery"
import { useAuth } from "../context/AuthContext"
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { API_BASE_URL } from "../config/api"
import Swal from "sweetalert2"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"

// Amrith Palace Images
import AP1 from "/AmrithPalace/AP1.jpg"
import AP2 from "/AmrithPalace/AP2.jpg"
import AP3 from "/AmrithPalace/AP3.jpg"
import AP4 from "/AmrithPalace/AP4.jpg"
import AP5 from "/AmrithPalace/AP5.jpg"
import AP6 from "/AmrithPalace/AP6.jpg"
import AP7 from "/AmrithPalace/AP7.jpg"
import AP8 from "/AmrithPalace/AP8.jpg"
import AP9 from "/AmrithPalace/AP9.jpg"
import AP10 from "/AmrithPalace/AP10.jpg"
import AP11 from "/AmrithPalace/AP11.jpg"
import AP12 from "/AmrithPalace/AP12.jpg"
import AP13 from "/AmrithPalace/AP13.jpg"
import AP14 from "/AmrithPalace/AP14.jpg"
import AP15 from "/AmrithPalace/AP15.jpg"
import AP16 from "/AmrithPalace/AP16.jpg"
import AP17 from "/AmrithPalace/AP17.jpg"
import AP18 from "/AmrithPalace/AP18.jpg"
import AP19 from "/AmrithPalace/AP19.jpg"
import AP20 from "/AmrithPalace/AP20.jpg"
import AP21 from "/AmrithPalace/AP21.jpg"
import AP22 from "/AmrithPalace/AP22.jpg"
import AP23 from "/AmrithPalace/AP23.jpg"
import AP24 from "/AmrithPalace/AP24.jpg"
import AP25 from "/AmrithPalace/AP25.jpg"
import AP26 from "/AmrithPalace/AP26.jpg"
import AP27 from "/AmrithPalace/AP27.jpg"
import AP28 from "/AmrithPalace/AP28.jpg"
import AP29 from "/AmrithPalace/AP29.jpg"
import AP30 from "/AmrithPalace/AP30.jpg"

// East Coast Villa Images
import EC1 from "/eastcoastvilla/EC1.jpg"
import EC2 from "/eastcoastvilla/EC2.jpg"
import EC3 from "/eastcoastvilla/EC3.jpg"
import EC4 from "/eastcoastvilla/EC4.jpg"
import EC5 from "/eastcoastvilla/EC5.jpg"
import EC6 from "/eastcoastvilla/EC6.jpg"
import EC7 from "/eastcoastvilla/EC7.jpg"
import EC8 from "/eastcoastvilla/EC8.jpg"
import EC9 from "/eastcoastvilla/EC9.jpg"
import EC10 from "/eastcoastvilla/EC10.jpg"
import EC11 from "/eastcoastvilla/EC11.jpg"
import EC12 from "/eastcoastvilla/EC12.jpg"
import EC13 from "/eastcoastvilla/EC13.jpg"
import EC14 from "/eastcoastvilla/EC14.jpg"
import EC15 from "/eastcoastvilla/EC15.jpg"

// Empire Anand Villa Samudra Images
import anandvilla1 from "/empireanandvillasamudra/anandvilla1.jpg"
import anandvilla2 from "/empireanandvillasamudra/anandvilla2.jpg"
import anandvilla3 from "/empireanandvillasamudra/anandvilla3.jpg"
import anandvilla4 from "/empireanandvillasamudra/anandvilla4.jpg"
import anandvilla5 from "/empireanandvillasamudra/anandvilla5.jpg"
import anandvilla6 from "/empireanandvillasamudra/anandvilla6.jpg"
import anandvilla7 from "/empireanandvillasamudra/anandvilla7.jpg"
import anandvilla8 from "/empireanandvillasamudra/anandvilla8.jpg"
import anandvilla9 from "/empireanandvillasamudra/anandvilla9.jpg"
import anandvilla10 from "/empireanandvillasamudra/anandvilla10.jpg"
import anandvilla11 from "/empireanandvillasamudra/anandvilla11.jpg"
import anandvilla12 from "/empireanandvillasamudra/anandvilla12.jpg"
import anandvilla13 from "/empireanandvillasamudra/anandvilla13.jpg"
import anandvilla14 from "/empireanandvillasamudra/anandvilla14.jpg"
import anandvilla15 from "/empireanandvillasamudra/anandvilla15.jpg"
import anandvilla16 from "/empireanandvillasamudra/anandvilla16.jpg"

// Ram Water Villa Images
import RW1 from "/ramwatervilla/RW1.jpg"
import RW2 from "/ramwatervilla/RW2.jpg"
import RW3 from "/ramwatervilla/RW3.jpg"
import RW4 from "/ramwatervilla/RW4.jpg"
import RW5 from "/ramwatervilla/RW5.jpg"
import RW6 from "/ramwatervilla/RW6.jpg"
import RW7 from "/ramwatervilla/RW7.jpg"
import RW8 from "/ramwatervilla/RW8.jpg"
import RW9 from "/ramwatervilla/RW9.jpg"
import RW10 from "/ramwatervilla/RW10.jpg"
import RW11 from "/ramwatervilla/RW11.jpg"
import RW13 from "/ramwatervilla/RW13.jpg"
import RW14 from "/ramwatervilla/RW14.jpg"
import RW15 from "/ramwatervilla/RW15.jpg"
import RW16 from "/ramwatervilla/RW16.jpg"
import RW17 from "/ramwatervilla/RW17.jpg"
import RW18 from "/ramwatervilla/RW18.jpg"
import RW19 from "/ramwatervilla/RW19.jpg"

// LavishVilla 1 (22 images)
import lvone2 from "/LavishVilla 1/lvone2.jpg"
import lvone3 from "/LavishVilla 1/lvone3.jpg"
import lvone4 from "/LavishVilla 1/lvone4.jpg"
import lvone5 from "/LavishVilla 1/lvone5.jpg"
import lvone6 from "/LavishVilla 1/lvone6.jpg"
import lvone7 from "/LavishVilla 1/lvone7.jpg"
import lvone8 from "/LavishVilla 1/lvone8.jpg"
import lvone9 from "/LavishVilla 1/lvone9.jpg"
import lvone10 from "/LavishVilla 1/lvone10.jpg"
import lvone11 from "/LavishVilla 1/lvone11.jpg"
import lvone12 from "/LavishVilla 1/lvone12.jpg"
import lvone13 from "/LavishVilla 1/lvone13.jpg"
import lvone14 from "/LavishVilla 1/lvone14.jpg"
import lvone15 from "/LavishVilla 1/lvone15.jpg"
import lvone16 from "/LavishVilla 1/lvone16.jpg"
import lvone17 from "/LavishVilla 1/lvone17.jpg"
import lvone18 from "/LavishVilla 1/lvone18.jpg"
import lvone19 from "/LavishVilla 1/lvone19.jpg"
import lvone20 from "/LavishVilla 1/lvone20.jpg"
import lvone21 from "/LavishVilla 1/lvone21.jpg"
import lvone22 from "/LavishVilla 1/lvone22.jpg"

// LavishVilla 2 (22 images)
import lvtwo1 from "/LavishVilla 2/lvtwo1.jpg"
import lvtwo2 from "/LavishVilla 2/lvtwo2.jpg"
import lvtwo3 from "/LavishVilla 2/lvtwo3.jpg"
import lvtwo4 from "/LavishVilla 2/lvtwo4.jpg"
import lvtwo5 from "/LavishVilla 2/lvtwo5.jpg"
import lvtwo6 from "/LavishVilla 2/lvtwo6.jpg"
import lvtwo7 from "/LavishVilla 2/lvtwo7.jpg"
import lvtwo8 from "/LavishVilla 2/lvtwo8.jpg"
import lvtwo9 from "/LavishVilla 2/lvtwo9.jpg"
import lvtwo10 from "/LavishVilla 2/lvtwo10.jpg"
import lvtwo11 from "/LavishVilla 2/lvtwo11.jpg"
import lvtwo12 from "/LavishVilla 2/lvtwo12.jpg"
import lvtwo13 from "/LavishVilla 2/lvtwo13.jpg"
import lvtwo14 from "/LavishVilla 2/lvtwo14.jpg"
import lvtwo15 from "/LavishVilla 2/lvtwo15.jpg"
import lvtwo16 from "/LavishVilla 2/lvtwo16.jpg"
import lvtwo17 from "/LavishVilla 2/lvtwo17.jpg"
import lvtwo18 from "/LavishVilla 2/lvtwo18.jpg"
import lvtwo19 from "/LavishVilla 2/lvtwo19.jpg"
import lvtwo20 from "/LavishVilla 2/lvtwo20.jpg"
import lvtwo21 from "/LavishVilla 2/lvtwo21.jpg"
import lvtwo22 from "/LavishVilla 2/lvtwo22.jpg"

// LavishVilla 3 (18 images)
import lvthree1 from "/LavishVilla 3/lvthree1.jpg"
import lvthree2 from "/LavishVilla 3/lvthree2.jpg"
import lvthree3 from "/LavishVilla 3/lvthree3.jpg"
import lvthree4 from "/LavishVilla 3/lvthree4.jpg"
import lvthree5 from "/LavishVilla 3/lvthree5.jpg"
import lvthree6 from "/LavishVilla 3/lvthree6.jpg"
import lvthree7 from "/LavishVilla 3/lvthree7.jpg"
import lvthree8 from "/LavishVilla 3/lvthree8.jpg"
import lvthree9 from "/LavishVilla 3/lvthree9.jpg"
import lvthree10 from "/LavishVilla 3/lvthree10.jpg"
import lvthree12 from "/LavishVilla 3/lvthree12.jpg"
import lvthree13 from "/LavishVilla 3/lvthree13.jpg"
import lvthree14 from "/LavishVilla 3/lvthree14.jpg"
import lvthree15 from "/LavishVilla 3/lvthree15.jpg"
import lvthree16 from "/LavishVilla 3/lvthree16.jpg"
import lvthree17 from "/LavishVilla 3/lvthree17.jpg"
import lvthree18 from "/LavishVilla 3/lvthree18.jpg"

// Update villa image collections
const villaImageCollections = {
  "Amrith Palace": [
    AP1,
    AP2,
    AP3,
    AP4,
    AP5,
    AP6,
    AP7,
    AP8,
    AP9,
    AP10,
    AP11,
    AP12,
    AP13,
    AP14,
    AP15,
    AP16,
    AP17,
    AP18,
    AP19,
    AP20,
    AP21,
    AP22,
    AP23,
    AP24,
    AP25,
    AP26,
    AP27,
    AP28,
    AP29,
    AP30,
  ],
  "East Coast Villa": [EC1, EC2, EC3, EC4, EC5, EC6, EC7, EC8, EC9, EC10, EC11, EC12, EC13, EC14, EC15],
  "Ram Water Villa": [
    RW1,
    RW2,
    RW3,
    RW4,
    RW5,
    RW6,
    RW7,
    RW8,
    RW9,
    RW10,
    RW11,
    RW13,
    RW14,
    RW15,
    RW16,
    RW17,
    RW18,
    RW19,
  ],
  "Empire Anand Villa Samudra": [
    anandvilla1,
    anandvilla2,
    anandvilla3,
    anandvilla4,
    anandvilla5,
    anandvilla6,
    anandvilla7,
    anandvilla8,
    anandvilla9,
    anandvilla10,
    anandvilla11,
    anandvilla12,
    anandvilla13,
    anandvilla14,
    anandvilla15,
    anandvilla16,
  ],
  "Lavish Villa 1": [
    lvone2,
    lvone3,
    lvone4,
    lvone5,
    lvone6,
    lvone7,
    lvone8,
    lvone9,
    lvone10,
    lvone11,
    lvone12,
    lvone13,
    lvone14,
    lvone15,
    lvone16,
    lvone17,
    lvone18,
    lvone19,
    lvone20,
    lvone21,
    lvone22,
  ],
  "Lavish Villa 2": [
    lvtwo1,
    lvtwo2,
    lvtwo3,
    lvtwo4,
    lvtwo5,
    lvtwo6,
    lvtwo7,
    lvtwo8,
    lvtwo9,
    lvtwo10,
    lvtwo11,
    lvtwo12,
    lvtwo13,
    lvtwo14,
    lvtwo15,
    lvtwo16,
    lvtwo17,
    lvtwo18,
    lvtwo19,
    lvtwo20,
    lvtwo21,
    lvtwo22,
  ],
  "Lavish Villa 3": [
    lvthree1,
    lvthree2,
    lvthree3,
    lvthree4,
    lvthree5,
    lvthree6,
    lvthree7,
    lvthree8,
    lvthree9,
    lvthree10,
    lvthree12,
    lvthree13,
    lvthree14,
    lvthree15,
    lvthree16,
    lvthree17,
    lvthree18,
  ],
}

// Villa pricing configuration
const villaPricing = {
  "Amrith Palace": {
    weekday: 45000,
    weekend: 65000,
    maxGuests: 35,
    eventsAllowed: true,
    securityDeposit: 20000,
  },
  "East Coast Villa": {
    weekday: 15000,
    weekend: 25000,
    maxGuests: 15,
    eventsAllowed: true,
    securityDeposit: 10000,
  },
  "Ram Water Villa": {
    weekday: 30000,
    weekend: 45000,
    maxGuests: 25,
    eventsAllowed: true,
    securityDeposit: 15000,
  },
  "Lavish Villa 1": {
    weekday: 18000,
    weekend: 25000,
    maxGuests: 15,
    eventsAllowed: false,
    securityDeposit: 10000,
  },
  "Lavish Villa 2": {
    weekday: 18000,
    weekend: 25000,
    maxGuests: 15,
    eventsAllowed: false,
    securityDeposit: 10000,
  },
  "Lavish Villa 3": {
    weekday: 16000,
    weekend: 23000,
    maxGuests: 15,
    eventsAllowed: false,
    securityDeposit: 8000,
  },
  "Empire Anand Villa Samudra": {
    weekday: 40000,
    weekend: 60000,
    maxGuests: 20,
    eventsAllowed: true,
    securityDeposit: 15000,
  },
}

// Create array for Empire Anand Villa Samudra images
export const empireAnandVillaSamudraImages = [
  anandvilla1,
  anandvilla2,
  anandvilla3,
  anandvilla4,
  anandvilla5,
  anandvilla6,
  anandvilla7,
  anandvilla8,
  anandvilla9,
  anandvilla10,
  anandvilla11,
  anandvilla12,
  anandvilla13,
  anandvilla14,
  anandvilla15,
  anandvilla16,
]

// Utility to shuffle images for each villa
function getRandomImages(imagesArr) {
  const arr = [...imagesArr]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

// Enhanced facility icon mapping with lucide-react icons
const facilityIconMap = {
  "Private Pool": Waves,
  "Shared Pool": Waves,
  Pool: Waves,
  "Free Parking": Car,
  Parking: Car,
  AC: Snowflake,
  "Air Conditioning": Snowflake,
  WiFi: Wifi,
  "Free WiFi": Wifi,
  Kitchen: Utensils,
  Kitchenette: Utensils,
  Microwave: Zap,
  Barbecue: Flame,
  BBQ: Flame,
  Gym: Dumbbell,
  "Fitness Center": Dumbbell,
  "Pet Friendly": PawPrint,
  "Pets Allowed": PawPrint,
  "Coffee Maker": Coffee,
  "Free Breakfast": Coffee,
  Security: Shield,
  "24/7 Security": Shield,
  General: Home,
}

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const VillaDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const [villa, setVilla] = useState(location.state?.villa || null)
  const [loading, setLoading] = useState(!location.state?.villa)
  const [error, setError] = useState(null)
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [showCancellationPolicy, setShowCancellationPolicy] = useState(false)
  const [showThingsToKnow, setShowThingsToKnow] = useState(false)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isSaved, setIsSaved] = useState(false)
  const [showPhotoGallery, setShowPhotoGallery] = useState(false)
  const [currentCalendarMonth, setCurrentCalendarMonth] = useState(new Date())
  const [bookingStep, setBookingStep] = useState(1)
  const [guestDetails, setGuestDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  // New states for calendar and time selection
  const [showCheckInCalendar, setShowCheckInCalendar] = useState(false)
  const [showCheckOutCalendar, setShowCheckOutCalendar] = useState(false)
  const [showCheckInTime, setShowCheckInTime] = useState(false)
  const [showCheckOutTime, setShowCheckOutTime] = useState(false)
  const [checkInTime, setCheckInTime] = useState("12:00 PM")
  const [checkOutTime, setCheckOutTime] = useState("11:00 AM")

  // Remove isSignedIn and user from Clerk
  const { userData, authToken } = useAuth()
  const isSignedIn = !!authToken && !!userData // Update isSignedIn check based on authToken
  const navigate = useNavigate()
  const [bookingLoading, setBookingLoading] = useState(false)
  const [paymentProcessing, setPaymentProcessing] = useState(false)
  const isBookingInProgress = useRef(false)

  // Date range picker state
  const [dateRange, setDateRange] = useState([
    {
      startDate: null,
      endDate: null,
      key: "selection",
    },
  ])
  const [checkInDate, setCheckInDate] = useState("")
  const [checkOutDate, setCheckOutDate] = useState("")
  const [totalDays, setTotalDays] = useState(0)
  const [totalNights, setTotalNights] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  // Helper function to check if date is weekend
  const isWeekend = (date) => {
    const day = date.getDay()
    return day === 0 || day === 6 // Sunday or Saturday
  }

  // Helper function to get price for a specific date
  const getPriceForDate = (date, villaName) => {
    const pricing = villaPricing[villaName]
    if (!pricing) return 15000 // default price

    return isWeekend(date) ? pricing.weekend : pricing.weekday
  }

  // Format price for display
  const formatPrice = (price) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(1)}L`
    } else if (price >= 1000) {
      return `₹${(price / 1000).toFixed(0)}K`
    }
    return `₹${price}`
  }

  // Calculate nights between dates
  const calculateNights = (startDate, endDate) => {
    if (!startDate || !endDate) return 0
    const timeDiff = endDate.getTime() - startDate.getTime()
    return Math.ceil(timeDiff / (1000 * 3600 * 24))
  }

  useEffect(() => {
    if (dateRange[0].startDate && dateRange[0].endDate) {
      const startDate = dateRange[0].startDate
      const endDate = dateRange[0].endDate
      const nights = calculateNights(startDate, endDate)

      setCheckInDate(formatDateToYYYYMMDD(startDate))
      setCheckOutDate(formatDateToYYYYMMDD(endDate))
      setTotalDays(nights + 1) // Total days including check-in and check-out
      setTotalNights(nights) // Actual nights stayed

      // Calculate total amount based on individual date pricing
      if (villa?.name && villaPricing[villa.name]) {
        let totalPrice = 0
        const currentDate = new Date(startDate)

        for (let i = 0; i < nights; i++) {
          totalPrice += getPriceForDate(currentDate, villa.name)
          currentDate.setDate(currentDate.getDate() + 1)
        }

        const serviceFee = Math.round(totalPrice * 0.05)
        const taxAmount = Math.round((totalPrice + serviceFee) * 0.18)
        setTotalAmount(Math.round(totalPrice + serviceFee + taxAmount))
      }
    } else {
      setTotalDays(0)
      setTotalNights(0)
      setTotalAmount(0)
    }
  }, [dateRange, villa?.name])

  // Corrected function to parse date strings
  const parseYYYYMMDD = (dateString) => {
    if (!dateString) return null
    const [year, month, day] = dateString.split("-")
    return new Date(Number.parseInt(year), Number.parseInt(month) - 1, Number.parseInt(day))
  }

  // Corrected function to format dates
  const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }

  // Navigation functions
  const nextImage = () => {
    if (!villa || !villa.images || villa.images.length === 0) return
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % villa.images.length)
  }

  const prevImage = () => {
    if (!villa || !villa.images || villa.images.length === 0) return
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + villa.images.length) % villa.images.length)
  }

  // Handle more photos click - Navigate to photo gallery page
  const handleMorePhotosClick = () => {
    const villaNameForRoute = villa.name.toLowerCase().replace(/\s+/g, "-")
    navigate(`/photogallery/${villaNameForRoute}`, {
      state: {
        images: villa.images,
        villaName: villa.name,
      },
    })
  }

  // Handle close photo gallery
  const handleClosePhotoGallery = () => {
    setShowPhotoGallery(false)
  }

  // Add this function to create a fallback villa with images when API fails
  const createFallbackVilla = () => {
    console.log("Creating fallback villa with sample images")
    // Use ID from URL params to try matching with a villa name
    let matchedCollection = "Empire Anand Villa Samudra" // Default

    // Try to match ID with known collections
    if (id.includes("amrith") || id.includes("palace")) {
      matchedCollection = "Amrith Palace"
    } else if (id.includes("east") || id.includes("coast")) {
      matchedCollection = "East Coast Villa"
    } else if (id.includes("ram") || id.includes("water")) {
      matchedCollection = "Ram Water Villa"
    }

    const pricing = villaPricing[matchedCollection] || villaPricing["Empire Anand Villa Samudra"]
    const fallbackVilla = {
      id: id,
      _id: id,
      name: matchedCollection,
      location: "Luxury Location, India",
      price: pricing.weekday,
      description: "This beautiful luxury villa offers a perfect getaway with modern amenities and stunning views.",
      images: villaImageCollections[matchedCollection] || empireAnandVillaSamudraImages,
      guests: pricing.maxGuests,
      bedrooms: 4,
      bathrooms: 3,
      rating: 4.7,
      amenities: ["Private Pool", "Free WiFi", "AC", "Kitchen", "Free Parking"],
      type: "VILLA",
    }

    setVilla(fallbackVilla)
    setLoading(false)
  }

  // Enhanced useEffect to properly handle villa data from navigation state
  useEffect(() => {
    // If we already have villa data from navigation state, process it properly
    if (location.state?.villa) {
      const navigationVilla = location.state.villa
      // Process images if needed
      let processedImages = navigationVilla.images || []

      // If we came from search results, ensure we have the complete image collection
      if (location.state?.fromSearch) {
        console.log("Coming from search results, ensuring full image collection")
        // Match villa name with image collections if images are insufficient
        if (!processedImages.length || processedImages.length < 5) {
          const villaName = navigationVilla.name?.toLowerCase() || ""
          if (villaName.includes("amrith") || villaName.includes("palace")) {
            processedImages = villaImageCollections["Amrith Palace"]
          } else if (villaName.includes("east") || villaName.includes("coast")) {
            processedImages = villaImageCollections["East Coast Villa"]
          } else if (villaName.includes("ram") || villaName.includes("water")) {
            processedImages = villaImageCollections["Ram Water Villa"]
          } else if (villaName.includes("empire") || villaName.includes("anand") || villaName.includes("samudra")) {
            processedImages = villaImageCollections["Empire Anand Villa Samudra"]
          } else {
            // Default to Empire Anand if no match
            processedImages = empireAnandVillaSamudraImages
          }
        }
      }

      // Set the processed villa with correct images
      setVilla({
        ...navigationVilla,
        images: processedImages,
      })
      setLoading(false)
    } else if (id) {
      fetchVillaDetails()
    }
  }, [id, location.state])

  // Enhance fetchVillaDetails to better handle image mapping
  const fetchVillaDetails = async () => {
    try {
      setLoading(true)
      console.log("Fetching villa with ID:", id)

      // Try both potential API endpoints to handle legacy URLs
      let response
      try {
        response = await fetch(`${API_BASE_URL}/api/villas/${id}`)
        if (!response.ok) {
          // If villas endpoint fails, try the rooms endpoint
          const roomsResponse = await fetch(`${API_BASE_URL}/api/rooms/${id}`)
          if (roomsResponse.ok) {
            response = roomsResponse
          }
        }
      } catch (fetchError) {
        console.error("Error fetching from primary endpoint:", fetchError)
        // Try backup endpoint
        response = await fetch(`${API_BASE_URL}/api/rooms/${id}`)
      }

      if (!response.ok) {
        const errorText = await response.text()
        console.log("API Error response:", errorText)
        throw new Error(`Villa not found (${response.status}): ${errorText}`)
      }

      const data = await response.json()
      console.log("Raw villa data from API:", data)

      // Get villa name for better image mapping
      const villaName = data.name?.toLowerCase() || ""
      let images = []

      // Match villa name with image collections
      if (villaName.includes("amrith") || villaName.includes("palace")) {
        console.log("Mapping Amrith Palace images")
        images = villaImageCollections["Amrith Palace"]
      } else if (villaName.includes("east") || villaName.includes("coast")) {
        console.log("Mapping East Coast Villa images")
        images = villaImageCollections["East Coast Villa"]
      } else if (villaName.includes("ram") || villaName.includes("water")) {
        console.log("Mapping Ram Water Villa images")
        images = villaImageCollections["Ram Water Villa"]
      } else if (villaName.includes("empire") || villaName.includes("anand") || villaName.includes("samudra")) {
        console.log("Mapping Empire Anand Villa Samudra images")
        images = villaImageCollections["Empire Anand Villa Samudra"]
      } else {
        // If data has images, use them
        if (data.images && Array.isArray(data.images) && data.images.length > 0) {
          images = data.images
        } else {
          // Default to Empire Anand if no match
          console.log("Using default Empire Anand Villa Samudra images")
          images = empireAnandVillaSamudraImages
        }
      }

      const pricing = villaPricing[data.name] || villaPricing["Empire Anand Villa Samudra"]
      const transformedVilla = {
        id: data._id,
        _id: data._id,
        name: data.name,
        location: data.location,
        price: pricing.weekday,
        description: data.description || "Luxury villa with all modern amenities for a comfortable stay.",
        images: images, // Use our image mapping logic
        guests: pricing.maxGuests,
        bedrooms: data.bedrooms || 4,
        bathrooms: data.bathrooms || data.bedrooms || 3,
        rating: data.rating || 4.5,
        amenities: data.facilities?.map((f) => f.name || f) || [
          "Private Pool",
          "Free WiFi",
          "AC",
          "Kitchen",
          "Free Parking",
        ],
        type: data.type || "VILLA",
      }

      console.log("Transformed villa data:", transformedVilla)
      console.log("Number of images:", transformedVilla.images.length)

      setVilla(transformedVilla)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
      createFallbackVilla()
    }
  }

  // Cleanup effect to prevent memory leaks and reset state
  useEffect(() => {
    return () => {
      // Reset booking state when component unmounts
      isBookingInProgress.current = false
      setBookingLoading(false)
    }
  }, [])

  // Test API connection (for debugging)
  const testAPIConnection = async () => {
    try {
      console.log("Testing API connection to:", API_BASE_URL)
      const response = await fetch(`${API_BASE_URL}/api/test`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      console.log("API Test Response:", {
        ok: response.ok,
        status: response.status,
        url: response.url,
      })
    } catch (error) {
      console.error("API Test Error:", error)
    }
  }

  // Test API on component mount (for debugging)
  useEffect(() => {
    testAPIConnection()
  }, [])

  // Function to completely reset booking form
  const resetBookingForm = () => {
    console.log("Resetting booking form...") // Debug log
    setBookingStep(1)
    setCheckInDate("")
    setCheckOutDate("")
    setAdults(1)
    setChildren(0)
    setInfants(0)
    setDateRange([
      {
        startDate: null,
        endDate: null,
        key: "selection",
      },
    ])
    setTotalDays(0)
    setTotalNights(0)
    setTotalAmount(0)
    setGuestDetails({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    })
    setBookingLoading(false)
    isBookingInProgress.current = false
  }

  // Fix the handleBookNow function in VillaDetails.jsx
  const handleBookNow = async () => {
    // Debug: Log authentication state
    console.log("Authentication State:", {
      isSignedIn,
      userData,
      hasAuthToken: !!authToken,
    });

    // Prevent duplicate bookings
    if (bookingLoading || isBookingInProgress.current || paymentProcessing) {
      return;
    }

    if (!isSignedIn) {
      // Save current booking state to localStorage before redirecting
      const bookingState = {
        villaId: villa._id || villa.id,
        villaName: villa.name,
        checkInDate,
        checkOutDate,
        checkInTime,
        checkOutTime,
        adults,
        children,
        infants,
        totalDays,
        totalNights,
        totalAmount,
        bookingStep,
        // Include the current URL to return to this exact page
        returnUrl: window.location.pathname + window.location.search,
      };

      // Save to localStorage
      localStorage.setItem("pendingBooking", JSON.stringify(bookingState));

      Swal.fire({
        icon: "info",
        title: "Login Required",
        text: "Please log in to book this villa. We'll save your booking details.",
        confirmButtonColor: "#16a34a",
      }).then(() => {
        navigate("/sign-in?redirect=booking");
      });

      return;
    }

    if (!checkInDate || !checkOutDate) {
      Swal.fire({
        icon: "warning",
        title: "Missing Dates",
        text: "Please select check-in and check-out dates.",
        confirmButtonColor: "#16a34a",
      });
      return;
    }

    const villaId = villa._id || villa.id;

    if (!villaId || villaId.length < 12) {
      Swal.fire({
        icon: "error",
        title: "Invalid Villa",
        text: "Invalid villa. Please try again from the main villa list.",
        confirmButtonColor: "#16a34a",
      });
      return;
    }

    setBookingLoading(true);
    isBookingInProgress.current = true;

    try {
      // Calculate totalAmount based on individual date pricing
      let totalPrice = 0;
      const nights = totalNights || totalDays - 1;

      for (let i = 0; i < nights; i++) {
        const currentDate = new Date(checkInDate);
        currentDate.setDate(currentDate.getDate() + i);
        totalPrice += getPriceForDate(currentDate, villa.name);
      }

      const serviceFee = Math.round(totalPrice * 0.05);
      const taxAmount = Math.round((totalPrice + serviceFee) * 0.18);
      const calculatedTotalAmount = Math.round(totalPrice + serviceFee + taxAmount);

      // Check if calculated amount is valid
      if (isNaN(calculatedTotalAmount) || calculatedTotalAmount <= 0) {
        throw new Error("Invalid booking amount. Please try again with valid dates.");
      }

      console.log("Creating payment order with amount:", calculatedTotalAmount);

      // Load Razorpay script first
      setPaymentProcessing(true);
      const isScriptLoaded = await loadRazorpayScript();
      
      if (!isScriptLoaded) {
        throw new Error("Failed to load payment gateway. Please refresh and try again.");
      }

      // Create order on the server
      const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
      const orderResponse = await fetch(`${API_BASE_URL}/api/payments/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify({
          amount: calculatedTotalAmount,
          currency: 'INR',
          villaName: villa.name,
          villaId: villa._id || villa.id,
          guestName: userData?.name || userData?.firstName || "Guest",
          email: userData?.email,
          checkIn: checkInDate,
          checkOut: checkOutDate,
          checkInTime,
          checkOutTime,
          guests: adults + children,
          infants,
          totalDays,
          totalNights: nights
        })
      });

      // Log the raw response for debugging
      const rawResponse = await orderResponse.text();
      console.log("Raw order response:", rawResponse);
      
      // Parse the response as JSON (separately, after logging the raw text)
      let orderData;
      try {
        orderData = JSON.parse(rawResponse);
      } catch (parseError) {
        console.error("Failed to parse order response:", parseError);
        throw new Error("Invalid response from server. Please try again later.");
      }

      if (!orderData.success || !orderData.order || !orderData.order.id) {
        console.error("Invalid order data:", orderData);
        throw new Error("Unable to create payment order. Please try again.");
      }

      console.log("Order created successfully:", orderData);

      // Razorpay options
      const options = {
        // Use the correct key from your backend
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_live_quNHH9YfEhaAru", // Use env var with fallback
        amount: orderData.order.amount, 
        currency: orderData.order.currency || "INR",
        name: "LuxorStay",
        description: `Booking for ${villa.name}`,
        order_id: orderData.order.id,
       
        handler: async function(response) {
          try {
            console.log("Payment successful:", response);
            
          
            const verifyResponse = await fetch(`${API_BASE_URL}/api/payments/verify`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
              },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                bookingData: {
                  villaId: villa._id || villa.id,
                  villaName: villa.name,
                  email: userData?.email,
                  guestName: userData?.name || userData?.firstName || "Guest",
                  checkIn: checkInDate,
                  checkOut: checkOutDate,
                  checkInTime,
                  checkOutTime,
                  guests: adults + children,
                  infants,
                  totalAmount: calculatedTotalAmount,
                  totalDays,
                  totalNights: nights,
                }
              })
            });

            const verifyData = await verifyResponse.json();
            
            if (verifyResponse.ok && verifyData.success) {
              // Reset all booking form data
              resetBookingForm();
              
              // Show success message
              Swal.fire({
                icon: "success",
                title: "Booking Confirmed! 🎉",
                text: "Your payment was successful and booking has been confirmed!",
                confirmButtonColor: "#16a34a",
                confirmButtonText: "View My Bookings",
              }).then(() => {
                navigate("/my-bookings", { replace: true });
              });
            } else {
              throw new Error(verifyData.message || "Payment verification failed");
            }
          } catch (error) {
            console.error("Payment verification error:", error);
            Swal.fire({
              icon: "warning",
              title: "Payment Verification Issue",
              text: "Your payment was processed, but we're having trouble confirming it. Our team will contact you shortly.",
              confirmButtonColor: "#16a34a",
            });
          } finally {
            setPaymentProcessing(false);
            setBookingLoading(false);
            isBookingInProgress.current = false;
          }
        },
        // Add proper error callbacks
        modal: {
          ondismiss: function() {
            console.log("Payment modal closed by user");
            setPaymentProcessing(false);
            setBookingLoading(false);
            isBookingInProgress.current = false;
          },
          escape: false,
          animation: true
        },
        prefill: {
          name: userData?.name || "",
          email: userData?.email || "",
          contact: userData?.phone || ""
        }
      };

      // Also, add these Razorpay callbacks to catch errors
      options.on = {
        payment: {
          failed: function(response) {
            console.error("Payment failed:", response.error);
            Swal.fire({
              icon: "error",
              title: "Payment Failed",
              text: response.error.description || "Your payment could not be processed. Please try again.",
              confirmButtonColor: "#16a34a",
            });
            setPaymentProcessing(false);
            setBookingLoading(false);
            isBookingInProgress.current = false;
          }
        }
      };

      // Open Razorpay payment form
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

    } catch (err) {
      console.error("Payment or booking error:", err);

      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        html: `
          <div>
            <p>${err.message || "There was a problem processing your booking."}</p>
            <br>
            <small style="color: #666;">
              Please check your internet connection and try again.
            </small>
          </div>
        `,
        confirmButtonColor: "#16a34a",
      });

      setPaymentProcessing(false);
      setBookingLoading(false);
      isBookingInProgress.current = false;
    }
  }

  // Add a function to restore booking state from localStorage
  const restoreBookingState = () => {
    try {
      const savedBookingState = localStorage.getItem("pendingBooking")
      if (savedBookingState) {
        const bookingState = JSON.parse(savedBookingState)
        // Only restore if we're on the same villa
        if ((villa._id || villa.id) === bookingState.villaId) {
          console.log("Restoring previous booking state", bookingState)
          // Restore dates
          if (bookingState.checkInDate) {
            setCheckInDate(bookingState.checkInDate)
            const startDate = parseYYYYMMDD(bookingState.checkInDate)
            if (bookingState.checkOutDate) {
              setCheckOutDate(bookingState.checkOutDate)
              const endDate = parseYYYYMMDD(bookingState.checkOutDate)
              if (startDate && endDate) {
                setDateRange([
                  {
                    startDate,
                    endDate,
                    key: "selection",
                  },
                ])
              }
            }
          }

          if (bookingState.checkInTime) setCheckInTime(bookingState.checkInTime)
          if (bookingState.checkOutTime) setCheckOutTime(bookingState.checkOutTime)

          // Restore guest count
          if (bookingState.adults) setAdults(bookingState.adults)
          if (bookingState.children) setChildren(bookingState.children)
          if (bookingState.infants) setInfants(bookingState.infants)

          // Restore booking step
          if (bookingState.bookingStep) setBookingStep(bookingState.bookingStep)

          // Clear saved state after restoring
          localStorage.removeItem("pendingBooking")

          // Show success message
          Swal.fire({
            icon: "success",
            title: "Welcome Back!",
            text: "Your booking details have been restored.",
            timer: 2000,
            showConfirmButton: false,
          })
        }
      }
    } catch (error) {
      console.error("Error restoring booking state:", error)
    }
  }

  // Check for auth changes to potentially restore booking state
  useEffect(() => {
    if (isSignedIn && !loading && villa) {
      restoreBookingState()
    }
  }, [isSignedIn, loading, villa])

  const facilities =
    villa?.amenities?.map((amenity) => ({
      name: amenity,
      icon: facilityIconMap[amenity] || facilityIconMap["General"] || Home,
    })) || []

  // Define city variable for breadcrumb
  const city = villa?.location || "Destinations"

  // Handle date selection for check-in
  const handleCheckInDateSelect = (date) => {
    const dateStr = formatDateToYYYYMMDD(date)
    setCheckInDate(dateStr)
    setShowCheckInCalendar(false)
    setShowCheckInTime(true)

    // Update date range
    if (checkOutDate && dateStr < checkOutDate) {
      setDateRange([
        {
          startDate: date,
          endDate: parseYYYYMMDD(checkOutDate),
          key: "selection",
        },
      ])
    } else {
      setDateRange([
        {
          startDate: date,
          endDate: null,
          key: "selection",
        },
      ])
      setCheckOutDate("")
    }
  }

  // Handle date selection for check-out
  const handleCheckOutDateSelect = (date) => {
    const dateStr = formatDateToYYYYMMDD(date)
    if (checkInDate && dateStr > checkInDate) {
      setCheckOutDate(dateStr)
      setShowCheckOutCalendar(false)
      setShowCheckOutTime(true)

      // Update date range
      setDateRange([
        {
          startDate: parseYYYYMMDD(checkInDate),
          endDate: date,
          key: "selection",
        },
      ])
    } else {
      Swal.fire({
        icon: "warning",
        title: "Invalid Date",
        text: "Check-out date must be after check-in date.",
        confirmButtonColor: "#16a34a",
      })
    }
  }

  // Time options
  const timeOptions = [
    "12:00 AM",
    "12:30 AM",
    "1:00 AM",
    "1:30 AM",
    "2:00 AM",
    "2:30 AM",
    "3:00 AM",
    "3:30 AM",
    "4:00 AM",
    "4:30 AM",
    "5:00 AM",
    "5:30 AM",
    "6:00 AM",
    "6:30 AM",
    "7:00 AM",
    "7:30 AM",
    "8:00 AM",
    "8:30 AM",
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
    "9:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ]

  // Calendar component
  const CalendarPopup = ({ isVisible, onClose, onDateSelect, title, selectedDate }) => {
    if (!isVisible) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="calendar-container">
            <div className="flex items-center justify-between mb-4">
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => {
                  const newDate = new Date(currentCalendarMonth)
                  newDate.setMonth(newDate.getMonth() - 1)
                  setCurrentCalendarMonth(newDate)
                }}
              >
                <ChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <h4 className="text-lg font-semibold text-gray-900">
                {currentCalendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </h4>
              <button
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => {
                  const newDate = new Date(currentCalendarMonth)
                  newDate.setMonth(newDate.getMonth() + 1)
                  setCurrentCalendarMonth(newDate)
                }}
              >
                <ChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {(() => {
                const year = currentCalendarMonth.getFullYear()
                const month = currentCalendarMonth.getMonth()
                const firstDayOfMonth = new Date(year, month, 1)
                const startDate = new Date(firstDayOfMonth)
                startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay())

                const days = []
                for (let i = 0; i < 42; i++) {
                  const currentDate = new Date(startDate)
                  currentDate.setDate(startDate.getDate() + i)
                  currentDate.setHours(12, 0, 0, 0)
                  days.push(currentDate)
                }

                return days.map((currentDate, index) => {
                  const today = new Date()
                  today.setHours(0, 0, 0, 0)
                  const isCurrentMonth = currentDate.getMonth() === month
                  const isToday = currentDate.toDateString() === today.toDateString()
                  const isPast = currentDate < today && !isToday
                  const currentDateStr = formatDateToYYYYMMDD(currentDate)
                  const isSelected = selectedDate === currentDateStr
                  const price = getPriceForDate(currentDate, villa.name)

                  return (
                    <div
                      key={`${currentDate.getTime()}-${index}`}
                      className={`
                        relative flex flex-col items-center justify-center rounded-lg cursor-pointer 
                        min-h-[50px] transition-all duration-200 select-none
                        ${!isCurrentMonth ? "opacity-40" : ""}
                        ${
                          isPast
                            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                            : isSelected
                              ? "bg-blue-600 text-white font-bold shadow-lg"
                              : isToday
                                ? "bg-blue-100 text-blue-800 font-semibold"
                                : "hover:bg-gray-100 hover:scale-105"
                        }
                      `}
                      onClick={() => {
                        if (isPast || !isCurrentMonth) return
                        onDateSelect(currentDate)
                      }}
                    >
                      <div className="text-sm font-medium">{currentDate.getDate()}</div>
                      {isCurrentMonth && !isPast && (
                        <div className={`text-xs mt-1 ${isSelected ? "text-white" : "text-gray-600"}`}>
                          {formatPrice(price)}
                        </div>
                      )}
                      {isToday && !isSelected && (
                        <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-blue-500"></div>
                      )}
                    </div>
                  )
                })
              })()}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Time selection popup
  const TimeSelectionPopup = ({ isVisible, onClose, onTimeSelect, title, selectedTime }) => {
    if (!isVisible) return null

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl max-h-96 overflow-hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          <div className="max-h-64 overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {timeOptions.map((time) => (
                <button
                  key={time}
                  onClick={() => {
                    onTimeSelect(time)
                    onClose()
                  }}
                  className={`
                    p-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${selectedTime === time ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
                  `}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 rounded-xl bg-white shadow-xl">
          <div className="relative mx-auto mb-8 w-24 h-24">
            <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-green-600 animate-spin"></div>
            <div className="absolute inset-2 rounded-full border-r-4 border-l-4 border-gray-200 animate-ping opacity-60"></div>
          </div>
          <p className="text-xl text-gray-700 mb-2 font-semibold">Loading Villa</p>
          <p className="text-gray-500">Fetching details for your dream stay...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center p-8 rounded-xl bg-white shadow-xl max-w-md">
          <div className="mx-auto mb-6 w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
            <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <p className="text-xl text-gray-700 mb-2 font-semibold">Unable to Load Villa Details</p>
          <p className="text-gray-500 mb-6">We encountered a problem while fetching villa data.</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/rooms")}
              className="bg-green-600 text-white px-5 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Back to Villas
            </button>
            <button
              onClick={() => window.location.reload()}
              className="bg-gray-200 text-gray-800 px-5 py-3 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Maps for villa locations
  const villaLocationMaps = {
    // Chennai locations
    "Amrith Palace":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2313083493!2d79.92235835!3d13.048160899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin",
    "Ram Water Villa":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2313083493!2d79.92235835!3d13.048160899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin",
    // Mahabalipuram location
    "East Coast Villa":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0508553307337!2d80.1922800751949!3d12.626603124726253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53abe2da38b4e3%3A0xfb6fec132bad1c1e!2sMahabalipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456790!5m2!1sen!2sin",
    // Pondicherry locations
    "Lavis Villa":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62560.77864823462!2d79.78733527341074!3d11.934145785286691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1703123456791!5m2!1sen!2sin",
    "Empire Anand Villa Samudra":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62560.77864823462!2d79.78733527341074!3d11.934145785286691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1703123456791!5m2!1sen!2sin",
  }

  // Location map based on city name
  const locationMaps = {
    Chennai:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2313083493!2d79.92235835!3d13.048160899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin",
    Mahabalipuram:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0508553307337!2d80.1922800751949!3d12.626603124726253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53abe2da38b4e3%3A0xfb6fec132bad1c1e!2sMahabalipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703123456790!5m2!1sen!2sin",
    Pondicherry:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62560.77864823462!2d79.78733527341074!3d11.934145785286691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5361ab8e49cfcf%3A0xcc6bd326d2f0b04e!2sPuducherry!5e0!3m2!1sen!2sin!4v1703123456791!5m2!1sen!2sin",
  }

  // Helper function to get the correct map URL
  const getVillaMapURL = (villaName, location) => {
    // First try to match by exact villa name
    if (villaLocationMaps[villaName]) {
      return villaLocationMaps[villaName]
    }

    // Otherwise, try to match by location
    // Check if location contains any of our city names
    for (const city of Object.keys(locationMaps)) {
      if (location && location.includes(city)) {
        return locationMaps[city]
      }
    }

    // If all else fails, default to Chennai
    return locationMaps["Chennai"]
  }

  // Return the component JSX (main content)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-16 sm:pt-20 md:pt-24 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Enhanced Responsive Header */}
      <div className="glass-effect border-b border-gray-200/50 sticky top-0 sm:top-16 z-40 transition-all duration-500 shadow-lg animate-slideInDown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 order-2 sm:order-1 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => navigate("/rooms")}
                className="flex items-center gap-2 hover:text-gray-800 transition-all duration-300 hover:transform hover:scale-105 group px-2 py-1 rounded-lg hover:bg-gray-100 whitespace-nowrap"
              >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="hidden sm:inline">Back</span>
              </button>
              <span className="text-gray-400 hidden sm:inline">|</span>
              <button
                onClick={() => navigate("/")}
                className="hover:text-gray-800 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-gray-100 hidden sm:inline whitespace-nowrap"
              >
                Home
              </button>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hidden sm:block" />
              <button
                onClick={() => navigate("/rooms")}
                className="hover:text-gray-800 transition-colors duration-300 px-2 py-1 rounded-lg hover:bg-gray-100 hidden md:inline whitespace-nowrap"
              >
                {city}
              </button>
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 hidden md:block" />
              <span className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-[200px] md:max-w-none">
                {villa.name}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 sm:gap-4 order-1 sm:order-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => setIsSaved(!isSaved)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:transform hover:scale-110 group px-3 py-2 rounded-xl hover:bg-gray-100"
              >
                <Heart
                  className={`h-4 w-4 transition-all duration-300 ${isSaved ? "fill-red-500 text-red-500 scale-110" : "group-hover:scale-110"}`}
                />
                <span className="text-sm sm:text-base">Save</span>
              </button>
              <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-all duration-300 hover:transform hover:scale-110 group px-3 py-2 rounded-xl hover:bg-gray-100">
                <Share className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm sm:text-base">Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Responsive Photo Gallery - Improved Layout */}
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 animate-fadeInUp transition-all duration-700 scroll-animate"
        id="photo-gallery-section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-4 h-auto lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-[1.01]">
          {/* Main Image - Larger and more prominent */}
          <div className="col-span-1 lg:col-span-2 relative group h-80 lg:h-full">
            <img
              src={villa.images[currentImageIndex] || villa.images[0] || empireAnandVillaSamudraImages[0]}
              alt={villa.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)" }}
              onError={(e) => {
                // If image fails to load, try a fallback image
                e.target.src = empireAnandVillaSamudraImages[0]
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Navigation Arrows - Enhanced for better visibility */}
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm z-10 border border-gray-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm z-10 border border-gray-200"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>
            {/* Image Counter - Better styling */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white text-sm px-4 py-2 rounded-full backdrop-blur-sm font-medium">
              {currentImageIndex + 1} / {villa.images.length}
            </div>
          </div>

          {/* Secondary Images Grid - Better organization */}
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-3 h-80 lg:h-full">
            {villa.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className={`relative group overflow-hidden rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${
                  index === 2 || index === 3 ? "h-full" : "h-full"
                }`}
                onClick={() => setCurrentImageIndex(index + 1)}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${villa.name} - Image ${index + 2}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Overlay for last image if more photos available */}
                {index === 3 && villa.images.length > 5 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center transition-all duration-300 group-hover:bg-black/40">
                    <div className="text-white text-center">
                      <div className="text-2xl font-bold mb-1">+{villa.images.length - 5}</div>
                      <div className="text-sm opacity-90">More Photos                   </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
           

        {/* View All Photos Button - Enhanced */}
        <button
          onClick={handleMorePhotosClick}
          className="mt-6 flex items-center gap-3 px-6 py-3 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105 mx-auto text-gray-700 hover:text-gray-900 font-medium"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2  0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          View All {villa.images.length} Photos
        </button>

        {/* Simple Photo Gallery Overlay - Clean Design */}
        {showPhotoGallery && (
          <div className="fixed inset-0 z-50">
            <PhotoGallery
              images={villa.images}
              villaName={villa.name}
              isOpen={showPhotoGallery}
              onClose={handleClosePhotoGallery}
            />
          </div>
        )}
      </div>

      {/* Enhanced Main Content Section - Increased booking form width */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 mt-6 sm:mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 animate-stagger">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1 lg:pr-6 xl:pr-8">
          {/* Villa Title and Location */}
          <div className="scroll-animate">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight gradient-text">
              {villa.name}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-600 text-base sm:text-lg font-medium">{villa.location}</span>
              </div>
              <button className="text-emerald-600 hover:text-emerald-700 font-semibold underline transition-all duration-300 hover:scale-105 transform text-sm sm:text-base w-fit bg-emerald-50 hover:bg-emerald-100 px-3 py-1 rounded-full">
                📍 View on Map
              </button>
            </div>
          </div>

          {/* Rating Section */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(villa.rating || 4.5) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
              <span className="text-gray-700 font-semibold ml-2">{villa.rating || 4.5}</span>
              <span className="text-gray-500 text-sm">({Math.floor(Math.random() * 50) + 20} reviews)</span>
            </div>
          </div>

          {/* Enhanced Villa Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10 scroll-animate">
            <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-4 sm:p-6 rounded-2xl border border-emerald-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-emerald-200 rounded-full">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-700" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-700">{villa.guests}</div>
                  <div className="text-sm sm:text-base text-emerald-600 font-medium">Guests</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 rounded-2xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-200 rounded-full">
                  <div className="text-xl sm:text-2xl">🏠</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-blue-700">{villa.bedrooms}</div>
                  <div className="text-sm sm:text-base text-blue-600 font-medium">Bedrooms</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 sm:p-6 rounded-2xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-200 rounded-full">
                  <Bed className="h-5 w-5 sm:h-6 sm:w-6 text-purple-700" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-700">
                    {villa.bathrooms || villa.bedrooms}
                  </div>
                  <div className="text-sm sm:text-base text-purple-600 font-medium">Bathrooms</div>
                </div>
              </div>
            </div>
          </div>

          {/* Villa Info Header - Responsive */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8 text-gray-600 text-xs sm:text-sm mb-8 sm:mb-10 animate-slideInLeft">
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-4 py-2 rounded-xl">
              <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <span className="font-medium">{villa.guests} Guests</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-4 py-2 rounded-xl">
              <div className="h-4 w-4 sm:h-5 sm:w-5 text-green-600">🏠</div>
              <span className="font-medium">{villa.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-4 py-2 rounded-xl">
              <Bed className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              <span className="font-medium">{villa.bathrooms || villa.bedrooms} Bathrooms</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-10 animate-fadeInUp">
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Overview</h2>
            <div className="text-gray-700 leading-relaxed text-lg">
              <p className="mb-6">
                {showFullDescription
                  ? villa.longDescription || villa.description
                  : (villa.longDescription || villa.description)?.substring(0, 200) + "..."}
              </p>
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="text-green-600 hover:text-green-700 font-semibold underline transition-all duration-300 hover:scale-105 transform"
              >
                {showFullDescription ? "Read less" : "Read more"}
              </button>
            </div>
          </div>

          {/* Enhanced Facilities Section with Icons */}
          <div className="mb-10 animate-fadeInUp">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">What this place offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => {
                const IconComponent = facility.icon
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 hover:bg-gray-50 transition-all duration-300 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transform hover:scale-105 group"
                  >
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shadow-sm border border-green-100 group-hover:bg-green-100 transition-colors duration-300">
                        <IconComponent className="w-7 h-7 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-base">{facility.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">Available</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="mt-8 text-green-600 hover:text-green-700 font-semibold underline transition-all duration-300 hover:scale-105 transform">
              Show all {facilities.length} amenities
            </button>
          </div>

          <div className="mb-10 animate-fadeInUp">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">Where you'll be</h2>
            <div className="rounded-2xl overflow-hidden h-80 shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <iframe
                src={getVillaMapURL(villa.name, villa.location)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map showing ${villa.name} location in ${villa.location}`}
              ></iframe>
            </div>
            <div className="flex items-center gap-3 mt-4 text-gray-600">
              <MapPin className="h-5 w-5 text-green-600" />
              <span className="font-medium">{villa.location}</span>
              <span className="text-sm">• Exact location provided after booking</span>
            </div>
          </div>

          {/* Cancellation Policy Section */}
          <div className="border-t-2 border-gray-100 pt-10 mb-10 animate-fadeInUp">
            <button
              onClick={() => setShowCancellationPolicy(!showCancellationPolicy)}
              className="flex items-center justify-between w-full text-left group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold text-gray-900">Cancellation Policy</h2>
              <div
                className={`transform transition-transform duration-300 ${showCancellationPolicy ? "rotate-180" : ""}`}
              >
                <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
              </div>
            </button>
            {showCancellationPolicy && (
              <div className="mt-8 animate-slideInDown">
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                  In case of cancellation made during the below mentioned period before the check in by the Guests, the
                  following amount shall be deducted from the total Booking Amount:
                </p>
                <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-green-100 to-green-50">
                        <th className="px-6 py-4 text-left font-semibold text-gray-900 text-lg">Criteria</th>
                        <th className="px-6 py-4 text-left font-semibold text-gray-900 text-lg">Cancellation Policy</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <td className="px-6 py-4 text-gray-700 font-medium">If Travel is Within 15 Days</td>
                        <td className="px-6 py-4 text-gray-700">
                          Booking Is Non-Refundable and No Refund Will be applicable
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-gray-700 font-medium">If Travel is Within 15-30 Days</td>
                        <td className="px-6 py-4 text-gray-700">
                          50% of the Total Booking amount will be charged as a Cancellation penalty and the rest be
                          refunded back
                        </td>
                      </tr>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
                        <td className="px-6 py-4 text-gray-700 font-medium">If Travel is after 30 Days</td>
                        <td className="px-6 py-4 text-gray-700">
                          25% of the Total Booking amount will be charged as a Cancellation penalty and the rest be
                          refunded back
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Things To Know Section */}
          <div className="border-t-2 border-gray-100 pt-10 animate-fadeInUp">
            <button
              onClick={() => setShowThingsToKnow(!showThingsToKnow)}
              className="flex items-center justify-between w-full text-left group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300"
            >
              <h2 className="text-3xl font-semibold text-gray-900">Things To Know</h2>
              <div className={`transform transition-transform duration-300 ${showThingsToKnow ? "rotate-180" : ""}`}>
                <ChevronDown className="h-6 w-6 text-gray-500 group-hover:text-gray-700" />
              </div>
            </button>
            {showThingsToKnow && (
              <div className="mt-8 animate-slideInDown">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">
                      Security deposit of INR {villaPricing[villa.name]?.securityDeposit?.toLocaleString() || "20,000"}
                      /- will be collected at the time of booking and refunded within 72 hours of checkout. Any damages
                      or unpaid dues will be deducted from this deposit.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">
                      Check-in time is 2:00 PM and check-out time is 11:00 AM.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-lg leading-relaxed">Smoking is not allowed inside the property.</span>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Nearby Attractions Section */}
          {villa.nearbyAttractions && villa.nearbyAttractions.length > 0 && (
            <div className="mb-10 animate-fadeInUp">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Nearby Attractions</h2>
              <ul className="space-y-3">
                {villa.nearbyAttractions.map((attraction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <MapPin className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800">{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Event Information Section */}
          {villaPricing[villa.name]?.eventsAllowed && (
            <div className="mb-10 animate-fadeInUp">
              <h2 className="text-3xl font-semibold text-gray-900 mb-6">Events</h2>
              <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center shadow-sm border border-green-100">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                      ></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">Event Friendly Villa</h3>
                    <p className="text-gray-600 mt-1">
                      This villa is suitable for hosting events. Maximum capacity: {villaPricing[villa.name]?.maxGuests}{" "}
                      guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security Deposit Information */}
          {villaPricing[villa.name]?.securityDeposit && (
            <div className="mb-10 animate-fadeInUp">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-full">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Security Deposit</h3>
                    <p className="text-gray-600 text-sm">
                      A refundable security deposit of ₹{villaPricing[villa.name].securityDeposit.toLocaleString()} will
                      be collected at the time of booking.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Timeline Booking Sidebar - Increased Width */}
        <div className="lg:col-span-1 order-1 lg:order-2 flex justify-center">
          <div className="lg:sticky lg:top-24 lg:max-h-[85vh] transition-all duration-700 ease-out animate-slideInRight w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <div className="bg-white/98 border-2 border-gray-200/50 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-5 xl:p-6 shadow-2xl hover:shadow-3xl transition-all duration-500 backdrop-blur-sm mb-6 lg:mb-0 sticky-booking-box lg:max-h-[80vh] lg:overflow-y-auto">
              {/* Timeline Progress Indicator - Made Sticky */}
              <div className="sticky-stepper">
                <div className="flex items-center justify-between mb-3 lg:mb-4">
                  {[1, 2, 3].map((step) => (
                    <div key={step} className="flex items-center timeline-step">
                      <div
                        className={`
                        w-8 h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 rounded-full flex items-center justify-center text-xs lg:text-sm font-bold transition-all duration-500 step-transition
                        ${
                          bookingStep > step
                            ? "step-completed"
                            : bookingStep === step
                              ? "step-active"
                              : "bg-gray-200 text-gray-400"
                        }
                      `}
                      >
                        {bookingStep > step ? (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          step
                        )}
                      </div>
                      {step < 3 && (
                        <div
                          className={`
                          w-6 sm:w-8 lg:w-6 xl:w-8 h-1 transition-all duration-500 timeline-connector
                          ${bookingStep > step ? "bg-green-600" : "bg-gray-200"}
                        `}
                        ></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-900">
                    {bookingStep === 1 && "📅 Select Your Dates"}
                    {bookingStep === 2 && "👥 Choose Guests"}
                    {bookingStep === 3 && "✅ Confirm Booking"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Step {bookingStep} of 3 -{" "}
                    {bookingStep === 1
                      ? "When would you like to stay?"
                      : bookingStep === 2
                        ? "How many guests will be joining?"
                        : bookingStep === 3
                          ? "Review and complete your booking"
                          : "Thank you for choosing us!"}
                  </p>
                  {/* User Authentication Status */}
                  {isSignedIn && userData && (
                    <div className="mt-2 flex items-center justify-center text-xs text-green-600 bg-green-50 rounded-full px-3 py-1">
                      <Check className="h-3 w-3 mr-1" />
                      Logged in as {userData.name || userData.email || "Authenticated User"}
                    </div>
                  )}
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="booking-form-content">
                {/* Price Header - Always Visible */}
                <div className="mb-6 text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
                  <div className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">Starting from</div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                    ₹ {villaPricing[villa.name]?.weekday?.toLocaleString() || villa.price.toLocaleString()}
                    <span className="text-xs sm:text-sm font-normal text-gray-600 ml-1">/ night</span>
                  </div>
                  {villaPricing[villa.name] && (
                    <div className="flex justify-center gap-4 mt-2 text-sm">
                      <div>
                        <span className="text-gray-600">Weekdays:</span>
                        <span className="font-medium ml-1">₹{villaPricing[villa.name].weekday.toLocaleString()}</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Weekends:</span>
                        <span className="font-medium ml-1">₹{villaPricing[villa.name].weekend.toLocaleString()}</span>
                      </div>
                    </div>
                  )}
                  <div className="text-xs text-gray-500">Min. stay: 1 night</div>
                </div>

                {/* Step 1: Date Selection */}
                {bookingStep === 1 && (
                  <div className="animate-fadeInUp space-y-4">
                    {/* Date Input Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-3 sm:p-4 hover:border-green-300 transition-all duration-300 min-h-[4rem] touch-manipulation">
                        <div className="text-xs text-gray-500 mb-1 font-medium">Check-in</div>
                        <div className="font-semibold text-gray-800 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                          {checkInDate ? (
                            <div className="flex flex-col">
                              <span className="text-green-700 text-sm">
                                {new Date(checkInDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(checkInDate).toLocaleDateString("en-IN", { weekday: "short" })}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Select date</span>
                          )}
                        </div>
                      </div>
                      <div className="bg-white border-2 border-gray-200 rounded-xl p-3 sm:p-4 hover:border-green-300 transition-all duration-300 min-h-[4rem] touch-manipulation">
                        <div className="text-xs text-gray-500 mb-1 font-medium">Check-out</div>
                        <div className="font-semibold text-gray-800 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-green-600 flex-shrink-0" />
                          {checkOutDate ? (
                            <div className="flex flex-col">
                              <span className="text-green-700 text-sm">
                                {new Date(checkOutDate).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}
                              </span>
                              <span className="text-xs text-gray-500">
                                {new Date(checkOutDate).toLocaleDateString("en-IN", { weekday: "short" })}
                              </span>
                            </div>
                          ) : (
                            <span className="text-gray-400 text-sm">Select date</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Calendar with Larger Date Boxes and Pricing */}
                    <div className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-green-300 transition-all duration-300 shadow-inner bg-white">
                      <div className="custom-calendar p-4">
                        {/* Calendar Header */}
                        <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                          <button
                            className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
                            onClick={() => {
                              const newDate = new Date(currentCalendarMonth)
                              newDate.setMonth(newDate.getMonth() - 1)
                              setCurrentCalendarMonth(newDate)
                            }}
                          >
                            <ChevronLeft className="h-5 w-5 text-green-600" />
                          </button>
                          <h3 className="text-lg font-bold text-gray-900">
                            {currentCalendarMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                          </h3>
                          <button
                            className="w-10 h-10 rounded-full bg-green-100 hover:bg-green-200 flex items-center justify-center transition-all duration-200 hover:scale-110"
                            onClick={() => {
                              const newDate = new Date(currentCalendarMonth)
                              newDate.setMonth(newDate.getMonth() + 1)
                              setCurrentCalendarMonth(newDate)
                            }}
                          >
                            <ChevronRight className="h-5 w-5 text-green-600" />
                          </button>
                        </div>

                        {/* Week Days Header */}
                        <div className="grid grid-cols-7 gap-3 mb-3">
                          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                            <div key={day} className="text-center text-sm font-semibold text-gray-500 py-2">
                              {day}
                            </div>
                          ))}
                        </div>

                        {/* Calendar Grid with Enhanced Date Boxes and Pricing */}
                        <div className="grid grid-cols-7 gap-2">
                          {(() => {
                            const year = currentCalendarMonth.getFullYear()
                            const month = currentCalendarMonth.getMonth()
                            const firstDayOfMonth = new Date(year, month, 1)
                            const startDate = new Date(firstDayOfMonth)
                            startDate.setDate(startDate.getDate() - firstDayOfMonth.getDay())

                            const days = []
                            for (let i = 0; i < 42; i++) {
                              const currentDate = new Date(startDate)
                              currentDate.setDate(startDate.getDate() + i)
                              // Set to noon to avoid timezone issues
                              currentDate.setHours(12, 0, 0, 0)
                              days.push(currentDate)
                            }

                            return days.map((currentDate, index) => {
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              const isCurrentMonth = currentDate.getMonth() === month
                              const isToday = currentDate.toDateString() === today.toDateString()
                              const isPast = currentDate < today && !isToday
                              // Fix: Ensure we're comparing dates properly by using the formatted string
                              const currentDateStr = formatDateToYYYYMMDD(currentDate)
                              const isCheckIn = checkInDate === currentDateStr
                              const isCheckOut = checkOutDate === currentDateStr
                              const isInRange =
                                checkInDate &&
                                checkOutDate &&
                                currentDateStr >= checkInDate &&
                                currentDateStr <= checkOutDate
                              const isFirstDayOfMonth = currentDate.getDate() === 1

                              // Get price for this date
                              const datePrice = getPriceForDate(currentDate, villa.name)

                              return (
                                <div
                                  key={`${currentDate.getTime()}-${index}`}
                                  className={`
                                    relative
                                    ${isCurrentMonth ? "" : "opacity-40"}
                                    ${
                                      isPast
                                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                        : isCheckIn
                                          ? "bg-green-600 text-white font-bold border-2 border-green-700 shadow-lg"
                                          : isCheckOut
                                            ? "bg-blue-600 text-white font-bold border-2 border-blue-700 shadow-lg"
                                            : isInRange
                                              ? "bg-green-100 text-green-800 hover:bg-green-200"
                                              : "hover:bg-gray-100 hover:scale-105"
                                    }
                                    flex flex-col items-center justify-center rounded-lg cursor-pointer 
                                    min-h-[52px] sm:min-h-[58px] transition-all duration-200 select-none
                                    ${isToday && !isCheckIn && !isCheckOut ? "ring-2 ring-green-500 ring-offset-1" : ""}
                                  `}
                                  onClick={() => {
                                    if (isPast) return

                                    // Improved date selection logic
                                    if (!checkInDate || (checkInDate && checkOutDate)) {
                                      const newStartDate = formatDateToYYYYMMDD(currentDate)
                                      setCheckInDate(newStartDate)
                                      setCheckOutDate("")
                                      setDateRange([
                                        {
                                          startDate: currentDate,
                                          endDate: null,
                                          key: "selection",
                                        },
                                      ])
                                    } else if (checkInDate && !checkOutDate) {
                                      // Compare using the formatted date string
                                      if (currentDateStr > checkInDate) {
                                        setCheckOutDate(currentDateStr)
                                        setDateRange([
                                          {
                                            startDate: parseYYYYMMDD(checkInDate),
                                            endDate: currentDate,
                                            key: "selection",
                                          },
                                        ])
                                      } else if (currentDateStr < checkInDate) {
                                        // If clicked date is before check-in, swap them
                                        setCheckOutDate(checkInDate)
                                        setCheckInDate(currentDateStr)
                                        setDateRange([
                                          {
                                            startDate: currentDate,
                                            endDate: parseYYYYMMDD(checkInDate),
                                            key: "selection",
                                          },
                                        ])
                                      }
                                    }
                                  }}
                                >
                                  {/* Month indicator for first day of month */}
                                  {isFirstDayOfMonth && isCurrentMonth && (
                                    <div className="absolute -top-7 text-xs font-medium text-gray-500">
                                      {currentDate.toLocaleString("default", { month: "short" })}
                                    </div>
                                  )}
                                  {/* Date Number with Enhanced Styling */}
                                  <div
                                    className={`
                                      text-sm font-medium flex items-center justify-center
                                      ${
                                        isCheckIn || isCheckOut
                                          ? "text-white"
                                          : isToday
                                            ? "text-green-600 font-bold"
                                            : "text-gray-800"
                                      }
                                      ${isInRange && !isCheckIn && !isCheckOut ? "bg-green-100 rounded-full w-8 h-8" : ""}
                                      transition-all duration-300
                                    `}
                                  >
                                    {currentDate.getDate()}
                                  </div>

                                  {/* Price Display Below Date */}
                                  {isCurrentMonth && !isPast && (
                                    <div
                                      className={`text-xs mt-1 ${isCheckIn || isCheckOut ? "text-white" : "text-gray-600"}`}
                                    >
                                      {formatPrice(price)}
                                    </div>
                                  )}

                                  {/* Small indicator for today */}
                                  {isToday && !isCheckIn && !isCheckOut && (
                                    <div className="absolute -bottom-1 w-1 h-1 rounded-full bg-green-500"></div>
                                  )}
                                </div>
                              )
                            })
                          })()}
                        </div>

                        {/* Price Information Below Calendar */}
                        <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-100">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-700">Weekday Rate</span>
                            </div>
                            <span className="text-green-600 font-bold">
                              ₹{villaPricing[villa.name]?.weekday?.toLocaleString() || villa.price.toLocaleString()}
                              /night
                            </span>
                          </div>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              <span className="text-sm font-medium text-gray-700">Weekend Rate</span>
                            </div>
                            <span className="text-blue-600 font-bold">
                              ₹{villaPricing[villa.name]?.weekend?.toLocaleString() || villa.price.toLocaleString()}
                              /night
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 text-center">
                            Final pricing may vary based on dates and seasonality
                          </div>
                        </div>

                        {/* Selected Dates Summary - Enhanced Design */}
                        {checkInDate && checkOutDate && (
                          <div className="mt-4 pt-3 border-t border-green-200 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 shadow-inner">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-gradient-to-br from-green-500 to-green-600 rounded-full"></div>
                                <span className="font-medium text-gray-800">Your Stay</span>
                              </div>
                              <span className="text-green-600 font-bold px-2 py-1 bg-green-100 rounded-lg">
                                {totalDays} night{totalDays > 1 ? "s" : ""}
                              </span>
                            </div>
                            <div className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm mt-2">
                              <div className="text-gray-800">
                                <div className="text-xs text-gray-500 mb-1 font-medium">Check-in</div>
                                <div className="font-semibold">
                                  {checkInDate &&
                                    new Date(checkInDate).toLocaleDateString("en-IN", {
                                      weekday: "short",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                </div>
                              </div>
                              <div className="border-t-2 border-dashed border-gray-300 w-12 mx-1"></div>
                              <div className="text-right text-gray-800">
                                <div className="text-xs text-gray-500 mb-1 font-medium">Check-out</div>
                                <div className="font-semibold">
                                  {checkOutDate &&
                                    new Date(checkOutDate).toLocaleDateString("en-IN", {
                                      weekday: "short",
                                      month: "short",
                                      day: "numeric",
                                    })}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Guest Selection */}
                {bookingStep === 2 && (
                  <div className="animate-fadeInUp space-y-4">
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0  11-6 0 016 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        How many guests?
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Maximum {villaPricing[villa.name]?.maxGuests || villa.guests} guests allowed
                      </p>

                      {/* Adults */}
                      <div className="guest-counter flex items-center justify-between mb-4 p-4 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Adults
                          </div>
                          <div className="text-sm text-gray-500">Age 13+</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setAdults(Math.max(1, adults - 1))}
                            disabled={adults <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="w-12 text-center">
                            <span className="text-xl font-bold text-green-700">{adults}</span>
                          </div>
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setAdults(adults + 1)}
                            disabled={adults + children >= (villaPricing[villa.name]?.maxGuests || villa.guests)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="guest-counter flex items-center justify-between mb-4 p-4 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 100 8 4 4 0 000-8zM8 14a2 2 0 00-2 2v1a1 1 0 001 1h6a1 1 0 001-1v-1a2 2 0 00-2-2H8z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Children
                          </div>
                          <div className="text-sm text-gray-500 mb-4">
                            Age 3–12
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setChildren(Math.max(0, children - 1))}
                            disabled={children <= 0}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="w-12 text-center">
                            <span className="text-xl font-bold text-green-700">{children}</span>
                          </div>
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() =>
                              setChildren(
                                adults + children < (villaPricing[villa.name]?.maxGuests || villa.guests)
                                  ? children + 1
                                  : children,
                              )
                            }
                            disabled={adults + children >= (villaPricing[villa.name]?.maxGuests || villa.guests)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Infants */}
                      <div className="guest-counter flex items-center justify-between p-4 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900 flex items-center">
                            <svg className="w-5 h-5 mr-2 text-pink-600" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                fillRule="evenodd"
                                d="M10 2a4 4 0 100 8 4 4 0 000-8zM4 13a6 6 0 1112 0v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            Infants
                          </div>
                          <div className="text-sm text-gray-500">Under 2 (don't count toward guest limit)</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            onClick={() => setInfants(Math.max(0, infants - 1))}
                            disabled={infants <= 0}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <div className="w-12 text-center">
                            <span className="text-xl font-bold text-green-700">{infants}</span>
                          </div>
                          <button
                            type="button"
                            className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:bg-green-100 hover:border-green-400 transition-all duration-300"
                            onClick={() => setInfants(infants + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      {/* Guest Summary */}
                      <div className="mt-4 pt-3 border-t border-green-200 bg-white rounded-lg p-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-700">Total Guests</span>
                          <span className="text-green-600 font-bold">
                            {adults + children} guest{adults + children > 1 ? "s" : ""}
                            {infants > 0 ? ` + ${infants} infant${infants > 1 ? "s" : ""}` : ""}
                          </span>
                        </div>
                        {adults + children < (villaPricing[villa.name]?.maxGuests || villa.guests) && (
                          <div className="text-xs text-gray-500 mt-1">
                            You can add {(villaPricing[villa.name]?.maxGuests || villa.guests) - (adults + children)}{" "}
                            more guest
                            {(villaPricing[villa.name]?.maxGuests || villa.guests) - (adults + children) > 1 ? "s" : ""}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirm Booking */}
                {bookingStep === 3 && (
                  <div className="animate-fadeInUp space-y-4">
                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
                      <h4 className="font-semibold text-gray-900 mb-3">Booking Summary</h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Dates:</span>
                          <span className="font-medium">
                            {checkInDate &&
                              checkOutDate &&
                              `${new Date(checkInDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })} - ${new Date(checkOutDate).toLocaleDateString("en-IN", { month: "short", day: "numeric" })}`}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Guests:</span>
                          <span className="font-medium">
                            {adults + children} Adults/Children{infants > 0 ? `, ${infants} Infants` : ""}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Booked by:</span>
                          <span className="font-medium">{userData?.name || userData?.email || "Guest User"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Enhanced Price Breakdown */}
                {totalDays > 0 && bookingStep === 3 && (
                  <div className="mt-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 border border-green-100">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Total for {totalDays} night{totalDays > 1 ? "s" : ""}
                        </span>
                        <span className="font-medium">
                          ₹{(() => {
                            let totalPrice = 0
                            for (let i = 0; i < totalDays; i++) {
                              const currentDate = new Date(checkInDate)
                              currentDate.setDate(currentDate.getDate() + i)
                              totalPrice += getPriceForDate(currentDate, villa.name)
                            }
                            return totalPrice.toLocaleString()
                          })()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Service fee (5%)</span>
                        <span className="font-medium">
                          ₹{(() => {
                            let totalPrice = 0
                            for (let i = 0; i < totalDays; i++) {
                              const currentDate = new Date(checkInDate)
                              currentDate.setDate(currentDate.getDate() + i)
                              totalPrice += getPriceForDate(currentDate, villa.name)
                            }
                            return Math.round(totalPrice * 0.05).toLocaleString()
                          })()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxes (18%)</span>
                        <span className="font-medium">
                          ₹{(() => {
                            let totalPrice = 0
                            for (let i = 0; i < totalDays; i++) {
                              const currentDate = new Date(checkInDate)
                              currentDate.setDate(currentDate.getDate() + i)
                              totalPrice += getPriceForDate(currentDate, villa.name)
                            }
                            const serviceFee = Math.round(totalPrice * 0.05)
                            return Math.round((totalPrice + serviceFee) * 0.18).toLocaleString()
                          })()}
                        </span>
                      </div>
                      <div className="border-t border-green-200 pt-2 mt-2">
                        <div className="flex justify-between text-lg font-bold">
                          <span className="text-gray-900">Total Amount</span>
                          <span className="text-green-600">₹{totalAmount.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="mt-6 space-y-3">
                  {bookingStep === 1 && (
                    <button
                      onClick={() => {
                        if (!checkInDate || !checkOutDate) {
                          Swal.fire({
                            icon: "warning",
                            title: "Select Dates",
                            text: "Please select both check-in and check-out dates.",
                            confirmButtonColor: "#16a34a",
                          })
                          return
                        }
                        setBookingStep(2)
                      }}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl booking-button disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={!checkInDate || !checkOutDate}
                    >
                      Continue to Guests
                    </button>
                  )}

                  {bookingStep === 2 && (
                    <div className="space-y-3">
                      <button
                        onClick={() => setBookingStep(3)}
                        className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl booking-button"
                      >
                        Review Booking
                      </button>
                      <button
                        onClick={() => setBookingStep(1)}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                      >
                        Back to Dates
                      </button>
                    </div>
                  )}

                  {bookingStep === 3 && (
                    <div className="space-y-3">
                      <button
                        onClick={handleBookNow}
                        disabled={bookingLoading || paymentProcessing || !checkInDate || !checkOutDate}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl booking-button disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {bookingLoading || paymentProcessing ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {paymentProcessing ? "Processing Payment..." : "Processing..."}
                          </div>
                        ) : (
                          "Pay & Confirm ₹" + totalAmount.toLocaleString()
                        )}
                      </button>
                      <button
                        onClick={() => setBookingStep(2)}
                        className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-xl transition-all duration-300"
                        disabled={bookingLoading || paymentProcessing}
                      >
                        Back to Guests
                      </button>
                    </div>
                  )}
                </div>

                {/* Authentication Notice */}
                {!isSignedIn && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-blue-100 rounded-full">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 text-sm">Login Required</h4>
                        <p className="text-blue-700 text-xs">You'll need to sign in to complete your booking.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-4 p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Shield className="h-3 w-3 text-green-600" />
                      <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Check className="h-3 w-3 text-green-600" />
                      <span>Instant Confirmation</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3 text-green-600" />
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Popups */}
      <CalendarPopup
        isVisible={showCheckInCalendar}
        onClose={() => setShowCheckInCalendar(false)}
        onDateSelect={handleCheckInDateSelect}
        title="Select Check-in Date"
        selectedDate={checkInDate}
      />

      <CalendarPopup
        isVisible={showCheckOutCalendar}
        onClose={() => setShowCheckOutCalendar(false)}
        onDateSelect={handleCheckOutDateSelect}
        title="Select Check-out Date"
      />

      {/* Time Selection Popups */}
      <TimeSelectionPopup
        isVisible={showCheckInTime}
        onClose={() => setShowCheckInTime(false)}
        onTimeSelect={setCheckInTime}
        title="Select Check-in Time"
        selectedTime={checkInTime}
      />

      <TimeSelectionPopup
        isVisible={showCheckOutTime}
        onClose={() => setShowCheckOutTime(false)}
        onTimeSelect={setCheckOutTime}
        title="Select Check-out Time"
        selectedTime={checkOutTime}
      />

      {/* Photo Gallery */}
      {showPhotoGallery && (
        <div className="fixed inset-0 z-50">
          <PhotoGallery
            images={villa.images}
            villaName={villa.name}
            isOpen={showPhotoGallery}
            onClose={handleClosePhotoGallery}
          />
        </div>
      )}
    </div>
  )
}

export default VillaDetail
