import { useParams } from "react-router-dom";
export default function Category() {
    const { categoryName } =useParams();
    return <h1>Category: {categoryName}</h1>;
}