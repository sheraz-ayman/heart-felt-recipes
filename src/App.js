import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import AllRecipes from "./Components/AllRecipes";
import Contact from "./Components/Contact";
import AddRecipe from "./Components/AddRecipes";
import RecipeDetails from "./Components/recipeDetails";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="AllRecipes" element={<AllRecipes />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="AllRecipes/add" element={<AddRecipe />} />
        <Route path="AllRecipes/:recipeId" element={<RecipeDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
