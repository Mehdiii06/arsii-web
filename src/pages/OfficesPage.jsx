import { useOffices } from "../data/queries/offices";
import { useI18n } from "../lib/I18nProvider";

export default function OfficesPage() {
  const { t, locale } = useI18n();
  const { data, isLoading, isError } = useOffices();

  const items = data?.data ?? [];

  if (isLoading) return <p>{t("loading", "Loading...")}</p>;
  if (isError) return <p>{t("error", "Something went wrong")}</p>;

  return (
    <section className="offices">
      <div className="container">
        <h1>{t("offices.title", "Offices")}</h1>

        {items.length ? (
          <div className="grid">
            {items.map((o) => (
              <div key={o?.id} className="card">
                <h3>{o?.name?.[locale] ?? o?.name}</h3>
                {o?.address && (
                  <p>
                    {typeof o.address === "object" ? o.address[locale] : o.address}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>{t("offices.empty", "No offices available")}</p>
        )}
      </div>
    </section>
  );
}

