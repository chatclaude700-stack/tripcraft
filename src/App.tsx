import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from '@components/Navbar'
import { HeroSection } from '@components/HeroSection'
import { PopularTours } from '@components/PopularTours'
import { PackageDetailPage } from '@pages/PackageDetailPage'
import { BookingPage } from '@pages/BookingPage'
import { useStore } from '@store/index'
import { useEffect } from 'react'

function App() {
  const { theme } = useStore()

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PopularTours />
            </>
          }
        />
        <Route path="/package/:id" element={<PackageDetailPage />} />
        <Route path="/booking/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  )
}

export default App
