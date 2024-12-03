const baseUrl = "https://fakestoreapi.com/products/";

async function fetchData(apiUrl) {
  let result;

  try {
    const response = await fetch(apiUrl);

    if (!response)
      throw new Error(
        "You have conectivity problem. Check your network connection!"
      );

    switch (response.status) {
      case 200:
        result = response.json();
        break;
      case 404:
        result = {
          errorCode: response.status,
          errorMessage: response.statusText,
        };
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    return result;
  }
}

export function getProducts() {
  const products = fetchData(baseUrl);

  return products;
}

export function getProduct(productId) {
  const productUrl = baseUrl + productId;

  const product = fetchData(productUrl);

  return product;
}

export function getCategories() {
  const productUrl = baseUrl + "categories";

  const categories = fetchData(productUrl);

  return categories;
}
