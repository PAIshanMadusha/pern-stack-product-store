import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  formData: {
    name: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({formData}),

  resetForm: ()=> set({formData: {name: "", price: "", image: ""}}),

  addAProduct: async(e) =>{
    e.preventDefault();
    set({loading: true});
    try{
        const {formData} = get();
        await axios.post(`${BASE_URL}/api/products`, formData);
        await get().fetchProducts();
        get().resetForm();
        toast.success("Product Added Successfully!");
        document.getElementById("add_product_modal").close();
    }catch(error){  
        console.log("Error in addProduct funcion", error);
        toast.error("failed to Add Product!")
    }finally{
        set({loading: false});
    }
  },

  fetchProducts: async () => {
    set({ loading: true });
    try{
        const response = await axios.get(`${BASE_URL}/api/products`);
        set({products: response.data.data, error: null });
    }catch(error){
        if(error.status == 429)set ({error: "Too many requests. Please try again later.", products: []});
        else set({ error: "An error occurred. Please try again later.", products: [] });

    }finally{
        set({ loading: false });
    }
  },

  deleteAProduct: async (id)=> {
    set({loading: true})
    try{
        await axios.delete(`${BASE_URL}/api/products/${id}`);
        set(prev => ({products: prev.products.filter(product => product.id !== id)}));
        toast.success("Product deleted successfully!");
    }catch(error){
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product!");
    }finally{
        set({loading: false});
    }
  }
}));
