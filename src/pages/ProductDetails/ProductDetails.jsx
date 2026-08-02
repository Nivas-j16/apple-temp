import MainLayout from "../../components/layout/MainLayout";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { slug } = useParams();

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left - Images */}
          <div>

            {/* Main Image */}
            <div className="bg-gray-100 rounded-xl h-[500px] flex items-center justify-center">
              <span className="text-gray-500 text-lg">
                Template Preview
              </span>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4 mt-5">

              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="h-24 rounded-lg bg-gray-200 flex items-center justify-center cursor-pointer hover:border-2 hover:border-orange-500"
                >
                  Preview {item}
                </div>
              ))}

            </div>

          </div>

          {/* Right - Details */}
          <div>

            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">
              Business
            </span>

            <h1 className="text-4xl font-bold mt-4">
              Digital Agency PSD
            </h1>

            <p className="text-gray-500 mt-2">
              Product ID: {slug}
            </p>

            <div className="text-4xl font-bold text-orange-600 mt-6">
              ₹299
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              This premium PSD template is suitable for agencies,
              startups, freelancers, businesses, and creative projects.
              It includes a clean, modern layout with well-organized layers.
            </p>

            {/* Features */}
            <div className="mt-8">

              <h2 className="text-xl font-bold mb-4">
                Features
              </h2>

              <ul className="list-disc list-inside space-y-2 text-gray-600">

                <li>100% Layered PSD</li>
                <li>Fully Editable</li>
                <li>Organized Layers</li>
                <li>Free Fonts Used</li>
                <li>Easy to Customize</li>

              </ul>

            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
                Buy Now
              </button>

              <button className="border border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-lg">
                Add to Cart
              </button>

            </div>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default ProductDetails;