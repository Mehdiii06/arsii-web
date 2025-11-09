import * as Yup from "yup";

export const joinValidationSchema = Yup.object().shape({
  fullName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Too short").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  agreePolicy: Yup.boolean().oneOf(
    [true],
    "You must accept the privacy policy"
  ),
});
