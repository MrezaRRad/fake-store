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
      categoryBg = "bg-sky-200";
      break;
    case "jewelery":
      categoryBg = "bg-amber-200";
      break;
    case "electronics":
      categoryBg = "bg-purple-200";
      break;
    case "women's clothing":
      categoryBg = "bg-pink-200";
      break;
    default:
      categoryBg = "bg-green-200";
      break;
  }

  return (
    <div
      key={id}
      className="w-fit flex justify-center m-5 p-2 bg-white rounded-xl text-gray-800 shadow-l border-l-4 border-b-4 border-gray-100 h-full"
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
            <p
              className={`rounded-full  text-sm px-2 ${categoryBg} opacity-70`}
            >
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
