import { Routes, Route, Link, NavLink } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("./pages/BlogPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const OpportunitiesPage = lazy(() => import("./pages/OpportunitiesPage"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const DocumentsPage = lazy(() => import("./pages/DocumentsPage"));
const OfficesPage = lazy(() => import("./pages/OfficesPage"));
const Join = lazy(() => import("./pages/Join"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));

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
            <Route path="/opportunities" element={<OpportunitiesPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/offices" element={<OfficesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/join" element={<Join />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
