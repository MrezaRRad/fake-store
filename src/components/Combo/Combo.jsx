"use client";

function Combo(props) {
  const { options, onFilterProduct, selectedCategory } = props;

  function handleChangeOption(event) {
    onFilterProduct(event.target.value, "category");
  }

  if (!options) return null;

  return (
    <div>
      <label className="px-5">Select Category</label>
      <select
        className="p-2 focus:ring-0"
        onChange={(event) => handleChangeOption(event)}
        value={selectedCategory}
      >
        <option value={"All"}>All Products</option>
        {options.map((option) => (
          <option key={Math.random()}>{option}</option>
        ))}
      </select>
    </div>
  );
}

export default Combo;
