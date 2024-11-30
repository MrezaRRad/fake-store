"use client";

import Navbar from "../components/Navbar/Navbar";
import { getCategories, getProducts } from "../lib/WebService";
import ProductList from "../components/ProductList/ProductList";
import Combo from "@/components/Combo/Combo";
import { useEffect, useRef, useState } from "react";
import Input from "@/components/Input/Input";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(1000);

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

  return (
    <div>
      <nav className="shadow-xl">
        <Navbar />
      </nav>
      <main className="flex flex-col items-center justify-center">
        <div className=" flex gap-5 min-h-24 w-full bg-gray-100 shadow-md justify-center items-center">
          <Combo
            options={allCategories.current}
            onFilterProduct={handleFilterProducts}
            selectedCategory={category}
          />
          <Input
            type="range"
            min={0}
            max={1000}
            onFilterProduct={handleFilterProducts}
          />
        </div>
        <div className="w-11/12 flex justify-center items-center ">
          <ProductList products={products} />
        </div>
      </main>
    </div>
  );
}
