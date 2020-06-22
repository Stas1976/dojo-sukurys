import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useFirestoreConnect } from "react-redux-firebase";
import { Spinner, FormikControl, Button } from "../../../components";
import { Formik, Form } from "formik";

const initialValues = {
  trainDate: "",
  participants: [],
};

const Group = () => {
  const selector = useSelector((state) => state.firestore.ordered);
  const matchPath = useRouteMatch();
  useFirestoreConnect({ collection: "groups", doc: matchPath.params.id });
  useFirestoreConnect({ collection: "members" });

  let today = new Date().toISOString().substr(0, 10);

  if (selector?.groups && selector?.members) {
    const newArr = selector.members.map((member) => {
      return {
        label: `${member.firstName} ${member.lastName}`,
        value: member.id,
      };
    });
    return selector.groups.map((gr) => (
      <div className="group" key={gr.id}>
        <h3>Treneris: {gr.coach}</h3>
        <h3>Salė: {gr.gym}</h3>
        <h3>Grupė: {gr.group}</h3>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  label="Treniruotės data"
                  name="trainDate"
                  type="date"
                  today={today}
                  key={today}
                />
                <FormikControl
                  control="checkbox"
                  label="Dalivavo"
                  name="participants"
                  options={newArr}
                />
                <Button type="submit">Submi</Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    ));
  }

  return <Spinner />;
};

export default Group;
