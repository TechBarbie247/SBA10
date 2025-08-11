import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?query=${term}`);
    setTerm("");
  };

  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
      <form onSubmit={handleSubmit} style={{ display: "inline" }}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search recipes..."
        />
        <button type="submit">Search</button>
      </form>
    </nav>
  );
}
