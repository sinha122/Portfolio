import React, { useEffect } from "react";

const GitHubRepos = ({ repos, error, onFetchRepos, showRepos }) => {
  useEffect(() => {
    onFetchRepos();
  }, [onFetchRepos]);

  return (
    <div
      className="section"
      style={{
        padding: "2rem",
        backgroundColor: "#111",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "2rem" }}>
        GitHub Repositories
      </h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {showRepos && repos.length === 0 && (
        <p style={{ color: "white" }}>No repositories found.</p>
      )}

      {showRepos && repos.length > 0 && (
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            padding: "1.5rem",
            maxWidth: "1000px",
            margin: "0 auto",
            overflowX: "auto",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            {repos.map((repo) => (
              <div
                key={repo.id}
                style={{
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  width: "calc(33.333% - 1rem)",
                  padding: "1rem",
                  textAlign: "center",
                  minWidth: "250px",
                }}
              >
                <h3
                  style={{
                    color: "#333",
                    fontWeight: "bold",
                    marginBottom: "0.5rem",
                    fontSize: "18px",
                  }}
                >
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "red",
                      textDecoration: "none",
                    }}
                  >
                    {repo.name}
                  </a>
                </h3>
              
                
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GitHubRepos;
