import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Home() {
  const { data, loading, error } = useFetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Categories</h1>
      <div className="grid">
        {data?.categories?.map((cat) => (
          <Link key={cat.idCategory} to={`/category/${cat.strCategory}`}>
            <div>{cat.strCategory}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
