import { useParams } from "react-router-dom";

export default function RecipeDetail() {
    const { id } = useParams();
    return <h1>Recipe Detail for ID: {id}</h1>;
}