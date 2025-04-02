import Navbar from './../../shared/Navbar';

const Home = () => {
  return (
    <div 
      className="relative w-full min-h-screen bg-[#d0e3e9] flex flex-col items-start justify-center p-6"
      style={{
        backgroundImage: "url('/WhatsApp Image 2025-04-02 at 10.22.04 PM.jpeg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Navbar />
      <div className="max-w-4xl w-full text-left mt-16 pl-6">
        <h1 className="text-6xl font-bold text-black leading-tight">
          Clinic <span className="text-gray-900">Management <br /> System</span>
        </h1>
        <span className="text-2xl mt-5 block text-gray-900 font-semibold">
          Your health is our priority
        </span>
      </div>
    </div>
  );
};

export default Home;
