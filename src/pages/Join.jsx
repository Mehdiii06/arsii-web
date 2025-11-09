import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useI18n } from "../lib/I18nProvider";
import bgLanding from "../assets/background-1.png";
import TextInput from "../components/form/TextInput";
import CheckboxGroup from "../components/form/CheckboxGroup";
import SelectField from "../components/form/SelectField";
import RadioGroup from "../components/form/RadioGroup";

export default function Join() {
  const { t } = useI18n();
  const [step, setStep] = useState(0);

  const steps = [
    { id: 0, title: t("join.steps.1") },
    { id: 1, title: t("join.steps.2") },
    { id: 2, title: t("join.steps.3") },
  ];

  console.log("ee=======", steps[step]);
  console.log("ee=======step", step);

  // all form values in one object
  const initialValues = {
    fullName: "",
    cin: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    org: "",
    position: "",
    interest: "",
    linkedin: "",
    office: "",
    motivation: "",
    areas: [],
    otherArea: "",
    password: "",
    confirmPassword: "",
    agreeNews: false,
    agreePolicy: false,
  };

  // validation schema per step
  const validationSchema = [
    // Step 1
    Yup.object({
      fullName: Yup.string().required(t("validation.required")),
      cin: Yup.string().required(t("validation.required")),
      dob: Yup.date().required(t("validation.required")),
      gender: Yup.string().required(t("validation.required")),
      email: Yup.string().email().required(t("validation.required")),
      phone: Yup.string().required(t("validation.required")),
    }),
    // Step 2
    Yup.object({
      org: Yup.string().required(t("validation.required")),
      position: Yup.string().required(t("validation.required")),
      interest: Yup.string().required(t("validation.required")),
      linkedin: Yup.string().url(t("validation.url")).nullable(),
    }),
    // Step 3
    Yup.object({
      office: Yup.string().required(t("validation.required")),
      motivation: Yup.string().required(t("validation.required")),
      areas: Yup.array().min(1, t("validation.selectOne")),
      password: Yup.string().min(6).required(t("validation.required")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], t("validation.passwordMatch"))
        .required(t("validation.required")),
      agreePolicy: Yup.boolean().oneOf([true], t("validation.mustAccept")),
    }),
  ];

  const onSubmit = (values) => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      alert("Submitted ✅ " + JSON.stringify(values, null, 2));
      // TODO: send to API
    }
  };

  return (
    <section className="join" style={{ "--hero-bg": `url(${bgLanding})` }}>
      <div className="heading">
        <h2>{t("join.title")}</h2>
      </div>
      <div className="join__wrap">
        <div className="step_title">{steps[step]?.title}</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema[step - 1]}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className="join__grid">
              {/* --- Step 1: Personal Details --- */}
              {step === 0 && (
                <>
                  <TextInput
                    name="fullName"
                    label={t("join.fullName")}
                    placeholderKey="Full Name"
                  />
                  <TextInput
                    name="email"
                    label={t("join.email")}
                    type="email"
                    placeholderKey="Email"
                  />
                  <TextInput
                    name="cin"
                    label={t("join.cin")}
                    placeholderKey="CIN"
                  />
                  <TextInput
                    name="phone"
                    label={t("join.phone")}
                    placeholderKey="Phone"
                  />
                  <TextInput
                    name="dob"
                    label={t("join.dob")}
                    type="date"
                    placeholderKey="Date of birth"
                  />
                  <RadioGroup
                    name="gender"
                    title="Gender"
                    options={[
                      { value: "male", labelKey: "join.gender.male" },
                      { value: "female", labelKey: "join.gender.female" },
                    ]}
                  />
                </>
              )}

              {/* --- Step 2: Professional / Academic --- */}
              {step === 1 && (
                <>
                  <TextInput name="org" label={t("join.org")} />
                  <TextInput name="position" label={t("join.position")} />
                  <TextInput name="interest" label={t("join.interest")} />
                  <TextInput
                    name="linkedin"
                    label={t("join.linkedin")}
                    placeholder="https://..."
                  />
                </>
              )}

              {/* --- Step 3: ARSII Affiliation & Motivation --- */}
              {step === 2 && (
                <>
                  <SelectField
                    name="office"
                    labelKey={t("join.office")}
                    options={[
                      { value: "tunis", label: t("join.offices.tunis") },
                      { value: "sfax", label: t("join.offices.sfax") },
                      { value: "sousse", label: t("join.offices.sousse") },
                    ]}
                  />
                  <TextInput
                    name="motivation"
                    label={t("join.motivation")}
                    textarea
                    rows={6}
                  />
                  <CheckboxGroup
                    name="areas"
                    label={t("join.areas.label")}
                    options={[
                      { value: "ai", labelKey: "join.areas.ai" },
                      { value: "web", labelKey: "join.areas.web" },
                      { value: "embedded", labelKey: "join.areas.embedded" },
                      { value: "other", labelKey: "join.areas.other" },
                    ]}
                    otherField="otherArea"
                  />
                  <TextInput
                    name="password"
                    label={t("join.password")}
                    type="password"
                  />
                  <TextInput
                    name="confirmPassword"
                    label={t("join.confirmPassword")}
                    type="password"
                  />
                  <div className="field field--checks">
                    <label>
                      <input type="checkbox" name="agreeNews" />
                      {t("join.agreeNews")}
                    </label>
                    <label>
                      <input type="checkbox" name="agreePolicy" />
                      {t("join.agreePolicy")}
                    </label>
                  </div>
                </>
              )}

              {/* --- Step Actions --- */}
              <div className="join__actions">
                {step > 0 && (
                  <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => setStep(step - 1)}
                  >
                    {t("join.back")}
                  </button>
                )}
                <button className="btn-primary" type="submit">
                  {step < 2 ? t("join.next") : t("join.confirm")}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
