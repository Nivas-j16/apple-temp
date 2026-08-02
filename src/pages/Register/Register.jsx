import { Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";

function Register() {
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

          <h1 className="text-3xl font-bold text-center text-gray-800">
            Create Account
          </h1>

          <p className="text-center text-gray-500 mt-2">
            Join Apple Temp today
          </p>

          <form className="mt-8 space-y-5">

            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="Create password"
                className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>

          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500 font-semibold"
            >
              Login
            </Link>
          </p>

        </div>
      </section>
    </MainLayout>
  );
}

export default Register;