import "@/app/globals.css";

import Navbar from "@/components/Navbar/Navbar";

import { useRouter } from "next/router";
import { getProduct } from "@/lib/WebService";
import { useEffect, useState } from "react";
import Image from "next/image";

function ProductPage() {
  //getting productId from query string by useRouter hook
  const { id } = useRouter().query;
  const [product, setProduct] = useState();

  useEffect(() => {
    const getProductInfo = async () => {
      if (id) {
        const response = await getProduct(id);

        if (!response) throw new Error("There is a problem");

        setProduct(response);
      } else return;
    };

    getProductInfo();
  }, [id, setProduct]);

  if (!product) return <p>Wait please...</p>;

  return (
    <div>
      <Navbar />
      <div className="h-full w-full flex flex-col justify-center items-center md:flex-row">
        <div className="m-10">
          <Image
            src={product.image}
            width={200}
            height={200}
            alt={product.title}
          />
        </div>
        <div className="mx-5">
          <h2 className="font-bold">{product.title}</h2>
          <p className="mt-3">{product.description}</p>
          <p className="mt-2">Price: $ {product.price}</p>
          <p className="mt-0">
            Rate: {product.rating.rate} Count: {product.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
