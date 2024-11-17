import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Navbar } from './components/NavBar/NavBar'
import { HeroSection } from './components/HeroSection/HeroSection'
import { CarBrands } from './components/CarBrands/CarBrands'
import { Working } from './components/Working/Working'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <HeroSection/>
    <CarBrands/>
    <Working/>
  </StrictMode>,
)
