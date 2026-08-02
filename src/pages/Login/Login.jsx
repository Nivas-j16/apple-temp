import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

function Login() {
  return (
    <MainLayout>
      <section className="min-h-[80vh] flex items-center justify-center bg-gray-100 px-6">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center text-white text-3xl font-bold">
              A
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Welcome Back
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Sign in to your Apple Temp account
          </p>

          {/* Form */}
          <form className="mt-8 space-y-5">

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-orange-500 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign In
            </button>

          </form>

          {/* Register */}
          <p className="text-center mt-6 text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-orange-500 font-semibold hover:underline"
            >
              Create Account
            </Link>
          </p>

        </div>

      </section>
    </MainLayout>
  );
}

export default Login;