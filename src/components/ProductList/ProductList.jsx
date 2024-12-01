import Link from "next/link";
import Product from "../Product/Product";
import { useLocale } from "next-intl";

function ProductList({ products }) {
  const activeLocal = useLocale();

  //defence from null or undefined input
  if (!products || !products.length || products.length === 0) {
    return;
  }

  return (
    <div className="w-11/12 flex justify-center items-center">
      <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/${activeLocal}/product/${product.id}`}
            className="hover:scale-105 transition-transform"
          >
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
