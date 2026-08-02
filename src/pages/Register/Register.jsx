import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MainLayout from "../../components/layout/MainLayout";
import { register } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const { error } = await register(
      form.fullName,
      form.email,
      form.password
    );

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Registration Successful!");

    navigate("/login");
  };

  return (
    <MainLayout>
      <section className="min-h-screen flex justify-center items-center bg-gray-100">

        <form
          onSubmit={handleSubmit}
          className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Create Account
          </h1>

          <input
            name="fullName"
            placeholder="Full Name"
            className="border w-full p-3 rounded mb-4"
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="border w-full p-3 rounded mb-4"
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border w-full p-3 rounded mb-6"
            onChange={handleChange}
            required
          />

          <button
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>

          <p className="mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-orange-500"
            >
              Login
            </Link>
          </p>

        </form>

      </section>
    </MainLayout>
  );
}

export default Register;