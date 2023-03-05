import React, { useState } from "react";

const Category = (props) => {
  const categories = props.categories;
  const upliftCategory = props.upliftCategory;
  //const [category, setCategory] = useState(props.category);
  const category = props.category;

  const handleCategory = (e) => {
    //console.log(e.target.value);
    //setCategory(e.target.value);
    upliftCategory(e.target.value);
  };
  return (
    <div
      style={{
        /*border: "1px solid",*/
        width: "250px",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
      }}
    >
      <select
        onChange={handleCategory}
        style={{ width: "100px", height: "24px", fontSize: "medium" }}
        value={category}
        placeholder="Category"
      >
        <option value={"Category"}>Category</option>
        {categories.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default Category;
