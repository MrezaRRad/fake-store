import Input from "../Input/Input";
import Combo from "../Combo/Combo";

function Filter(props) {
  const { allCategories, category, handleFilterProducts } = props;
  return (
    <section className="flex flex-col h-auto py-5 w-full bg-gray-100 shadow-md justify-center items-center text-base font-semibold gap-5 md:flex-row ">
      <Combo
        options={allCategories}
        onFilterProduct={handleFilterProducts}
        selectedCategory={category}
      />
      <Input
        type="range"
        min={0}
        max={1000}
        onFilterProduct={handleFilterProducts}
      />
    </section>
  );
}

export default Filter;
