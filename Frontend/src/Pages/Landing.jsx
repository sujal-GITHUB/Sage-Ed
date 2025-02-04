import Navbar from "../Components/Landing/Navbar"
import Hero from "../Components/Landing/Hero"
import Services from "../Components/Landing/Services"
import { StarDecoration, CurveDecoration, DotDecoration } from "../Components/Landing/Decorations"
import Contact from '../Components/Landing/Contact'

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#FFFCF1] dark:bg-gray-800 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20">
        <StarDecoration />
      </div>
      <div className="absolute top-40 right-40">
        <DotDecoration />
      </div>
      <div className="absolute bottom-40 left-20">
        <CurveDecoration />
      </div>

      <Navbar />
      <Hero />
      <Services />
      <Contact />
    </div>
  )
}
