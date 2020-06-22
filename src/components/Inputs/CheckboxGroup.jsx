import React from "react";
import { Field, ErrorMessage } from "formik";
import ErrorText from "./ErrorText";

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div className="inputs">
      <label>{label}</label>
      <div className="inputs__checkbox">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <div key={option.label}>
                  <input
                    className="inputs__checkbox--box"
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    // checked={field.value.includes(option.value)}
                  />
                  <label htmlFor={option.value}>{option.label}</label>
                </div>
              );
            });
          }}
        </Field>
      </div>
      <ErrorMessage component={ErrorText} name={name} />
    </div>
  );
}

export default CheckboxGroup;
