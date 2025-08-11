import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";

export default function RecipeDetail() {
  const { recipeId } = useParams();
  const { data, loading, error } = useFetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
  );

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  const meal = data?.meals?.[0];

  return (
    <div>
      <h1>{meal.strMeal}</h1>
      <img src={meal.strMealThumb} alt={meal.strMeal} width="300" />
      <p>{meal.strInstructions}</p>

      {isFavorite(meal.idMeal) ? (
        <button onClick={() => removeFavorite(meal.idMeal)}>Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(meal.idMeal)}>Add Favorite</button>
      )}
    </div>
  );
}
