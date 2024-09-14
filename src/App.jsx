import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import History from "./pages/History"
import Portfolio from "./pages/Portfolio"
import Notfound from "./pages/Notfound"
import Contacts from "./pages/Contacts"

function App() {

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<Notfound />} />
     </Routes>
    </>
  )
}

export default App