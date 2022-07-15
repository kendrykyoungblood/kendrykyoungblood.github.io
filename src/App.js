import './css/App.css'
import { useEffect } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {
  Home,
  ArtistBio,
  Contests,
  Works,
  Services,
  Contact
} from './pages'
import { Routes, Route } from "react-router"
import artist from "./ArtistInfo.json"

function App() {
  useEffect(() => {
    function changeTheme() {
      let dark = window.matchMedia("(prefers-color-scheme: dark)").matches

      if (dark) {
        document.documentElement.setAttribute("data-theme", "dark")
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#2a283f")
      } else {
        document.documentElement.setAttribute("data-theme", "light")
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#ece8ff")
      }
    }

    changeTheme()
    
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", changeTheme)
    return () => window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", changeTheme)
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/artist-bio" element={<ArtistBio artist={artist[0]} />} />
        <Route path="/contests" element={<Contests />} />
        <Route path="/published-works" element={<Works />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home artist={artist[0]} />} />
      </Routes>
      <Footer artist={artist[0]} />
    </div>
  )
}

export default App