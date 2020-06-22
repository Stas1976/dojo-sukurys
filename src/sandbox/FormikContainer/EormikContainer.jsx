import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

import MySelect from "./Select";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    topics: Yup.array()
      .min(3, "Pick at least 3 tags")
      .of(
        Yup.object().shape({
          label: Yup.string().required(),
          value: Yup.string().required(),
        })
      ),
  }),
  mapPropsToValues: (props) => ({
    email: "",
    topics: [],
  }),
  handleSubmit: (values, { setSubmitting }) => {
    const payload = {
      ...values,
      topics: values.topics.map((t) => t.value),
    };
    setTimeout(() => {
      alert(JSON.stringify(payload, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: "MyForm",
});

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <MySelect
        value={values.topics}
        onChange={setFieldValue}
        onBlur={setFieldTouched}
        error={errors.topics}
        touched={touched.topics}
      />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

const MyEnhancedForm = formikEnhancer(MyForm);

export default MyEnhancedForm;
