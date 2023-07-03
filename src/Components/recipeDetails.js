import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {faker} from "@faker-js/faker"
import "./recipeDetails.css";
import axios from "axios"


export default function RecipeDetails() {
  let { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3501/recipes/${recipeId}`)
      .then((res) => res.json())
      .then((recipe) => setRecipe(recipe));
  }, [recipeId]);

  return (
    <div className="recipe-details">
      <div className="recipe-image">
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <div className="recipe-content">
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className="recipe-section">
          <h3>Ingredients:</h3>
          <p>{recipe.ingredients}</p>
        </div>
        <div className="recipe-section">
          <h3>Directions:</h3>
          <p>{recipe.directions}</p>
        </div>
        <div className="recipe-section">
          <h3>Category:</h3>
          <p>{recipe.category}</p>
        </div>
      </div>
      <h2>Comment Section</h2>
      <CommentSection/>
    </div>
  );
}



function CommentSection() {
  const [replyText, setReplyText] = useState('');
  const [comments, setComments] = useState([]);

  const handleReplyTextChange = (e) => {
    setReplyText(e.target.value);
  };

  const userName = faker.internet.userName();
  const avatar = faker.image.avatar();

  const handleAddReply = () => {
    const newComment = {
      author: userName,
      text: replyText,
      avatar: avatar,
      date: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);
    setReplyText('');
  };

  const formSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      author: userName,
      text: replyText,
      avatar: avatar,
      date: new Date().toLocaleString(),
    };

    axios
      .post('http://localhost:3501/comments', newComment)
      .then((response) => {
        console.log(response.data); // Optional: Handle the response data
      })
      .catch((error) => {
        console.log(error); // Optional: Handle the error
      });

    setComments([...comments, newComment]);
    setReplyText('');
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="ui comments">
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <a className="avatar">
              <img src={comment.avatar} alt="Avatar" />
            </a>
            <div className="content">
              <a className="author">{comment.author}</a>
              <div className="metadata">
                <div className="date">{comment.date}</div>
              </div>
              <div className="text">{comment.text}</div>
            </div>
          </div>
        ))}
        <div className="ui reply form">
          <div className="field">
            <textarea value={replyText} onChange={handleReplyTextChange}></textarea>
          </div>
          <div className="ui primary submit labeled icon button" onClick={handleAddReply}>
            <i className="icon edit"></i> Add Reply
          </div>
        </div>
      </div>
    </form>
  );
}











