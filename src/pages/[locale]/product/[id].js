import "@/app/[locale]/globals.css";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";

import Navbar from "@/components/Navbar/Navbar";

import { useRouter } from "next/router";
import { getProduct } from "@/lib/WebService";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ProductPage() {
  //getting productId from query string by useRouter hook
  const router = useRouter();

  const { id } = router.query;
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
      <div className="h-full w-full flex flex-col justify-center items-center md:flex-row">
        <div className=" m-10 xl:w-1/4">
          <Image
            src={product.image}
            width={250}
            height={250}
            alt={product.title}
          />
        </div>
        <div className="mx-5 xl:h-3/4 ">
          <h2 className="font-bold">{product.title}</h2>
          <p className="mt-3">{product.description}</p>
          <p className="mt-2">Price: $ {product.price}</p>
          <p className="mt-0">
            Rate: {product.rating.rate} Count: {product.rating.count}
          </p>
        </div>
      </div>
      <div className="flex w-full justify-end">
        <button
          className="p-4 mr-10 bg-slate-400 rounded-lg text-slate-50"
          onClick={() => router.replace("/")}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
