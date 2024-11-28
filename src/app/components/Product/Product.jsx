import Image from "next/image";

function Product({ product }) {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div
      key={id}
      className="sm:w-1/2 h-1/4 flex justify-center content-center m-5 p-2 bg-white rounded text-gray-800"
    >
      <Image src={image} alt={title} width={"100"} height={"100"} />
      <div className="flex flex-col p-3">
        <h3 className="text-2xl">{title}</h3>
        <div>
          {description}
          {category}
        </div>
        <div>
          {price}
          {rating.rate}
          {rating.count}
        </div>
      </div>
    </div>
  );
}

export default Product;
