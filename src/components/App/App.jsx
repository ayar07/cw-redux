import NavBarMenu from "../NavBarMenu/NavBarMenu"
import { HereIsLogo, Home, AboutUs, Contact, News, Services } from "../../pages"
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";



const App = () => {
  return (
    <Router>
      <NavBarMenu />
      <Routes>
        <Route path="/" element={<HereIsLogo />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  )
}

export default App;