import { useState, useEffect } from "react";
import DisplayCategories from "./Categories";
import { Link } from "react-router-dom";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3501/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  return (
    <div style={{margin:"4rem auto"}}>
      {/* <DisplayCategories /> */}
      <Link to={"/AllRecipes/add"} style={{}}>Add recipe</Link>
      <div style={{ display: "flex" , gap:"5rem", justifyContent:"center",flexWrap:"wrap"}}>
      {recipes.map((recipes) => {
        return (
          <div class="ui card" key={recipes.id}>
            <div class="image">
              <img src={recipes.image} style={{height:"32rem"}} />
            </div>
            <div class="content">
              <a class="header">{recipes.title}</a>
              <Link to={`/AllRecipes/${recipes.id}`}>View</Link>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
}

export default AllRecipes;
