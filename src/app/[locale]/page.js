"use client";

import { Suspense, useEffect, useRef, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import ProductList from "../../components/ProductList/ProductList";

import { getCategories, getProducts } from "../../lib/WebService";
import Filter from "@/components/Filter/Filter";
import Loading from "@/components/Loading/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(1000);
  const [isLoading, setIsLoading] = useState(true);

  //use useRef for keep allProducts unmutable during page lifecycles
  const allProducts = useRef();
  const allCategories = useRef();

  useEffect(() => {
    async function getData(params) {
      try {
        const productsResponse = await getProducts();
        const categoriesResponse = await getCategories();

        //defence against null or undefined input
        if (
          !productsResponse ||
          !productsResponse.length ||
          productsResponse.length === 0 ||
          productsResponse.errorCode ||
          !categoriesResponse ||
          !categoriesResponse.length ||
          categoriesResponse.length === 0 ||
          categoriesResponse.errorCode
        ) {
          throw new Error("Check your internet connection!!");
        }

        //set allProducts reference to products webservice result
        allProducts.current = productsResponse;
        allCategories.current = categoriesResponse;

        //set data to state
        setProducts(productsResponse);
        setCategories(categoriesResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, []);

  function handleFilterProducts(value, type) {
    let filteredProducts;

    if (type === "category") {
      if (value === "All") {
        //if all products selected
        filteredProducts = allProducts.current.filter(
          (product) => product.price <= price
        );
      } else {
        filteredProducts = allProducts.current.filter(
          (product) => product.category === value && product.price <= price
        );
      }
      setCategory(value);
    }

    if (type === "price") {
      setPrice(+value);
      if (category === "All")
        filteredProducts = allProducts.current.filter(
          (product) => product.price < +value
        );
      else {
        filteredProducts = allProducts.current.filter(
          (product) => product.price < +value && product.category === category
        );
      }
    }

    setProducts(filteredProducts);
  }

  if (!products || isLoading) return <Loading />;

  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <Filter
          allCategories={allCategories.current}
          category={category}
          handleFilterProducts={handleFilterProducts}
        />
        <ProductList products={products} />
      </main>
    </div>
  );
}
