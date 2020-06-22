import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  useFirestore,
  useFirebase,
  useFirestoreConnect,
} from "react-redux-firebase";
import { useSelector } from "react-redux";
import { useRouteMatch, useHistory } from "react-router-dom";

import { FS_COACH } from "../../constants/fireStoreColections";
import { COACHES_LIST } from "../../constants/routes";

import {
  FormikControl,
  Button,
  PopUp,
  PhotoInput,
  Modal,
} from "../../components";

import {
  statusOptions,
  adminOptions,
  levels,
  coachValidationSchema,
} from "../../db";
import cuid from "cuid";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  mail: "",
  status: "",
  level: "",
  adminStatus: "",
};

const NewCoach = () => {
  const [popUp, setPopUp] = useState(false);
  const [files, setFile] = useState([]);
  const [name, setName] = useState("");
  const [userStatus, setStatus] = useState("");
  const firestore = useFirestore();
  const firebase = useFirebase();
  const selector = useSelector((state) => state.firestore.ordered);
  const matchPath = useRouteMatch();
  const [showModal, setModalState] = useState(false);
  const history = useHistory();

  useEffect(() => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  useFirestoreConnect({ collection: FS_COACH });

  let memberForUpdate, userPhotoLink;

  if (matchPath.params.id && selector?.coaches) {
    memberForUpdate = selector?.coaches.filter(
      (coach) => coach.id === matchPath.params.id
    );

    if (memberForUpdate[0]?.userPhoto) {
      userPhotoLink = memberForUpdate[0].userPhoto;
    }
  }

  const onDeleteUser = (collection, doc) => {
    firebase.deleteFile(
      `${FS_COACH}/${matchPath.params.id}/${memberForUpdate[0].firstName}`
    );
    firestore
      .delete({ collection: collection, doc: doc })
      .then(() => {
        history.push(COACHES_LIST);
        console.log("Doc deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="coaches">
      <div className="coaches__link">
        <Link to={COACHES_LIST} className="coaches__link--link">
          <h3 className="coaches__link--header">Grįžti atgal </h3>
        </Link>
      </div>
      <h3> Sukurti Naujo Trėnerio Paskyrą</h3>
      <Formik
        initialValues={matchPath.params.id ? memberForUpdate[0] : initialValues}
        enableReinitialize
        validationSchema={coachValidationSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const coachPath = cuid();
          const storagePhotoPath = `/${FS_COACH}/${coachPath}`;
          let downloadUrl = null;
          let uploadedFile = null;

          setName(values.firstName);
          setStatus(values.status);
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
                { collection: FS_COACH, doc: matchPath.params.id },
                values
              )
              .then(() => {
                console.log("coach updated");
                history.push(COACHES_LIST);
              })
              .catch((error) => console.log(error));
          } else {
            firestore
              .set({ collection: FS_COACH, doc: coachPath }, values)
              .then(() => {
                console.log("New coach created");
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
                name="phone"
                type="phone"
                placeholder="Telefono numeris"
              />
              <FormikControl
                control="input"
                label="El. paštas"
                name="mail"
                type="email"
                placeholder="El. paštas"
              />
              <FormikControl
                control="select"
                label="Lygis"
                name="level"
                options={levels}
              />
              <FormikControl
                control="radio"
                label="Statusas"
                name="status"
                options={statusOptions}
              />
              <FormikControl
                control="radio"
                label="Suteikti admino teisės"
                name="adminStatus"
                options={adminOptions}
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
                  Ištrinti duomenys
                </Button>
              )}
            </Form>
          );
        }}
      </Formik>
      {matchPath.params.id ? (
        <PopUp popUp={popUp} setPopUp={setPopUp}>
          {userStatus} <span style={{ color: "green" }}>{name}</span> profilis
          atnaujintas
        </PopUp>
      ) : (
        <PopUp popUp={popUp} setPopUp={setPopUp}>
          {userStatus} <span style={{ color: "green" }}>{name}</span> profilis
          sukurtas
        </PopUp>
      )}
      <Modal showModal={showModal}>
        <h2 className="modal__header">Ar tikrai noritė ištrinti kortėlę?</h2>

        <Button
          warning
          onClick={() => onDeleteUser(FS_COACH, matchPath.params.id)}
        >
          Taip ištrinti
        </Button>
        <Button onClick={() => setModalState(false)}>Ne </Button>
      </Modal>
    </div>
  );
};

export default NewCoach;
