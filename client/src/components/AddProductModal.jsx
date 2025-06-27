import {
  DollarSignIcon,
  ImageIcon,
  Package2Icon,
  PackageCheckIcon,
  PlusCircleIcon,
  Signature,
} from "lucide-react";

import { useProductStore } from "../store/useProductStore";

function AddProductModal() {
  const { addAProduct, formData, setFormData, loading } = useProductStore();
  return (
    <dialog id="add_product_modal" className="modal">
      <div className="modal-box">
        {/* Close button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 size-6">
            X
          </button>
        </form>

        {/* Heading */}
        <h3 className="font-bold text-xl mb-5">Add New Product</h3>
        <form onSubmit={addAProduct} className="space-y-6">
          <div className="grid gap-6">

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

            {/* Product Brand */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium mb-1">
                  Product Brand:
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 z-10">
                  <Signature className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Ex: MSI, Logitech, Corsair"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-xl"
                  value={formData.brand}
                  onChange={(e) =>
                    setFormData({ ...formData, brand: e.target.value })
                  }
                />
              </div>
            </div>

            {/* Product Description */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium mb-1">
                  Product Description:
                </span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50 z-10">
                  <PackageCheckIcon className="size-5" />
                </div>
                <input
                  type="text"
                  placeholder="Its size, materials, features, and more"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200 rounded-xl"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
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
          </div>

          {/* Submit Button */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={
                !formData.name || !formData.brand || !formData.description || !formData.price || !formData.image || loading
              }
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Add Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>Close</button>
      </form>
    </dialog>
  );
}

export default AddProductModal;
