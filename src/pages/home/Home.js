import { Link } from "react-router"

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-col flex-grow items-center justify-center text-center p-6 bg-blue-100">
        <h2 className="text-4xl font-bold text-blue-800 mb-4">Welcome to Clinic System</h2>
        <p className="text-gray-700 text-lg max-w-2xl">
          Our clinic management system helps you streamline operations and improve patient care.
        </p>
        <div className="mt-6">
          <Link  className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900 transition">
            Get Started
          </Link>
        </div>
      </main>
        </div>
    )
}
export default Home