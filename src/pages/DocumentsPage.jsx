import { useDocuments } from "../data/queries/documents";
import { useI18n } from "../lib/I18nProvider";

export default function DocumentsPage() {
  const { t, locale } = useI18n();
  const { data, isLoading, isError } = useDocuments();

  const items = data?.data ?? [];

  if (isLoading) return <p>{t("loading", "Loading...")}</p>;
  if (isError) return <p>{t("error", "Something went wrong")}</p>;

  return (
    <section className="documents">
      <div className="container">
        <h1>{t("documents.title", "Documents")}</h1>

        {items.length ? (
          <div className="grid">
            {items.map((d) => (
              <div key={d?.id} className="card">
                <h3>{d?.title?.[locale] ?? d?.title}</h3>
                {d?.description && (
                  <p>
                    {typeof d.description === "object"
                      ? d.description[locale]
                      : String(d.description).slice(0, 160)}
                  </p>
                )}
                {d?.file_path && (
                  <p>
                    <a href={d.file_path} target="_blank" rel="noreferrer">
                      {t("documents.download", "Download")}
                    </a>
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>{t("documents.empty", "No documents available")}</p>
        )}
      </div>
    </section>
  );
}

