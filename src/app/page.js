import Navbar from "./components/Navbar/Navbar";
import { getProducts } from "./lib/products";
import ProductList from "./components/ProductList/ProductList";
export default async function Home() {
  const products = await getProducts();

  return (
    <div className="overflow-x-hidden">
      <nav>
        <Navbar />
        <ProductList products={products} />
      </nav>
    </div>
  );
}
