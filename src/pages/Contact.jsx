import { SectionTitle } from "../components";

const Contact = () => {
  const whatsappNumber = "6281952215980";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  return (
    <div className="mt-10">
      <SectionTitle title="Contact Us" path="Home | Contact" />
      <div className="isolate px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
            <p className="text-lg mb-6 text-center">Jika Anda memiliki pertanyaan atau memerlukan bantuan, jangan ragu untuk menghubungi kami melalui WhatsApp dengan mengklik tautan di bawah ini:</p>
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-6 py-3 bg-green-500 text-white rounded-lg text-lg hover:bg-green-600 transition-colors"
            >
              Hubungi kami di WhatsApp
            </a>
      </div>
    </div>
  );
};

export default Contact;
