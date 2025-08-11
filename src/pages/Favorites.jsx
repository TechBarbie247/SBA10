import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import { useFetch } from "../hooks/useFetch";

export default function Favorites() {
  const { favorites } = useFavorites();

  if (!favorites.length) {
    return <p>No favorites yet. Go add some!</p>;
  }

  return (
    <div>
      <h1>Your Favorites</h1>
      {favorites.map((id) => (
        <FavoriteRecipe key={id} id={id} />
      ))}
    </div>
  );
}

function FavoriteRecipe({ id }) {
  const { data } = useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const meal = data?.meals?.[0];
  if (!meal) return null;
  return <Link to={`/recipe/${meal.idMeal}`}>{meal.strMeal}</Link>;
}
