import { posts } from "../data/posts";

export default function Blog() {
  return (
    <section className="blog">
      <div className="container">
        <div className="heading">
          <h2>Recent Posts</h2>
          <p>Insights, updates, and opinion pieces.</p>
        </div>

        <div className="grid">
          {/* Left: large feature card */}
          <article className="post">
            <div className="tag">{posts[0].tag}</div>
            <div className="title">{posts[0].title}</div>
            <div className="author">{posts[0].author}</div>
          </article>

          {/* Right: stacked small cards */}
          <div className="stack">
            {posts.slice(1).map((p, i) => (
              <article className="post" key={i}>
                <div className="tag">{p.tag}</div>
                <div className="title">{p.title}</div>
                <div className="author">{p.author}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
