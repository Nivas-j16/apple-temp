import MainLayout from "../../components/layout/MainLayout";
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h1 className="text-5xl font-bold leading-tight">
            Premium PSD Templates
          </h1>

          <p className="mt-6 text-lg text-orange-100 max-w-2xl mx-auto">
            Discover high-quality PSD templates for websites, landing pages,
            dashboards, portfolios, business, ecommerce, and more.
          </p>

          {/* Search Box */}
          <div className="mt-10 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg flex items-center overflow-hidden">

              <input
                type="text"
                placeholder="Search PSD Templates..."
                className="flex-1 px-6 py-4 text-gray-700 outline-none"
              />

              <button className="bg-orange-600 hover:bg-orange-700 px-6 py-4 text-white">
                <FaSearch />
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Browse Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

          {[
            "Business",
            "Portfolio",
            "Dashboard",
            "Landing Page",
            "Ecommerce",
            "Restaurant",
          ].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow hover:shadow-lg transition cursor-pointer p-6 text-center"
            >
              <h3 className="font-semibold text-gray-700">
                {category}
              </h3>
            </div>
          ))}

        </div>

      </section>

      {/* Featured Templates */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="flex justify-between items-center mb-8">

          <h2 className="text-3xl font-bold text-gray-800">
            Featured Templates
          </h2>

          <button className="text-orange-500 font-semibold">
            View All
          </button>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-52 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">
                  Template Preview
                </span>
              </div>

              <div className="p-5">

                <h3 className="font-bold text-lg">
                  Digital Agency PSD
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Modern business landing page PSD template.
                </p>

                <div className="flex justify-between items-center mt-5">

                  <span className="text-orange-600 font-bold text-lg">
                    ₹299
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg">
                    View
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
    </MainLayout>
  );
}

export default Home;