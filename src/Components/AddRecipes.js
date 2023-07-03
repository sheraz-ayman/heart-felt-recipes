import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import "./AddRecipes.css"

function AddRecipes() {
  const[image,setImage]=useState('')
  const[category,setCategory]=useState('')
  const[description,setDescription]=useState('')
  const[directions,setDirections]=useState('')
  const[title,setTitle]=useState('')
  const[ingredients,setIngredients]=useState('')
  let navigate = useNavigate()


  const formSubmit=(e) =>{
    e.preventDefault();
    axios.post("http://localhost:3501/recipes",{
      title,
      image,
      category,
      description,
      ingredients,
      directions,
      Comments:[]
  })
      .then((data)=>{console.log(data);
          navigate('/AllRecipes')
      });
  }
  return (
    <form className="recipe-form" onSubmit={formSubmit}>
      <h2>Add New Recipe</h2>
      <div className="form-group">
        <label>Title:</label>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Image URL:</label>
        <input type="text" onChange={(e) => setImage(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea  onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <textarea  onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Directions:</label>
        <textarea  onChange={(e) => setDirections(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" onChange={(e) => setCategory(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

//   )
// }

export default AddRecipes;