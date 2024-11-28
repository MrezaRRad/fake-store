import Navbar from "./components/Navbar/Navbar";
import { getProducts } from "./lib/products";
import Product from "./components/Product/Product";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="">
      <nav>
        <Navbar />
        {/* <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul> */}
        <Product product={products[0]} />
      </nav>
    </div>
  );
}
