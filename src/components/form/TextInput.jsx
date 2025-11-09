import { Field, ErrorMessage } from "formik";
import { useI18n } from "../../lib/I18nProvider";
import { Calendar } from "lucide-react";

export default function TextInput({
  name,
  labelKey,
  placeholderKey,
  type = "text",
}) {
  const { t } = useI18n();

  return (
    <div className="field">
      {labelKey && <label htmlFor={name}>{t(labelKey)}</label>}
      <div className="input-wrap">
        <Field
          id={name}
          name={name}
          type={type}
          placeholder={placeholderKey ? t(placeholderKey) : ""}
        />
        {type === "date" && <Calendar className="input-icon" />}
      </div>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}
