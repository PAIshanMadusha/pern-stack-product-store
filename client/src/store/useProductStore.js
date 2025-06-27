import { create } from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,

  formData: {
    name: "",
    brand: "",
    description: "",
    price: "",
    image: "",
  },

  setFormData: (formData) => set({formData}),

  resetForm: ()=> set({formData: {name: "", brand: "", description: "", price: "", image: ""}}),

  //Add a product
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

  //Fetch all products
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

  //Delete a product by ID
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
  },

  //Fetch a single product by ID
  fetchAProduct: async(id) =>{
    set({loading: true});
    try{
      const response = await axios.get(`${BASE_URL}/api/products/${id}`);
      set({currentProduct: response.data.data, 
        formData: response.data.data,
        error: null,
      })
    }catch(error){
      console.error("Error fetching a product:", error);
      set({error: "Failed to fetch product details.", currentProduct: null});
    }finally{
      set({loading: false})
    }
  },

  //Update a product by ID
  updateAProduct: async(id) =>{
    set({loading: true})
    try{
      const {formData} = get();
      const response = await axios.put(`${BASE_URL}/api/products/${id}`, formData);
      set({currentProduct: response.data.data});
      toast.success("Product updated successfully!");
    }catch(error){
      console.error("Error updating product:", error);
      toast.error("Failed to update product!");
    }finally{
      set({loading: false})
    }
  },
}));
