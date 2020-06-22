import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import cuid from "cuid";
import {
  useFirestore,
  useFirebase,
  useFirestoreConnect,
} from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";

import {
  FS_MEMBERS,
  FS_COACH,
  FS_GROUPS,
} from "../../constants/fireStoreColections";
import { coaches, memberValidationSchema, group } from "../../db";

import {
  Button,
  PopUp,
  PhotoInput,
  FormikControl,
  Modal,
} from "../../components";

let initialValues = {
  firstName: "",
  lastName: "",
  phoneNr: "",
  email: "",
  coachName: "",
  address: "",
  fee: "",
  birthday: "",
  startTrain: "",
  group: "",
};

const NewMemberForm = (props) => {
  const [popUp, setPopUp] = useState(false);
  const [files, setFile] = useState([]);
  const [name, setName] = useState("");
  const [firestoreGroups, setFirestoreGroups] = useState([]);
  const [showModal, setModalState] = useState(false);

  const firestore = useFirestore();
  const firebase = useFirebase();
  const selector = useSelector((state) => state.firestore.ordered);
  const matchPath = useRouteMatch();
  const history = useHistory();

  useFirestoreConnect({ collection: FS_MEMBERS });
  useFirestoreConnect({ collection: FS_COACH });
  useFirestoreConnect({ collection: FS_GROUPS });

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  useEffect(() => {
    if (selector?.groups) {
      setFirestoreGroups(
        selector.groups.map((group) => {
          return {
            value: group.id,
            label: `${group.gym} ${group.coach} ${group.group} `,
          };
        })
      );
    }
  }, [selector.groups]);

  let memberForUpdate, userPhotoLink, firestoreCoaches;

  if (matchPath.params.id && selector?.members) {
    memberForUpdate = selector?.members.filter(
      (member) => member.id === matchPath.params.id
    );

    if (memberForUpdate[0]?.userPhoto) {
      userPhotoLink = memberForUpdate[0].userPhoto;
    }
  }

  const onDeleteUser = (collection, doc) => {
    firebase.deleteFile(
      `${FS_MEMBERS}/${matchPath.params.id}/${memberForUpdate[0].firstName}`
    );
    firestore
      .delete({ collection: collection, doc: doc })
      .then(() => {
        history.push("/");
        console.log("Doc deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Formik
        initialValues={matchPath.params.id ? memberForUpdate[0] : initialValues}
        enableReinitialize
        validationSchema={memberValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const memberPathId = cuid();
          const examId = cuid();
          const storagePhotoPath = `/${FS_MEMBERS}/${memberPathId}`;
          let downloadUrl = null;
          let uploadedFile = null;

          setName(values.firstName);
          setPopUp(true);
          setSubmitting(false);
          resetForm({ values: "" });
          setFile([]);

          if (files.length > 0) {
            uploadedFile = await firebase.uploadFile(
              storagePhotoPath,
              files[0],
              null,
              {
                name: values.firstName,
              }
            );

            downloadUrl = await uploadedFile.uploadTaskSnapshot.ref.getDownloadURL();
            values.userPhoto = downloadUrl;
          }

          if (matchPath.params.id) {
            firestore
              .update(
                { collection: FS_MEMBERS, doc: matchPath.params.id },
                values
              )
              .then(() => {
                console.log("Member updated");
              })
              .catch((error) => console.log(error));
          } else {
            values.exam = [
              {
                level: { label: "naujokas", value: "naujokas" },
                examId,
                comments: "Naujokas",
              },
            ];

            firestore
              .set({ collection: FS_MEMBERS, doc: memberPathId }, values)
              .then(() => {
                console.log("New member created");
              })
              .catch((error) => console.log(error));
          }
          setTimeout(() => {
            setPopUp(false);
            setName("");
          }, 1500);
        }}
      >
        {(formik) => {
          return (
            <Form className="u-form">
              <PhotoInput
                files={files}
                setFile={setFile}
                userPhotoLink={userPhotoLink}
              />
              <FormikControl
                control="input"
                label="Vardas*"
                name="firstName"
                type="text"
                placeholder="Vardas"
              />
              <FormikControl
                control="input"
                label="Pavardė*"
                name="lastName"
                type="text"
                placeholder="Pavardė"
              />
              <FormikControl
                control="input"
                label="Telefono nr."
                name="phoneNr"
                type="phone"
                placeholder="Telefono numeris"
              />
              <FormikControl
                control="input"
                label="El. paštas"
                name="email"
                type="email"
                placeholder="El. paštas"
              />
              <FormikControl
                control="textarea"
                label="Adresas"
                name="address"
                type="text"
                placeholder="Adresas"
                rows={3}
              />
              <FormikControl
                control="select"
                label="Treneris"
                name="coachName"
                options={coaches}
              />
              <FormikControl
                control="select"
                label="Grupė"
                name="group"
                options={firestoreGroups}
              />
              <FormikControl
                control="input"
                label="Pradėjo lankyti"
                name="startTrain"
                type="date"
              />
              <FormikControl
                control="input"
                label="Gimimo data"
                name="birthday"
                type="date"
              />

              <FormikControl
                control="input"
                name="fee"
                type="text"
                label="Mokėstis už treniruotės"
                placeholder="Mokėstis už treniruotės"
              />
              <Button type="submit" disabled={!formik.isValid}>
                {" "}
                Patvirtinti{" "}
              </Button>
              {matchPath.params.id && (
                <Button
                  warning
                  type="button"
                  onClick={() => setModalState(true)}
                >
                  Ištrinti nario duomenys
                </Button>
              )}
            </Form>
          );
        }}
      </Formik>
      {matchPath.params.id ? (
        <PopUp popUp={popUp} setPopUp={setPopUp}>
          Nario <span style={{ color: "green" }}>{name}</span> profilis
          Atnaujintas
        </PopUp>
      ) : (
        <PopUp popUp={popUp} setPopUp={setPopUp}>
          Nario <span style={{ color: "green" }}>{name}</span> profilis sukurtas
        </PopUp>
      )}
      <Modal showModal={showModal}>
        <h2 className="modal__header">
          Ar tikrai noritė ištrinti nario kortėlę?
        </h2>

        <Button
          warning
          onClick={() => onDeleteUser(FS_MEMBERS, matchPath.params.id)}
        >
          Taip ištrinti
        </Button>
        <Button onClick={() => setModalState(false)}>Ne </Button>
      </Modal>
    </>
  );
};

export default NewMemberForm;
