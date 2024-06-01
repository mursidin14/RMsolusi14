import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-8">
      <SectionTitle title="About Us" path="Home | About" />
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">RMsolusi14 Solusi Digital</h2>
      <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
      Di RMsolusi14, kami berkomitmen untuk menyediakan solusi digital yang inovatif dan efektif untuk membantu bisnis Anda berkembang di era digital. Dengan pengalaman dan keahlian kami, kami siap menjadi mitra Anda dalam mencapai kesuksesan melalui teknologi.
      </p>
      <Link to="/contact" className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;
