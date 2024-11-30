import Link from "next/link";
import Product from "../Product/Product";

function ProductList({ products }) {
  //defence from null or undefined input
  if (!products || !products.length || products.length === 0) {
    return;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`product/${product.id}`}
          className="hover:scale-105 transition-transform"
        >
          <Product key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
