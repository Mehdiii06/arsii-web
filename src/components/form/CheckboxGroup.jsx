import { Field, ErrorMessage } from "formik";
import { useI18n } from "../../lib/I18nProvider";

export default function CheckboxGroup({ name, options }) {
  const { t } = useI18n();

  return (
    <div className="field field--checks">
      {options.map((opt) => (
        <label key={opt.value} className="checkbox-label">
          <Field type="checkbox" name={opt.value} />
          {t(opt.labelKey)}
        </label>
      ))}
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}
