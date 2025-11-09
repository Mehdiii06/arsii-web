import { Field, ErrorMessage } from "formik";
import { useI18n } from "../../lib/I18nProvider";

export default function SelectField({ name, labelKey, options }) {
  const { t } = useI18n();

  return (
    <div className="field field--select">
      <label htmlFor={name} className="field__label">
        {t(labelKey)}
      </label>
      <Field as="select" name={name} id={name}>
        <option value="">{t("common.selectOption")}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {t(opt.labelKey)}
          </option>
        ))}
      </Field>
      <ErrorMessage name={name} component="div" className="error-message" />
    </div>
  );
}
