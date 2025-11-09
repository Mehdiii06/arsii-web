import { useOpportunities } from "../data/queries/opportunities";
import { useI18n } from "../lib/I18nProvider";

export default function OpportunitiesPage() {
  const { t, locale } = useI18n();
  const { data, isLoading, isError } = useOpportunities();

  const items = data?.data ?? [];

  if (isLoading) return <p>{t("loading", "Loading...")}</p>;
  if (isError) return <p>{t("error", "Something went wrong")}</p>;

  return (
    <section className="opportunities">
      <div className="container">
        <h1>{t("opportunities.title", "Opportunities")}</h1>

        {items.length ? (
          <div className="grid">
            {items.map((o) => (
              <div key={o?.id} className="card">
                <h3>{o?.title?.[locale] ?? o?.title}</h3>
                {o?.description && (
                  <p>
                    {typeof o.description === "object"
                      ? o.description[locale]
                      : String(o.description).slice(0, 160)}
                  </p>
                )}
                {o?.external_link && (
                  <p>
                    <a href={o.external_link} target="_blank" rel="noreferrer">
                      {t("opportunities.apply", "View details")}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>{t("opportunities.empty", "No opportunities available")}</p>
        )}
      </div>
    </section>
  );
}

