import React, { useRef, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import GitHubRepos from "./Components/GithubRepos/GithubRepos";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showRepos, setShowRepos] = useState(false);
  const [error, setError] = useState("");


  
  
  const handleScrollToSection = (section) => {
    if (section === "home") homeRef.current?.scrollIntoView({ behavior: "smooth" });
    else if (section === "about") aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    else if (section === "contact") contactRef.current?.scrollIntoView({ behavior: "smooth" });
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

  return (
    <div className="app-container">
      <Navbar onNavigate={handleScrollToSection} />

      <div className="main-content">
        <div ref={homeRef} className="section">
          <Home />
        </div>

        <div ref={aboutRef} className="section">
          <About />
        </div>


        {/* GitHub Repos section */}
        <GitHubRepos
          repos={repos}
          loading={loading}
          error={error}
          onFetchRepos={fetchRepos}
          showRepos={showRepos}
        />

        <div ref={contactRef} className="section">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;


