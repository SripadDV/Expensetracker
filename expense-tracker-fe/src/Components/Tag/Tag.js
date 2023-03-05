import React from "react";

const Tag = (props) => {
  const upliftTag = props.upliftTag;
  const tag = props.tag;
  const handleTagChange = (e) => {
    upliftTag(e.target.value);
  };
  return (
    <div
      style={{
        /*border: "1px solid",*/
        boxSizing: "border-box",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "flex-start",
        marginRight: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Tag Search"
        style={{ height: "20px" }}
        onChange={handleTagChange}
        value={tag}
      />
    </div>
  );
};

export default Tag;
