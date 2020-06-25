import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_MEMBERS,
  FS_COACH,
  FS_GROUPS,
  FS_LEVELS,
} from "../../constants/fireStoreColections";
import { Formik, Form } from "formik";
import { FormikControl, Button } from "../../components";

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
        <h2>Filtrai</h2>
        <Formik
          initialValues={{
            groups: "",
            levels: "",
            coach: "",
          }}
        >
          <Form>
            <FormikControl
              control="select"
              label="Grupė"
              name="groups"
              options={groupsFs}
            />
            <FormikControl
              control="select"
              label="Lygis"
              name="levels"
              options={levelsFs}
            />
            <FormikControl
              control="select"
              label="Treneris"
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
