import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

// class MySelect extends React.Component {
//   // handleChange = (value) => {
//   //   // this is going to call setFieldValue and manually update values.topcis
//   //   this.props.onChange("topics", value);
//   // };

//   render() {
//     const { name, label, options } = this.props;
//     console.log(this.props);
//     return (
//       <div className="inputs">
//         <label htmlFor={name} className="inputs__label">
//           {label}{" "}
//         </label>
//         <Select
//           className="inputs__select "
//           id="color"
//           options={options}
//           multi={true}
//           // onChange={this.handleChange}
//           value={this.props.value}
//         />
//         <ErrorMessage component={ErrorText} name={name} />
//       </div>
//     );
//   }
// }

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div className="inputs">
      <label htmlFor={name} className="inputs__label">
        {label}
      </label>
      <div className="inputs__select ">
        <Field
          as="select"
          className="inputs__select-custom "
          id={name}
          name={name}
          {...rest}
        >
          {options.map((option) => {
            return (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            );
          })}
        </Field>
      </div>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default Select;
