import { useEvents } from "../data/queries/events";
import { useI18n } from "../lib/I18nProvider";

export default function EventsPage() {
  const { t, locale } = useI18n();
  const { data, isLoading, isError } = useEvents();

  console.log("dd======data", data);
  console.log("dd======isError", isError);

  if (isLoading) return <p>{t("loading")}</p>;
  if (isError) return <p>{t("error")}</p>;

  return (
    <section className="events">
      <div className="container">
        <h1>{t("events.title")}</h1>

        {data?.items?.length ? (
          <div className="grid">
            {data?.items?.map((ev) => (
              <div key={ev?.id} className="card">
                <h3>{ev?.title[locale]}</h3>
                <p>{new Date(ev?.start_datetime).toLocaleDateString()}</p>
                <p>{ev?.location[locale]}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>{t("events.empty")}</p>
        )}
      </div>
    </section>
  );
}
