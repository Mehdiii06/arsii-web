import { Field, ErrorMessage } from "formik";
import { useI18n } from "../../lib/I18nProvider";

export default function RadioGroup({ name, title, options, labelKey }) {
  const { t } = useI18n();

  return (
    <div className="field field--radio">
      <label className="field__label">{t(labelKey)}</label>
      <div className="radio-options">
        {title && <div>{title}</div>}
        {options.map((opt) => (
          <label key={opt.value} className="radio-option">
            <Field type="radio" name={name} value={opt.value} />
            {t(opt.labelKey)}
          </label>
        ))}
      </div>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}
