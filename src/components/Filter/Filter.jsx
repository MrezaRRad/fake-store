import Input from "../Input/Input";
import Combo from "../Combo/Combo";

function Filter(props) {
  const { allCategories, category, handleFilterProducts } = props;
  return (
    <div className="flex flex-col h-auto py-5 w-full bg-gray-100 shadow-md justify-center items-center gap-5 md:flex-row ">
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
    </div>
  );
}

export default Filter;
