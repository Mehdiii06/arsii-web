import { Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div style={{ padding: "2rem" }}>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
