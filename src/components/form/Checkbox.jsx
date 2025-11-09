import { Field, ErrorMessage } from "formik";
import { useI18n } from "../../lib/I18nProvider";

export default function Checkbox({ name, labelKey }) {
  const { t } = useI18n();

  return (
    <div className="field field--checkbox">
      <label>
        <Field type="checkbox" name={name} />
        {t(labelKey)}
      </label>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}
