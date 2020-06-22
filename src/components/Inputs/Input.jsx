import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const Input = ({ label, name, today, ...rest }) => {
  return (
    <div className="inputs">
      <label className="inputs__label" htmlFor={name}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        {...rest}
        className={
          rest.type === "date"
            ? "inputs__custom inputs__custom--date"
            : "inputs__custom inputs__custom--text"
        }
      />
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default Input;
