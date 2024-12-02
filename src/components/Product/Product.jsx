import Image from "next/image";

function Product({ product }) {
  //destructure props and products for sake of simplicity
  const { id, title, price, description, category, image, rating } = product;

  //make description shorter for better user experience
  const shortDesc = description.split(" ", 12);
  const shortTitle = title.split(" ", 6);

  //conditional styles for categories
  let categoryBg;

  switch (category) {
    case "men's clothing":
      categoryBg = "bg-sky-300";
      break;
    case "jewelery":
      categoryBg = "bg-amber-300";
      break;
    case "electronics":
      categoryBg = "bg-purple-300";
      break;
    case "women's clothing":
      categoryBg = "bg-pink-300";
      break;
    default:
      categoryBg = "bg-green-300";
      break;
  }

  return (
    <div
      key={id}
      className="w-fit sm: flex justify-center content-center m-5 p-2 bg-white rounded-2xl text-gray-800 shadow-l border-l-4 border-blue-300 xl: h-full"
    >
      <Image
        src={image}
        alt={title}
        width={"100"}
        height={"100"}
        style={{ maxWidth: "120px", maxheight: "100px" }}
      />
      <div className="flex flex-col content-between justify-between p-3">
        <div>
          <h3 className="text-l">{shortTitle.join(" ")}</h3>
          <div className="flex flex-col text-sm mt-2">
            <div>{shortDesc.join(" ")} ...</div>
          </div>
        </div>
        <div>
          <div className="mt-2 -mx-1 w-min truncate">
            <p className={`rounded-full  text-sm px-2 ${categoryBg}`}>
              {category}
            </p>
          </div>
          <div className="mt-3 -mb-2 flex justify-between ">
            <div>${price}</div>({rating.count}) {rating.rate}⭐
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
