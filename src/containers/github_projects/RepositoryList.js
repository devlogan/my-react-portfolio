import { useState, useEffect } from "react";

const RepositoryList = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch repositories");
        }
        const data = await response.json();
        setRepos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  console.log(repos);
  return (
    <ul>
      {repos.map((repo) => {
        if (repo.owner.login === username)
          return (
            <li key={repo.id}>
              <a target="_blank" href={repo.html_url}>
                {repo.name}
              </a>
            </li>
          );
      })}
    </ul>
  );
};

export default RepositoryList;
