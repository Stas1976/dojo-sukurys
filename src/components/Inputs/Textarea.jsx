import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const TextAreaInput = ({ label, name, rows, ...rest }) => {
  return (
    <div className="inputs">
      <label className="inputs__label" htmlFor={name}>
        {label}
      </label>
      <Field
        as="textarea"
        id={name}
        name={name}
        rows={rows}
        {...rest}
        autoComplete="Off"
        className="inputs__custom inputs__custom--textarea"
      />
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default TextAreaInput;
