import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import {
  FS_MEMBERS,
  FS_COACH,
  FS_GROUPS,
  FS_LEVELS,
} from "../../../constants/fireStoreColections";
import { Formik, Form } from "formik";
import { FormikControl, Button } from "../../../components";
import { filtersValidationSchema } from "../../../db/validatioSchema";
import { MEMEBER_FILTER, CLEAR_FILTERS } from "../../../redux/types";
import ClearFiltersValue from "./ClearFiltersValue";
import ActiveFilterValues from "./ActiveFilterValues";

const initialValues = {
  group: "",
  level: "",
  coach: "",
};

const FiltersForm = () => {
  const selector = useSelector((state) => state.firestore.ordered);
  const memberFilter = useSelector((state) => state.reducers.memberFilter);
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

    const { groups } = data;

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
    if (selector?.levels) {
      setLevel(
        selector.levels.map((level) => {
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

  const { level, coach, group } = memberFilter;

  if (groupsFs && coachFs && levelsFs) {
    return (
      <div className="u-form filters">
        <Formik
          initialValues={initialValues}
          validationSchema={filtersValidationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            dispatch({ type: MEMEBER_FILTER, payload: values });
            resetForm();
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
            <div className="filter__btn-block ">
              <Button type="submit">Filtruoti</Button>
              {group || level || coach ? <ClearFiltersValue /> : null}
              {group || level || coach ? <ActiveFilterValues /> : null}
            </div>
          </Form>
        </Formik>
      </div>
    );
  }
  return <div>Loading...</div>;
};

export default FiltersForm;
