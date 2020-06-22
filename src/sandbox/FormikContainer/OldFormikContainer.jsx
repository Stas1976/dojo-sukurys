import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./FormikControl";

function FormikContainer() {
  const dropdownOptions = [
    { key: "Select an option", value: "" },
    { key: "Option 1", value: "option1" },
    { key: "Option 2", value: "option2" },
    { key: "Option 3", value: "option3" },
  ];
  const radioOptions = [
    { key: "Option 1", value: "rOption1" },
    { key: "Option 2", value: "rOption2" },
    { key: "Option 3", value: "rOption3" },
  ];
  const checkboxOptions = [
    { key: "Option 1", value: "cOption1" },
    { key: "Option 2", value: "cOption2" },
    { key: "Option 3", value: "cOption3" },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectOption: "",
    radioOption: "",
    checkboxOption: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    // email: Yup.string().required("Required"),
    // description: Yup.string().required("Required"),
    selectOption: Yup.string().required("Required"),
    // radioOption: Yup.string().required("Required"),
    // checkboxOption: Yup.array().required("Required"),
    // birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
  };

  const mapPropsToValues = (props) => ({
    topics: [],
  });

  return (
    <Formik
      className="u-form"
      style={{ fontSize: "2rem" }}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      mapPropsToValues={mapPropsToValues}
      // setFieldValue={setFieldValue}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form>
            <FormikControl
              control="select"
              // value={formik.values.topics}
              label="Select a topic"
              name="selectOption"
              options={dropdownOptions}
              // onChange={formik.setFieldValue}
              // onBlure={formik.onBlure}
            />
            {/* <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
  
            <FormikControl
              control="textarea"
              label="Description"
              name="description"
            /> */}
            {/* <FormikControl
            control="radio"
            label="Radio topic"
            name="radioOption"
            options={radioOptions}
          />
          <FormikControl
            control="checkbox"
            label="Checkbox topics"
            name="checkboxOption"
            options={checkboxOptions}
          /> */}
            {/* <FormikControl control="date" label="Pick a date" name="birthDate" /> */}
            <button style={{ padding: "1rem" }} type="submit">
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormikContainer;
