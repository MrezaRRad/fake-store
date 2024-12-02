import Image from "next/image";
import { toFarsiNumber } from "@/Util/Util";
import { useLocale, useTranslations } from "next-intl";

function Product({ product }) {
  const locale = useLocale();
  const t = useTranslations("Filter");

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
      className="min-h-full min-w-full flex justify-center p-2 bg-white rounded-xl text-gray-800 shadow-l border-l-4 border-b-4 border-gray-100 "
    >
      <Image
        src={image}
        alt={title}
        width={150}
        height={50}
        style={{ maxWidth: "150px", minHeight: "80px" }}
      />
      <div className="flex flex-col content-between justify-between p-3">
        <div>
          <h3 className="text-l font-bold text-lg">{shortTitle.join(" ")}</h3>
          <div className="flex flex-col text-lg mt-2">
            <div>{shortDesc.join(" ")} ...</div>
          </div>
        </div>
        <div>
          <div className="mt-2 -mx-1 w-min truncate ">
            <p
              className={`rounded-full font-bold text-sm px-2 ${categoryBg} opacity-70`}
            >
              {t(category)}
            </p>
          </div>
          <div className="mt-3 -mb-2 flex justify-between text-lg font-semibold">
            <div>
              {locale === "en" ? "$ " + price : toFarsiNumber(price) + " دلار"}
            </div>
            ({locale === "en" ? rating.count : toFarsiNumber(rating.count)}){" "}
            {locale === "en" ? rating.rate : toFarsiNumber(rating.rate)}⭐
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
