import { useProductStore } from "../store/useProductStore";
import { useEffect } from "react";

function HomePage() {

  const {products, loading, error, fetchProducts} = useProductStore();

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts]);

  console.log(products)

  return <div>HomePage</div>;
}

export default HomePage;
