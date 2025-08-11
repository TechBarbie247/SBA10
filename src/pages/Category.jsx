import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function Category() {
  const { categoryName } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>{categoryName}</h1>
      <div className="grid">
        {data?.meals?.map((meal) => (
          <Link key={meal.idMeal} to={`/recipe/${meal.idMeal}`}>
            <div>{meal.strMeal}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
