import { useState } from "react";
import bgLanding from "../assets/background-1.png";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

export default function SignIn() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const isValid = form.email.includes("@") && form.password.length >= 6;

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!isValid) return setError("Please enter a valid email and password.");
    // TODO: call your API here
    // fake success:
    navigate("/");
  };

  return (
    <section
      className="auth auth--signin"
      style={{ "--hero-bg": `url(${bgLanding})` }}
    >
      <div className="auth__head">
        <h1>Sign in</h1>
      </div>

      <form className="auth__card" onSubmit={onSubmit} noValidate>
        <div className="field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>

        <div className="field">
          <div className="pwd">
            <input
              type={showPwd ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={onChange}
              required
              minLength={6}
            />
            <button
              type="button"
              className="pwd-toggle"
              onClick={() => setShowPwd((s) => !s)}
              aria-label={showPwd ? "Hide password" : "Show password"}
            >
              {showPwd ? (
                <Eye className="pwd-icon" />
              ) : (
                <EyeClosed className="pwd-icon" />
              )}
            </button>
          </div>
        </div>

        {error && <div className="auth__error">{error}</div>}

        <button className="auth__submit" disabled={!isValid}>
          Login
        </button>

        <p className="auth__alt">
          Create an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </section>
  );
}
