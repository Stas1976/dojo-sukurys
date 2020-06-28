import React from "react";
import CustomHookOne from "./CustomHookOne";
import CustomHookTwo from "./CustomHoocTwo";

// import FormikContainer from "./FormikContainer/EormikContainer";
// import Forms from "./Forms";
// const arr = [
//   { name: "Stas", lastName: "AAA", age: "12", phone: "123456" },
//   { name: "Vika", lastName: "BBB", age: "13", phone: "123456" },
//   { name: "Sveta", lastName: "SSS", age: "14", phone: "123456" },
// ];
// {/* {arr.map((item) => (
//   <Forms key={item.name} {...item} />
// ))} */}

// import Timer from "./Timer";
// import HookTimer from "./HookTimer";

const sandbox = () => {
  return (
    <div className="u-font">
      <h2>Sandbox</h2>

      <CustomHookOne />
      <CustomHookTwo />
    </div>
  );
};

export default sandbox;
