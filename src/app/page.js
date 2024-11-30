import Navbar from "../components/Navbar/Navbar";
import { getProducts } from "../lib/WebService";
import ProductList from "../components/ProductList/ProductList";

export default async function Home() {
  const products = await getProducts();

  //defence from null or undefined input
  if (
    !products ||
    !products.length ||
    products.length === 0 ||
    products.errorCode
  ) {
    return <p>Check your internet connection!!</p>;
  }

  return (
    <div className="overflow-hidden">
      <nav>
        <Navbar />
        <ProductList products={products} />
      </nav>
    </div>
  );
}
