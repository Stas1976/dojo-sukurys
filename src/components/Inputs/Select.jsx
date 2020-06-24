import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

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
