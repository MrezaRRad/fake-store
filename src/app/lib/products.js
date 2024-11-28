const productsUrl = "https://fakestoreapi.com/products";

export async function getProducts() {
  const products = (await fetch(productsUrl).then((data) => data)).json(
    (data) => data
  );

  return products;
}
