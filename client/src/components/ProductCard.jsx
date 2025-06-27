import { EditIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";

function ProductCard({ product }) {
  const { deleteAProduct } = useProductStore();
  const handleDelete = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this product? This action cannot be undone."
      )
    ) {
      await deleteAProduct(product.id);
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {/* Image section with aspect ratio */}
      <figure className="relative pt-[56.25%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </figure>

      {/* Card content */}
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">{product.name}</h2>
        <h5 className="card-title text-sm font-bold text-green-500">
          {"Brand: " + product.brand}
        </h5>
        <p className="card-title text-sm font-semibold">
          {product.description}
        </p>
        <p className="text-2xl font-bold text-green-500">
          {"$" + Number(product.price).toFixed(2)}
        </p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/product/${product.id}`} className="btn btn-sm btn-info">
            <EditIcon className="size-4 text-white" />
          </Link>

          <button className="btn btn-sm btn-error" onClick={handleDelete}>
            <Trash2Icon className="size-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
