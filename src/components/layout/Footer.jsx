import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-xl font-bold">
                A
              </div>

              <div>
                <h2 className="text-xl font-bold">
                  Apple Temp
                </h2>

                <p className="text-sm text-gray-400">
                  Premium PSD Marketplace
                </p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-6">
              Download premium PSD templates for websites,
              landing pages, dashboards, mobile apps, and
              creative projects.
            </p>
          </div>

          {/* Marketplace */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Marketplace
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/products" className="hover:text-orange-400">
                  Browse Templates
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-orange-400">
                  Categories
                </Link>
              </li>

              <li>
                <Link to="/new" className="hover:text-orange-400">
                  New Templates
                </Link>
              </li>

            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link to="/about" className="hover:text-orange-400">
                  About
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-orange-400">
                  Contact
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-orange-400">
                  Privacy Policy
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>

            <h3 className="font-semibold text-lg mb-4">
              Follow Us
            </h3>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-orange-500 flex items-center justify-center"
              >
                <FaFacebook />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-orange-500 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-orange-500 flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-orange-500 flex items-center justify-center"
              >
                <FaGithub />
              </a>

            </div>

          </div>

        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © {year} Apple Temp. All rights reserved.
          </p>

          <p>
            Designed & Developed with ❤️ using React & Supabase
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;