import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center text-white text-xl font-bold">
            A
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Apple Temp
            </h1>

            <p className="text-xs text-gray-500">
              Premium PSD Marketplace
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Templates
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 font-semibold"
                : "text-gray-700 hover:text-orange-500"
            }
          >
            Login
          </NavLink>

        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-5">

          <button className="text-gray-700 hover:text-orange-500">
            <FaSearch size={18} />
          </button>

          <button className="text-gray-700 hover:text-orange-500">
            <FaShoppingCart size={18} />
          </button>

          <button className="text-gray-700 hover:text-orange-500">
            <FaUser size={18} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;