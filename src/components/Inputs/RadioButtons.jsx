import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div className="inputs ">
      <label>{label}</label>

      <div className="inputs__radioBtn">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.key}>
                  <input
                    className="inputs__radioBtn--btn"
                    type="radio"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}>{option.key}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
};

export default RadioButtons;
