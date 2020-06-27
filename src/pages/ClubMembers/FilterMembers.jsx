import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_MEMBERS,
  FS_COACH,
  FS_GROUPS,
  FS_LEVELS,
} from "../../constants/fireStoreColections";
import { Formik, Form } from "formik";
import { FormikControl, Button } from "../../components";
import { filtersValidationSchema } from "../../db/validatioSchema";
import { MEMEBER_FILTER } from "../../redux/types";

const initialValues = {
  group: "",
  level: "",
  coach: "",
};

const SelectMember = () => {
  const selector = useSelector((state) => state.firestore.ordered);
  useFirestoreConnect({ collection: FS_GROUPS });
  useFirestoreConnect({ collection: FS_MEMBERS });
  useFirestoreConnect({ collection: FS_LEVELS });
  useFirestoreConnect({ collection: FS_COACH });
  const [data, setData] = useState({});
  const [groupsFs, setGroups] = useState([]);
  const [coachFs, setCoaches] = useState([]);
  const [levelsFs, setLevel] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(selector);

    const { groups, levels } = data;

    if (groups) {
      setGroups(
        groups.map((group) => {
          return {
            value: group.id,
            label: `${group.gym} ${group.coach} ${group.group} `,
          };
        })
      );
    }
    if (levels) {
      setLevel(
        levels.map((level) => {
          return {
            value: level.id,
            label: `${level.label}`,
          };
        })
      );
    }
    if (selector?.coaches) {
      setCoaches(
        selector.coaches.map((coach) => {
          return {
            value: coach.id,
            label: `${coach.firstName} ${coach.lastName}`,
          };
        })
      );
    }
  }, [selector]);

  if (groupsFs && coachFs && levelsFs) {
    return (
      <div className="u-form">
        <Formik
          initialValues={initialValues}
          validationSchema={filtersValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch({ type: MEMEBER_FILTER, payload: values });
          }}
        >
          <Form>
            <FormikControl
              control="select"
              label="Grupę"
              name="group"
              options={groupsFs}
            />
            <FormikControl
              control="select"
              label="Lygį"
              name="level"
              options={levelsFs}
            />
            <FormikControl
              control="select"
              label="Trenerį"
              name="coach"
              options={coachFs}
            />
            <Button type="submit">Filtruoti</Button>
          </Form>
        </Formik>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default SelectMember;
