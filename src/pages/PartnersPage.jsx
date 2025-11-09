import { usePartners } from "../data/queries/partners";
import { useI18n } from "../lib/I18nProvider";

export default function PartnersPage() {
  const { t, locale } = useI18n();
  const { data, isLoading, isError } = usePartners();

  const items = data?.data ?? [];

  if (isLoading) return <p>{t("loading", "Loading...")}</p>;
  if (isError) return <p>{t("error", "Something went wrong")}</p>;

  return (
    <section className="partners">
      <div className="container">
        <h1>{t("partners.title", "Partners")}</h1>

        {items.length ? (
          <div className="grid">
            {items.map((p) => (
              <div key={p?.id} className="card">
                <h3>{p?.name?.[locale] ?? p?.name}</h3>
                {p?.description && (
                  <p>
                    {typeof p.description === "object"
                      ? p.description[locale]
                      : String(p.description).slice(0, 160)}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>{t("partners.empty", "No partners available")}</p>
        )}
      </div>
    </section>
  );
}

