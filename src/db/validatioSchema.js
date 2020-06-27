import * as Yup from "yup";

export const memberValidationSchema = Yup.object({
  firstName: Yup.string().required("Privalomas laukelis"),
  lastName: Yup.string().required("Privalomas laukelis"),
  phoneNr: Yup.string(),
  email: Yup.string().email("blogai įvestas adresas: pavizdys@mail.com"),
  coachName: Yup.string(),
  address: Yup.string(),
  fee: Yup.string(),
  birthday: Yup.string(),
  startTrain: Yup.string(),
  group: Yup.string(),
  level: Yup.string(),
});

export const coachValidationSchema = Yup.object({
  firstName: Yup.string().required("Privalomas laukelis"),
  lastName: Yup.string().required("Privalomas laukelis"),
  phone: Yup.string(),
  mail: Yup.string().email("blogai įvestas adresas: pavizdys@mail.com"),
  status: Yup.string(),
  level: Yup.string(),
  adminStatus: Yup.string(),
});

export const filtersValidationSchema = Yup.object({
  group: Yup.string(),
  level: Yup.string(),
  coach: Yup.string(),
});
