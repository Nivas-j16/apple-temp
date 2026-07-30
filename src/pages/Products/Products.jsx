import MainLayout from "../../components/layout/MainLayout";
import ProductCard from "../../components/product/ProductCard";

function Products() {

  // Temporary Static Data
  const templates = [
    {
      id: 1,
      title: "Digital Agency PSD",
      category: "Business",
      price: 299,
      thumbnail: "",
    },
    {
      id: 2,
      title: "Restaurant PSD",
      category: "Restaurant",
      price: 349,
      thumbnail: "",
    },
    {
      id: 3,
      title: "Portfolio PSD",
      category: "Portfolio",
      price: 199,
      thumbnail: "",
    },
    {
      id: 4,
      title: "Ecommerce PSD",
      category: "Ecommerce",
      price: 499,
      thumbnail: "",
    },
    {
      id: 5,
      title: "Dashboard PSD",
      category: "Dashboard",
      price: 399,
      thumbnail: "",
    },
    {
      id: 6,
      title: "Landing Page PSD",
      category: "Landing Page",
      price: 249,
      thumbnail: "",
    },
  ];

  return (
    <MainLayout>

      {/* Banner */}
      <section className="bg-orange-500 py-16">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-white">
            Premium PSD Templates
          </h1>

          <p className="text-orange-100 mt-3">
            Browse all premium PSD templates.
          </p>

        </div>

      </section>

      {/* Products */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex justify-between items-center mb-10">

          <h2 className="text-3xl font-bold">
            All Templates
          </h2>

          <span className="text-gray-500">
            {templates.length} Templates
          </span>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {templates.map((template) => (
            <ProductCard
              key={template.id}
              id={template.id}
              title={template.title}
              category={template.category}
              price={template.price}
              thumbnail={template.thumbnail}
            />
          ))}

        </div>

      </section>

    </MainLayout>
  );
}

export default Products;