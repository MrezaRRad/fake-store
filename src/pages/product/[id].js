import { useRouter } from "next/router";

function ProductPage({ params }) {
  const { id } = useRouter().query;

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
}

export default ProductPage;
