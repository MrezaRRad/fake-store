import Image from "next/image";

function Product({ product }) {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div
      key={id}
      className="sm:w-1/2 h-1/4 flex flex-column justify-center content-center"
    >
      <Image
        src={image}
        alt={title}
        width={"0"}
        height={"0"}
        style={{ width: "100%", height: "20%" }}
      />
      {title}
      {description}
      {category}
      <div>
        {price}
        {rating.rate}
        {rating.count}
      </div>
    </div>
  );
}

export default Product;
