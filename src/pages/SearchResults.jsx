import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // e.g. ?query=beef

  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Search results for "{query}"</h1>
      {data?.meals?.length ? (
        data.meals.map((meal) => (
          <div key={meal.idMeal}>{meal.strMeal}</div>
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
