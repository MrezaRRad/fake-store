"use client";

import "@/app/[locale]/globals.css";

import { useRouter } from "next/navigation";
import { getProduct } from "@/lib/WebService";
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from "@/components/Loading/Loading";
import { useTranslations } from "next-intl";
import { useLocale } from "use-intl";
import { toFarsiNumber } from "@/Util/Util";

function ProductPage({ params }) {
  const t = useTranslations("Product");

  const locale = useLocale();

  //use useRouter hook for redirecting user to the homepage
  const router = useRouter();

  //getting productId from query string
  const { slug: id } = params;
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProductInfo = async () => {
      if (id) {
        const response = await getProduct(id);

        if (!response) throw new Error("There is a problem");

        setProduct(response);
        setIsLoading(false);
      } else return;
    };

    getProductInfo();
  }, [id, setProduct]);

  function handleReturnHome() {
    const currentPath = window.location.pathname;

    if (currentPath.startsWith("/en")) {
      router.replace("/en");
    }
    if (currentPath.startsWith("/fa")) {
      router.replace("/fa");
    }
  }

  if (!product || isLoading) return <Loading />;

  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className="w-10/12 flex flex-col justify-center items-center mt-10 md:flex-row">
        <div className="flex justify-center items-center m-10 xl:w-1/4">
          <Image
            src={product.image}
            width={250}
            height={250}
            alt={product.title}
          />
        </div>
        <div className="mx-5 xl:h-3/4 text-2xl">
          <h2 className="font-bold text-3xl">{product.title}</h2>
          <p className="mt-3 font-normal ">{product.description}</p>
          <p className="mt-2 font-bold">
            {t("Price")}:{" "}
            {locale === "en"
              ? "$ " + product.price
              : toFarsiNumber(product.price) + " دلار"}
          </p>
          <p className="mt-0 font-bold">
            {t("Rate")}:{" "}
            {locale === "en"
              ? product.rating.rate
              : toFarsiNumber(product.rating.rate)}{" "}
            {t("Count")}:{" "}
            {locale === "en"
              ? product.rating.count
              : toFarsiNumber(product.rating.count)}
          </p>
        </div>
      </div>
      <div className="flex w-10/12 justify-end">
        <button
          className="p-4 mr-10 bg-slate-400 rounded-lg text-slate-50 text-xl font-semibold"
          onClick={handleReturnHome}
        >
          {t("Back")}
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
