import React from "react";
// import FormikContainer from "./FormikContainer/EormikContainer";
import Forms from "./Forms";
const arr = [
  { name: "Stas", lastName: "AAA", age: "12", phone: "123456" },
  { name: "Vika", lastName: "BBB", age: "13", phone: "123456" },
  { name: "Sveta", lastName: "SSS", age: "14", phone: "123456" },
];

const sandbox = () => {
  return (
    <div className="u-font">
      <h2>Sandbox</h2>
      {arr.map((item) => (
        <Forms key={item.name} {...item} />
      ))}
    </div>
  );
};

export default sandbox;
