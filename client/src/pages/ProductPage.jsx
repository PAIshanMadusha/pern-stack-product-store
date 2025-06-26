import { useNavigate, useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";
import { ArrowLeftIcon, SaveIcon, Trash2Icon } from "lucide-react";
import { Package2Icon, DollarSignIcon, ImageIcon } from "lucide-react";

function ProductPage() {
  const {
    formData,
    setFormData,
    currentProduct,
    loading,
    error,
    fetchAProduct,
    updateAProduct,
    deleteAProduct,
  } = useProductStore();

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetchAProduct(id);
  }, [fetchAProduct, id]);

  const handleDelete = async () =>{
    await deleteAProduct(id);
    navigate("/");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="alert alert-error">{error}</div>
      </div>
    );
  }

  if (!currentProduct) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">

      {/* Back to Products Button */}
      <button onClick={() => navigate("/")} className="btn btn-outline btn-primary flex items-center gap-2 mb-6 mt-2 shadow transition-all hover:scale-105">
        <ArrowLeftIcon className="size-5" />
        <span className="font-semibold">Back to Products</span>
      </button>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden shadow-lg bg-base-100">
          <img
            src={currentProduct?.image}
            alt={currentProduct?.name}
            className="size-full object-cover"
          />
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Edit Product</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateAProduct(id);
              }}
              className="space-y-6"
            >
              {/* Product Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-1">
                    Product Name:
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 z-10">
                    <Package2Icon className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="Gaming Keyboard"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-xl"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Product Price */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-1">
                    Product Price:
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 z-10">
                    <DollarSignIcon className="size-5" />
                  </div>
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="100.00"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-xl"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: e.target.value })
                    }
                  />
                </div>
              </div>

              {/* Product Image URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base font-medium mb-1">
                    Product Image URL:
                  </span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 z-10">
                    <ImageIcon className="size-5" />
                  </div>
                  <input
                    type="text"
                    placeholder="https://example.com/photo/"
                    className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-xl"
                    value={formData.image}
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex justify-evenly mt-8">
                <button type="button" onClick={handleDelete} className="btn btn-error">
                  < Trash2Icon className="size-4 mr-2"/>
                    Delete Product
                </button>

                <button 
                  type="submit"
                  className="btn btn-primary"
                  disabled = {loading || !formData.name || !formData.price || !formData.image}
                >
                  { loading ? (
                    <span className="loading loading-spinner loading-sm"/>
                  ) : (
                    <>
                    <SaveIcon className="size-4 mr-2"/>
                    Save Changes
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
