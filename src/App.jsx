import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Category from "./pages/Category";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";
import SearchResults from "./pages/SearchResults";

export default function App() {

  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/category/:categoryName" element={<Category />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<SearchResults />} />
    </Routes>
    </Router>
  );
}
