import React, { useRef, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import GitHubRepos from "./Components/GithubRepos/GithubRepos";
import Form from "./Components/Forms/Form";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const projectsRef = useRef(null); 

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [error, setError] = useState("");

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleScrollToSection = (section) => {
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    else if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    else if (section === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
    else if (section === "projects") projectsRef.current?.scrollIntoView({ behavior: "smooth" }); // ✅ Correct this
  };

  const fetchRepos = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch('https://api.github.com/user/repos', {
        headers: {
          Authorization: 'Bearer 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'
        }
      });
      if (!response.ok) throw new Error("Failed to fetch repositories");
      const data = await response.json();
      setRepos(data);
      setShowRepos(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setIsSignedIn(true);
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="app-container">
      {!isSignedIn ? (
        <Form 
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <>
          <Navbar onNavigate={handleScrollToSection} />

          <div className="main-content">
            <div ref={homeRef} className="section">
              <Home />
            </div>

            <div ref={aboutRef} className="section">
              <About />
            </div>

            {/* GitHub Repos section */}
            <div ref={projectsRef} className="section"> {/* ✅ Correct */}
              <GitHubRepos
                repos={repos}
                loading={loading}
                error={error}
                onFetchRepos={fetchRepos}
                showRepos={showRepos}
              />
            </div>

            <div ref={contactRef} className="section">
              <Contact />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
