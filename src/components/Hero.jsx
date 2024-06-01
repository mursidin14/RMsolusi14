import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-base-200 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-4xl text-accent-content">Ubah Ide Anda Menjadi Kenyataan Digital!</h1>
        <p className="py-6 text-2xl max-md:text-lg text-accent-content">
          Layanan Digital Terbaik: Desain Web, Aplikasi, dan Logo.
        </p>
        <Link to="/shop" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white">Lihar Produk</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero