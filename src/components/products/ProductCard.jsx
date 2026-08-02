import { Link } from "react-router-dom";

function ProductCard({
  id,
  title,
  category,
  price,
  thumbnail,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">

      {/* Thumbnail */}
      <div className="h-60 bg-gray-100 overflow-hidden">

        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No Preview
          </div>
        )}

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="inline-block bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full mb-3">
          {category}
        </span>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="flex justify-between items-center mt-6">

          <span className="text-2xl font-bold text-orange-600">
            ₹{price}
          </span>

          <Link
            to={`/product/${id}`}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg transition"
          >
            View
          </Link>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;