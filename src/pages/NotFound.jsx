import { Button } from "../components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#0a0e27] via-[#1a1d3e] to-[#2d1b4e] pt-20">
      <div className="text-center px-6">
        <h1 className="text-9xl md:text-[150px] font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-500 to-pink-500 mb-4">
          404
        </h1>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. It might have been
          moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-linear-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium">
              Go Home
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 rounded-full font-medium border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#0a0e27] transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
