import * as Yup from "yup";

export const joinValidation = Yup.object({
  fullName: Yup.string().required("join.errors.required"),
  cin: Yup.string().required("join.errors.required"),
  dob: Yup.date().required("join.errors.required"),
  gender: Yup.string().required("join.errors.required"),
  email: Yup.string()
    .email("join.errors.email")
    .required("join.errors.required"),
  phone: Yup.string().required("join.errors.required"),
  org: Yup.string().required("join.errors.required"),
  position: Yup.string().required("join.errors.required"),
  interest: Yup.string().required("join.errors.required"),
  office: Yup.string().required("join.errors.required"),
  motivation: Yup.string().required("join.errors.required"),
  password: Yup.string()
    .min(6, "join.errors.passwordLength")
    .required("join.errors.required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "join.errors.passwordMatch")
    .required("join.errors.required"),
  agreePolicy: Yup.bool().oneOf([true], "join.errors.policy"),
});
