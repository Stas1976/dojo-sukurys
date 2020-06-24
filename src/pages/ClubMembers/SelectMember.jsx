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
  // const [groups, setGroups] = useState({});

  useEffect(() => {
    setData(selector);
  }, [selector]);

  const { groups, leveles, members, coaches } = data;
  console.log(coaches);

  return (
    <div>
      <h2>Select member</h2>
      <Formik>
        <Form>
          {/* <FormikControl
            control="select"
            label="Filtruoti pagal Grupę"
            name="group"
            options={groups}
          /> */}
          <Button type="submit">Filtruoti</Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SelectMember;
